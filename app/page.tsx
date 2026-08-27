import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import OurStory from "@/components/OurStory";
import RSVP from "@/components/RSVP";
import WeddingDetail from "@/components/WeddingDetail";
import Image from "next/image";

export default function Home() {
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
