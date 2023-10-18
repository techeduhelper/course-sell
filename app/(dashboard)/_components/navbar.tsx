'use client'

import NavbarRoutes from "@/components/NavbarRoutes";
import { MobileSidebar } from "./mobileSidebar";

const Navbar = () => {
    return (
        <div className="p-4 pl-2 flex items-center h-full bg-slate-100 shadow-sm">
            <MobileSidebar />
            <NavbarRoutes />
        </div>
    );
}

export default Navbar;