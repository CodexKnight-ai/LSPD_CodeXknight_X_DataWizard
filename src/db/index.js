import mongoose from "mongoose"
import DB_NAME from "../contants.js" 

const connectDB = async () => {
    try{
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n [+] Mongodb connection !! DB  Host : ${connectionInstance.connection.host}`);
    }
    catch(error){
        console.log("[-] Mongoose Connection Error : ",error);
        process.exit(1);
        
    }
}

export {connectDB};