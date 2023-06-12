"use client"
import { User } from "@prisma/client";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import React from "react";
import { safeUser } from "@/app/types";

interface NavbarProps {
  currentUser?:safeUser| null
}


export const Navbar: React.FC<NavbarProps>=({currentUser})=>{
  console.log(currentUser);
  
    return (
        <div className="fiexed w-full bg-white z-19 shadow-sm">
            <div className="py-4 border-b-[1px]">
          <Container>
            <div className="flex flex-row items-center justify-between gap-3 md:gap-0"><Logo/>
            <Search/>
            <UserMenu currentUser={currentUser}/>
            </div>
          </Container>
            </div> 
        </div>
    ) 
}