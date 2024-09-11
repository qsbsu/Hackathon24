"use client";
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export const Heading = () => {
    const handleScroll = () => {
        const eventsSection = document.getElementById("toggle-events");
        if (eventsSection) {
            eventsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="h-screen flex flex-col justify-center items-center max-w-3xl text-center">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                Your Ideas, Quantum Technologies. Unified. 
                Welcome to <span className="underline">QSBSU Hackathon 24'</span>
            </h1>

            <Button 
                onClick={handleScroll} 
                className="relative mt-8 text-base sm:text-lg md:text-xl py-4 px-5 sm:py-5 sm:px-5 md:py-6 md:px-9 overflow-hidden group">
                
                {/* Gradient layer */}
                <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></span>

                {/* Text and arrow content */}
                <span className="relative z-10 flex items-center pointer-events-auto">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2" />
                </span>
            </Button>


        </div>


    );
};
