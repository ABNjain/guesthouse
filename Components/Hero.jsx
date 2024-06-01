import React from "react";

export default function Hero() {

    const whatsappNumber = "919007062180";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <>
            <div className="hero w-full h-screen relative">
                <div className="absolute inset-0">
                    <img src="/ayodhya.webp" alt="Hero Photo" className="-mt-56 z-2 object-bottom w-full h-[800px]" />
                </div>

                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col text-center mt-16">
                        <h1 className="text-xl text-custom-grey">Simple-Unique-Friendly</h1>
                        <h1 className="text-white inline text-7xl font-semibold leading-snug text-center">Make Yourself At Home <span className="block">In Our <a className="text-custom-pink">Guest House</a>.</span></h1>
                    </div>

                    <div className="bg-white flex justify-center items-center w-3/4 h-28 mt-32 rounded-lg">
                        <a className="text-white text-base font-semibold bg-custom-pink rounded-md px-6 py-3" href={whatsappUrl}>BOOK NOW</a>
                    </div>
                </div>
            </div>
        </>
    )
}