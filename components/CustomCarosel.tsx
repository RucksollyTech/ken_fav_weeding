"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryImage = {
    src: string;
    alt: string;
};

const images: GalleryImage[] = [
    {
        src: "/images/03_couple_on_isiagu_standing.jpg",
        alt: "Favour and Kenneth",
    },
    {
        src: "/images/04_couple_on_brown_standing.jpg",
        alt: "Favour and Kenneth",
    },
    {
        src: "/images/02_couple_on_white_standing.jpg",
        alt: "Favour and Kenneth",
    },
    {
        src: "/images/05_couple_on_brown_kissing.jpg",
        alt: "Favour and Kenneth",
    },
    {
        src: "/images/06_couple_on_edo_attire.jpg",
        alt: "Favour and Kenneth",
    },
];

const CustomCarosel = () => {
    const [activeIndex, setActiveIndex] = useState(1);

    const previousIndex =
        activeIndex === 0 ? images.length - 1 : activeIndex - 1;

    const nextIndex =
        activeIndex === images.length - 1 ? 0 : activeIndex + 1;

    const handlePrevious = () => {
        setActiveIndex(previousIndex);
    };

    const handleNext = () => {
        setActiveIndex(nextIndex);
    };

    return (
        <section>
            <div className="mt-14 flex items-center justify-center gap-4 md:gap-8 lg:gap-14">

                {/* Previous Button */}
                <button
                    onClick={handlePrevious}
                    className="
                        hidden
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e8c47e]
                        text-[#e8c47e]
                        transition
                        hover:bg-[#e8c47e]
                        hover:text-white
                        md:flex
                        cursor-pointer
                    "
                    aria-label="Previous image"
                >
                    <ChevronLeft size={28} strokeWidth={1.5} />
                </button>

                {/* Previous Image */}
                <button
                    onClick={handlePrevious}
                    className="
                        relative
                        hidden
                        h-[350px]
                        w-[270px]
                        shrink-0
                        overflow-hidden
                        rounded-[18px]
                        shadow-xl
                        transition-all
                        duration-500
                        lg:block
                        cursor-pointer
                    "
                >
                    <Image
                        src={images[previousIndex].src}
                        alt={images[previousIndex].alt}
                        fill
                        className="object-cover"
                        sizes="270px"
                    />
                </button>

                {/* Active Image */}
                <div
                    className="
                        relative
                        h-[430px]
                        w-full
                        max-w-[330px]
                        shrink-0
                        overflow-hidden
                        rounded-[20px]
                        shadow-2xl
                        transition-all
                        duration-500
                        sm:h-[500px]
                        sm:max-w-[380px]
                        md:h-[480px]
                        md:max-w-[360px]
                    "
                >
                    <Image
                        src={images[activeIndex].src}
                        alt={images[activeIndex].alt}
                        fill
                        priority
                        className="object-cover"
                        sizes="
                            (max-width: 640px) 90vw,
                            380px
                        "
                    />
                </div>

                {/* Next Image */}
                <button
                    onClick={handleNext}
                    className="
                        relative
                        hidden
                        h-[350px]
                        w-[270px]
                        shrink-0
                        overflow-hidden
                        rounded-[18px]
                        shadow-xl
                        transition-all
                        duration-500
                        lg:block
                        cursor-pointer
                    "
                >
                    <Image
                        src={images[nextIndex].src}
                        alt={images[nextIndex].alt}
                        fill
                        className="object-cover"
                        sizes="270px"
                    />
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="
                        hidden
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e8c47e]
                        text-[#e8c47e]
                        transition
                        hover:bg-[#e8c47e]
                        hover:text-white
                        md:flex
                        cursor-pointer
                    "
                    aria-label="Next image"
                >
                    <ChevronRight size={28} strokeWidth={1.5} />
                </button>
            </div>

            {/* Mobile Controls */}
            <div className="mt-6 flex items-center justify-center gap-4 md:hidden">
                <button
                    onClick={handlePrevious}
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e8c47e]
                        text-[#e8c47e]
                        cursor-pointer
                    "
                    aria-label="Previous image"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={handleNext}
                    className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#e8c47e]
                        text-[#e8c47e]
                        cursor-pointer
                    "
                    aria-label="Next image"
                >
                    <ChevronRight size={24} />
                </button>
            </div>

            {/* Pagination Dots */}
            <div className="mt-10 flex items-center justify-center gap-5">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                        className={`
                            h-3
                            w-3
                            rounded-full
                            transition-all
                            duration-300
                            ${
                                activeIndex === index
                                    ? "bg-[#123c35]"
                                    : "bg-[#e8c47e]"
                            }
                        `}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomCarosel;