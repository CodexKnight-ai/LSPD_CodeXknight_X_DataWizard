import asyncHandler from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiErrors.js"
import {User} from "../models/users.model.js"
// import {uploadOnCloudinary} from "../utils/cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js"

const generateAccessAndRefreshTokens = async(userId)=>{
    try{
        const user = await User.findById(userId)
        const accessToken= user.generateAccessToken()
        const refreshToken= user.generateRefreshToken()

        user.refreshToken = refreshToken
        await user.save({validateBeforeSave:false})

        return {accessToken, refreshToken}
    }
    catch(error){
        throw new ApiError(500, "Something went Wrong while generating refresh and access Tokens")
    }
}
const SignupUser = asyncHandler(async (req, res) => {
    res.status(200).json({
        message: "Okayy",
    });

// get user details from frontend
// validation if fields are not empty
// check if user already exists: username, email
// check for images, check for avatar
// upload them to cloudinary, avatar
// create user object - create entry in db
//remove password and refresh token field from response
// check for user creation
// return res

    const { username, email, phoneNumber, password } = req.body;
    console.log("Email:", email);
    if(
        [username,email,phoneNumber,password].some((field)=>
        field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are required")
    }
    const existedUser = await User.findOne({
        $or:[{ username }, { email },{phoneNumber}]
    })
    if(existedUser){
        throw new ApiError(409, "User with email or username already exist")
    }
    

    const user= await User.create({
        email:email,
        password:password,
        username:username.toLowercase()
    })
    const createdUser= User.findById(user._id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user !!")
    }
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )
})
const loginUser = asyncHandler(async(req,res)=>{
    // req body -> data
    // username or email
    //find the user
    //password check
    //access and referesh token
    //send cookie
    const {email,password}=req.body
    if(!password && !email){
        throw new ApiError(400, "username or password is required")
    }
    const user = await User.findOne({
        $or:[{email}]
    })
    if(!user){
        throw new ApiError(404 , "User does not exist")
    }
    const isPasswordValid=await user.isPasswordCorrect(password)

    if(!isPasswordValid){
        throw new ApiError(401, "Invalid user credentials")
    }

    const {accessToken, refreshToken}=await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await user.findById(user._id).select("-password -refreshToken")

    //options to send cookies
    const options={
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .cookie("accessToken",accessToken,options)
    .cookie("refreshToken",refreshToken,options)
    .json(
        new ApiResponse(
            200,
            {
                user:loggedInUser,accessToken,refreshToken
            },
            "User logged In Successfully"
        )
    )
})

const logoutUser = asyncHandler(async(req, res) => {
    await User.findByIdAndUpdate(
        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "User logged Out"))
})

const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(401, "unauthorized request")
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )
    
        const user = await User.findById(decodedToken?._id)
    
        if (!user) {
            throw new ApiError(401, "Invalid refresh token")
        }
    
        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, "Refresh token is expired or used")
            
        }
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const {accessToken, newRefreshToken} = await generateAccessAndRefreshTokens(user._id)
    
        return res
        .status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", newRefreshToken, options)
        .json(
            new ApiResponse(
                200, 
                {accessToken, refreshToken: newRefreshToken},
                "Access token refreshed"
            )
        )
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})


export { SignupUser,loginUser,logoutUser,refreshAccessToken };
