import React from "react";
import Link from "next/link";

export default function Navbar () {

    const whatsappNumber = "919007062180";
    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <>
            <div className="navbar flex items-center gap-56 pt-16 z-50 text-white">
                <div>
                    <Link className="text-lg" href="#">Kingsukh 
                    <span className="block">Guest House</span></Link>
                </div>
                
                <div className="flex gap-8">
                    <Link className="text-lg" href="#">Home</Link>
                    <Link className="text-lg" href="#about">About</Link>
                    <Link className="text-lg" href="#Services">Services</Link>
                    <Link className="text-lg" href="#Rooms">Rooms</Link>
                    <Link className="text-lg" href="#Gallery">Gallery</Link>
                    <Link className="text-lg" href="#Message">Contact</Link>
                </div>

                <div>
                    <a className="text-white text-base font-semibold bg-custom-pink rounded-md px-6 py-3" href={whatsappUrl}>BOOK NOW</a>
                </div>
                
            </div>
        </>
    )
}