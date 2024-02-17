import NavBar from "@/components/NavBar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <NavBar />
      <div className="root-container">
        <div className="wrapper"> {children}</div>
      </div>
    </main>
  );
}

export default Layout;
