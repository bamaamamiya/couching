"use client";

import React from "react";

const BrandBar = () => {
  return (
    <header className="bg-black text-white py-4">
      <div className="flex items-center justify-center sm:justify-start max-w-6xl mx-auto px-4 gap-4">
        <img
          src="/lucrum.png"
          alt="Lucrum Launch Logo"
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
        />
        <p className="text-xl sm:text-2xl font-bold tracking-wider">
          Lucrum Launch
        </p>
      </div>
    </header>
  );
};

export default BrandBar;
