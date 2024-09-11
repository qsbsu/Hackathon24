import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const Font = Poppins({
    subsets:["latin"],
    weight:["400", "800"]
})

export const Logo = () => {
    return(
        <div className="hidden md:flex items-center gap-x-2">
            <Image src="/logo.png" height="40" width="100" alt="Logo"/>
            
        </div>
    )
}