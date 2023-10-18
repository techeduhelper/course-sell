import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { Sidebar } from "./sidebar";
import Image from 'next/image'
import Link from "next/link";




export const MobileSidebar = () => {
    return (
        <Sheet>
            <Link href="/">
                <Image
                    height={130}
                    width={180}
                    alt="logo"
                    src="/course-sell.svg"
                />
            </Link>
            <SheetTrigger className="md:hidden pr-4 hover:opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent side="left" className="p-0 bg-white">
                <Sidebar />
            </SheetContent>
        </Sheet>
    );
}