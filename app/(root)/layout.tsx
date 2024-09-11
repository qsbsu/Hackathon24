"use client"; // Mark as Client Component

import React from "react";
import { NavBar } from "./_components/navbar";

const MarketingLayout = ({children}:{children: React.ReactNode}) => {
    return ( <div className="h-full dark:bg-[#1F1F1F]">
        <NavBar />
        <main className="h-full pt-40">
            {children}
        </main>
    </div> );
}
 
export default MarketingLayout;