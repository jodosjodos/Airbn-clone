"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Logo = () => {
  const router = useRouter();
  return (
    <div>
      <Image
        alt="logo"
        height="100"
        width="100"
        className="hidden md:block cursor pointer"
        src="/images/logo.png"
      />
    </div>
  );
};

export default Logo;
