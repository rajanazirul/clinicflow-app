import React from "react";
import {useTranslations} from 'next-intl';

function Hero() {
  const t = useTranslations('Index');

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/hero.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content grid md:grid-cols-2 grid-cols-1">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{t('description')}</h1>
          <p className="mb-5">
            Our healthcare platform revolutionizes clinic and pharmacy operations, providing a comprehensive suite of technology solutions.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
