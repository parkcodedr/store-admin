"use client";
import { UserButton } from "@clerk/nextjs";
import React from "react";
import MainNav from "@/components/mainnav";
import StoreSwitcher from "@/components/store-switcher";


const Navbar = () => {

  return (
    <div className="border-b">
      <div className="flex items-center px-4 h-16">
        <StoreSwitcher />
        <MainNav />
        <div className="ml-auto space-x-4 flex items-end">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
