'use client'
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurStory from "@/components/OurStory";
import RSVP from "@/components/RSVP";
import WeddingDetail from "@/components/WeddingDetail";
import { useEffect } from "react";
import AOS from 'aos';
export default function Home() {
    useEffect(() => {
        AOS.init();
        
      }, []);
    return (
        <div className="bg-body overflow-x-hidden">
            <NavBar />
            <Hero />
            <OurStory />
            <WeddingDetail />
            <Gallery />
            <RSVP />
            <Footer />
        </div>
    );
}
