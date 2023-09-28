"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

//import font-awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="nav-container flex-between w-full mb-16 pt-5">
      <Link href="/" className="logo flex gap-2 flex-center">
        <Image
          src="/assets/logo-w.png"
          alt="Lantana Logo"
          width={35}
          height={35}
          className="object-contain"
        />
        <p className="logo_text">Lantana Services</p>
      </Link>
      <div className="nav-links">
        <Link href="/" className="nav-link">
          About
        </Link>
        <Link href="/services" className="nav-link">
          Services
        </Link>
        <Link href="/projects" className="nav-link">
          Projects
        </Link>
        <Link href="/contact" className="nav-link">
          Contact
        </Link>
      </div>
      <div className="dropdown-menu">
        <span className="dropdown-icon" onClick={toggleDropdown}>
        <FontAwesomeIcon
        icon={faBars}
        />
        </span>
        {isDropdownOpen && (
          <ul className="dropdown-list">
            <li>
              <Link href="/" className="dropdown-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="dropdown-link">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="dropdown-link">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="dropdown-link">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
