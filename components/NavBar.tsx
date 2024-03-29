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
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks.slice(0, 3).map((link, index) => {
              const isActive = link.route === pathname;

              return (
                <li
                  key={index}
                  className={`${isActive ? "text-blue-700" : "text-black"}`}
                >
                  <Link href={link.route}>{link.label}</Link>
                </li>
              );
            })}
            <SignedIn>
              <li>
                <Link href="/user">Profile</Link>
              </li>
            </SignedIn>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl" href="/">
          <Image src="/logo.png" alt="logo" width={150} height={150} />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.slice(0, 3).map((link, index) => {
            const isActive = link.route === pathname;

            return (
              <li
                key={index}
                className={`${isActive ? "text-blue-700" : "text-black"}`}
              >
                <Link href={link.route}>{link.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="navbar-end">
        <SignedIn>
          <div className="flex space-x-4">
            <div className="sm:block hidden">
              <Link href="/user" className="btn mx-2">
                Profile
              </Link>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </SignedIn>
        <SignedOut>
          <Link className="btn mx-4" href="/sign-in">
            Login
          </Link>
        </SignedOut>
      </div>
    </div>
  );
}

export default NavBar;
