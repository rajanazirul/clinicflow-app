import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import React from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="root">
      <div>
        <NavBar />
      </div>

      <div className="root-container">
        <div className="wrapper"> {children}</div>
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
}

export default Layout;
