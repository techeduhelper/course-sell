'use client'

import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebarItem";

const targetRoutes = [
    {
        icon: Layout,
        label: 'Dashboard',
        href: '/'
    },
    {
        icon: Compass,
        label: 'Browse',
        href: '/search'
    },

]

const isTeacherRoutes = [
    {
        icon: Layout,
        label: 'Course',
        href: '/'
    },
    {
        icon: Compass,
        label: 'Analytics',
        href: '/search'
    },

]


const SidebarRoutes = () => {

    return (
        

        <div className="w-full flex flex-col justify-center">
            {
                targetRoutes.map((route, index) => (
                    <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                    />
                    ))
                    
                }
        </div>
                
    );
}

export default SidebarRoutes;