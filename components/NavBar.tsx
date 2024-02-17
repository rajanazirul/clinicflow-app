"use client";

import Image from "next/image";
import React from "react";
import { UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center
    justify-between p-3 px-5 shadow-sm border-b-[1px]"
    >
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
      </Link>

      <nav className="header-navbar">
        <SignedIn>
          <div className="flex space-x-4">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <h2
                  className={`
                hover:bg-blue-500
                px-3 cursor-pointer
                p-2 rounded-full hover:text-white ${
                  isActive ? "text-blue-700" : "text-black"
                }`}
                >
                  <Link href={link.route}>{link.label}</Link>
                </h2>
              );
            })}

            <div>
              <UserButton afterSignOutUrl="/" />
            </div>
          </div>
        </SignedIn>

        <SignedOut>
          <div className="flex space-x-4">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <h2
                  className={`
                hover:bg-blue-500
                px-3 cursor-pointer
                p-2 rounded-full hover:text-white ${
                  isActive ? "text-blue-700" : "text-black"
                }`}
                >
                  <Link href={link.route}>{link.label}</Link>
                </h2>
              );
            })}

            <button className="button bg-purple-gradient bg-cover">
              <Link href="/sign-in">Login</Link>
            </button>
          </div>
        </SignedOut>
      </nav>
    </div>
  );
}

export default NavBar;
