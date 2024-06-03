// About Component
import React from "react";

export default function About() {

    const whatsappNumber = "919007062180";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <div id="about" className="flex">
                <div className="left w-1/2 flex justify-center items-center">
                    <img src="/out.jpg" alt="Out Look of the guesthouse" className="p-5 ml-28 mt-24 w-3/5 h-[600px]" />
                </div>

                <div className="right w-1/2 text-black mt-40">
                    <h3>ABOUT US <hr className="bg-custom-pink" /> </h3>
                    <p className="justify-start text-5xl font-bold mt-2 w-3/4">The Best Holidays Start Here!</p>
                    <p className="mt-8 w-4/5 text-lg font-light">Embark on a tranquil journey at our Kingsukh Guest House, enveloped by the scenic allure of Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and the captivating Panchat Dam. Revel in the embrace of comfort, relish delightful meals, and unwind in our verdant garden oasis. Your ideal retreat beckons, promising a harmonious blend of nature's beauty and heartfelt hospitality. Explore the hidden gems of Purulia, creating memories that linger long after your stay.</p>
                    <p className="text-blue-600 text-lg font-extrabold my-6 pr-28">Address: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156 <br /> Contact us: +91 9007062180</p>
                    <a className="text-white text-base font-semibold bg-custom-pink rounded-md px-6 py-3" href={whatsappUrl}>BOOK NOW</a>
                </div>
        </div>
    );
}
