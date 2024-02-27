import NavBar from "@/components/NavBar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="auth">
      <div>
        <NavBar />
      </div>
      <div className="flex justify-center min-h-screen bg-purple-100 pt-20">
        <div className="wrapper"> {children}</div>
      </div>
    </main>
  );
}

export default Layout;
