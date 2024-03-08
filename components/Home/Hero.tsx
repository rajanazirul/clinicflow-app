import React from "react";

function Hero() {

  return (
    <div
      className="hero min-h-[50vh] relative"
      style={{
        backgroundImage: "url(/hero.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content grid md:grid-cols-2 grid-cols-1">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Enhancing Your Healthcare Experience</h1>
          <p className="mb-5">
          Welcome to the future of healthcare, where ClinicFlow redefines your access to clinics and pharmacies. Join us in our commitment to making healthcare accessible, efficient, and patient-centric for everyone.
          </p>
          <button className="btn bg-primary-50">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
