"use client";

import Image from "next/image";
import React from "react";
import { UserButton, SignedOut, SignedIn } from "@clerk/nextjs";
import Link from "next/link";
import { navLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function MobileNavBar() {
  const pathname = usePathname();

  return (
    <div className="navbar">
      <div className="flex-1 px-2 lg:flex-none">
        <Link href="/">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>

      <nav>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <SignedOut>
              <a className="btn btn-ghost rounded-btn">
                <Link href="/sign-in">Login</Link>
              </a>
            </SignedOut>

            <SignedIn>
              <div className="mt-2 mx-2">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>

            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost rounded-btn"
              >
                Menu
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 mt-4"
              >
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
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
