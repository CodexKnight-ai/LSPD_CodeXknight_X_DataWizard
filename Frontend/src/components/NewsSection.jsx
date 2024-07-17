import React from "react";


const NewsSection = () => {
    return (
        <>
            <section className=" w-screen h-screen overflow-x-hidden">
                <div className="relative bg-blackish w-screen h-full overflow-y-hidden">
                    <div className='mt-[8vh]  bg-[url("/newsSection.png")] w-full h-full bg-contain bg-center bg-no-repeat'>
                        <p className="text-whitish font-gtaHeadingText1 absolute top-[8vh] left-[5vh] text-[3rem]">Lspd News Barrier</p>

                    </div>
                    <div className="flex gap-[1.4em] bg-white py-[0.em] absolute bottom-[3em] 0 w-screen -rotate-[3deg]">
                        <AimationCards />
                    </div>
                </div>
                <div className="w-screen flex gap-[15px] p-[15px]">
                    <div className="w-[65%]  flex flex-col gap-[15px]">
                        <div className="w-[100%] h-[40rem]" >
                            <NewsGridCardCarousel/>
                        </div>
                        <div className=" w-[100%] flex gap-[15px] h-[21rem] ">
                            <NewsGridCard1 />
                            <NewsGridCard1 />
                            <NewsGridCard1 />
                        </div>
                        <div className="w-full flex justify-center gap-[15px] h-[20em]">
                            <NewsGridCard2/> 
                            <NewsGridCard2/> 
                        </div>
                    </div>
                    <div id="newsSectionSideBar" className=" w-[35%] h-[83rem] p-[10px] rounded-[1.4em] flex flex-col gap-[15px] overflow-x-scroll">
                            <NewsSideBar />
                            
                    </div>
                </div>
            </section>

        </>
    )
}


const NewsGridCard1 = () => {
    return (
        <>
            <article class="font-gtaDescriptionText w-[24em] h-[21em] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-3 pb-6 pt-40 max-w-sm mx-auto ">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a" alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">Wo to mar gaya</h3>
                <div class="z-10 mt-2 gap-y-1 overflow-x-hidden text-sm leading-6 text-gray-300">Wo mar gaya kyoki kya kare use kisi ne mar dala ab isme ham kya kare</div>
            </article>

        </>
    )
}

const NewsGridCard2 = () => {
    return (
        <>
            <article class="font-gtaDescriptionText w-[50%] h-[21em] relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-3 pb-6 pt-40">
                <img src="/nightCity.jpg" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">Wo to mar gaya</h3>
                <div class="z-10 mt-2 gap-y-1 overflow-x-hidden text-sm leading-6 text-gray-300">Wo mar gaya kyoki kya kare use kisi ne mar dala ab isme ham kya kare</div>
            </article>

        </>
    )
}

const NewsGridCardCarousel = () => {
    return (
        <>
            <div className="w-full h-full bg-dblue rounded-[1.2em]">
            <article class="font-gtaDescriptionText overflow-auto w-full h-full relative isolate flex flex-col justify-end  rounded-[1.2em] px-5 pb-10 pt-40  ">
                <img src="./newsBackground.jpg" class="absolute inset-0 h-full w-full object-cover overflow-hidden" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h2 class="z-10 mt-3 text-5xl font-bold text-white">Wo to mar gaya</h2>
                <div class="z-10 mt-5 ml-[3px] gap-y-1 overflow-x-hidden text-md leading-6 text-gray-300">Wo mar gaya kyoki kya kare use kisi ne mar dala ab isme ham kya kare</div>
            </article>
            </div>
        </>
    )
}

const NewsSideBarCard = () => {
    return (
        <>
            <div className="w-full h-[10em] bg-white shadow-xl rounded-[1.2em] p-[10px]">
            <article class="font-gtaDescriptionText  w-full h-full relative isolate flex justify-between  rounded-[1.2em]  ">
                <div className="w-[20%] overflow-hidden">   
                    <img src="./newsBackground.jpg" class="rounded-[0.8em] absolute inset-0 h-full w-[8.5rem] object-cover overflow-hidden" />
                </div>
                <div className="w-[70%] h-full">
                    <h2 class="mt-3 text-2xl font-bold text-blackish">Wo to mar gaya</h2>
                    <div class="mt-5 ml-[3px] gap-y-1 overflow-x-hidden text-md leading-6 text-blackish">Wo mar gaya kyoki kya kare use kisi ne mar dala ab isme ham kya kare</div>
                </div>
            </article>
            </div>
        </>
    )
}
const NewsSideBar = () => {
    return(
        <>
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
         <NewsSideBarCard />
        </>
    )
}
const AimationCards = () => {
    return (
        <>
            <section class="animationSection" >
                <div class="scroll" >
                    {/* <!-- First set of images --> */}
                    <div>
                        <img src="/crim1.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim1.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim4.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    <div>
                        <img src="/LandFDesk.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim1.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim4.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    {/* <!-- Duplicate the images for seamless looping --> */}
                    <div>
                        <img src="/crim1.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim1.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim4.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    <div>
                        <img src="/LandFDesk.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim1.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim4.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim3.jpeg"></img>
                    </div>
                    <div>
                        <img src="/crim2.jpeg"></img>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewsSection;