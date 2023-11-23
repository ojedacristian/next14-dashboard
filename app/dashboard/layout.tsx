import React from "react";
import SideNav from '../ui/dashboard/sidenav';

export default function Layout ({ children }: { children: React.ReactNode }) {
    return <div className="flex h-screen">
    <div className=" w-full md:w-64">
        <SideNav/>
    </div>
    <div className="flex-grow p-6">
        { children}
    </div>
    </div>
}