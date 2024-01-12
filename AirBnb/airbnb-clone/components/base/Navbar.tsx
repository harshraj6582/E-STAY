import React from "react";
import BrandLogo from "./BrandLogo";
import { MenuIcon, Search } from "lucide-react";
import NavMenu from "./NavMenu";
import MobileNav from "./MobileNav";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-10 border-b-[1px]">
      <div className="hidden md:block ">
        {/* First COm */}

        <BrandLogo />
      </div>

      <div className="w-full  md:w-auto">
        <div className=" hidden md:flex border rounded-3xl p-2  items-center space-x-2">
          {" "}
          {/* 2 COm */}
          <span className="text-sm pl-2 ">Anywhere</span>
          <span>|</span>
          <span className="text-sm ">Anywhere where </span>
          <span>|</span>
          <span className="text-sm   text-gray-400 ">Add guest </span>
          <span className="bg-brand text-white p-2  rounded-full">
            <Search className="height = {17} width = {17}" />
          </span>
        </div>
      </div>
      <MobileNav />

      <div className="hidden md:flex items-center space-x-4 ">
        <span>Add Your Home </span>
        <NavMenu />
      </div>

      <div>{/* 3 COm */}</div>
    </div>
  );
}
