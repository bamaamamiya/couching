"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-sm">
        <div className="text-center sm:text-left">
          <p className="font-semibold tracking-wide">© {new Date().getFullYear()} Lucrum Launch</p>
          <p className="text-zinc-400">All rights reserved. Built by Bama.</p>
        </div>

        <div className="flex gap-6">
					<div className="flex justify-center gap-6 text-2xl mb-2">
        <a href="https://www.instagram.com/lucrumlaunch/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-gray-400 transition" />
        </a>
        {/* <a href="https://discord.gg/HGbCwWFkEk" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faDiscord} className="hover:text-gray-400 transition" />
        </a> */}
      </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
