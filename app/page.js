import React from "react";
import Navbar from "@/Components/Navbar.jsx";
import Hero from "@/Components/Hero.jsx";
import About from "@/Components/About.jsx";
import Rooms from "@/Components/Rooms.jsx";
import Services from "@/Components/Services.jsx";
import Gallery from "@/Components/Gallery.jsx";
import Message from "@/Components/Message.jsx";
import Map from "@/Components/Map.jsx";
import Footer from "@/Components/Footer.jsx";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Navbar />
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Gallery />
        <Message />
        <Map />
        <Footer />
      </main>
    </>
  )
}
