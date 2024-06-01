import React from "react";
import Link from 'next/link';

export default function Navbar () {

    const whatsappNumber = "919007062180";

    const whatsappUrl = `https://wa.me/${whatsappNumber}`;

    return (
        <>
            <div className="navbar flex items-center gap-36 text-white">
                <div >
                    <Link className="font-bold text-xl" href="#">Kingsukh 
                    <span className="block">Guest House</span></Link>
                </div>
                
                <div className="flex gap-8">
                    <Link className="font-bold text-xl" href="#">Home</Link>
                    <Link className="font-bold text-xl" href="/about">About</Link>
                    <Link className="font-bold text-xl" href="/services">Services</Link>
                    <Link className="font-bold text-xl" href="/rooms">Rooms</Link>
                    <Link className="font-bold text-xl" href="/gallery">Gallery</Link>
                    <Link className="font-bold text-xl" href="/contact">Contact</Link>
                </div>

                <div>
                    <a className="font-bold text-xl bg-custom-pink rounded-md px-4 py-1" href={whatsappUrl}>Book Now</a>
                </div>
                
            </div>
        </>
    )
}