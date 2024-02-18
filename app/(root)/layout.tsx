import MobileNavBar from "@/components/MobileNavBar";
import NavBar from "@/components/NavBar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <div className="hidden sm:block">
        <NavBar />
      </div>

      <div className="sm:hidden">
        <MobileNavBar />
      </div>
      <div className="root-container">
        <div className="wrapper"> {children}</div>
      </div>
    </main>
  );
}

export default Layout;
