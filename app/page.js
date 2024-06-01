import React from "react";
import Navbar from "@/Components/Navbar";
import Hero from "@/Components/Hero";
// import About from "@/Components/About";
// import Rooms from "@/Components/Rooms";
// import Services from "@/Components/Services";
// import Gallery from "@/Components/Gallery";
// import Message from "@/Components/Message";
// import Map from "@/Components/Map";
// import Footer from "@/Components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Hero />
        {/* <About />
        <Rooms />
        <Services />
        <Gallery />
        <Message />
        <Map />
        <Footer /> */}
      </main>
    </>
  )
}
