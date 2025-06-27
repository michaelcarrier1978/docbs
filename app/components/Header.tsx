"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/docbs-white.png'; 

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" }
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-xl font-bold">
                <Link href="/" className="flex items-center space-x-2">
                <Image
                    src={Logo}
                    alt="Logo"
                    className="max-h-40 w-auto"
                />
                </Link>
            </div>
            {/* Hamburger button: hidden on md+ */}
            <button
                className="p-2 rounded focus:outline-none md:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>
            {/* Horizontal menu: visible on md+ */}
            <ul className="hidden md:flex space-x-8">
                {navLinks.map((link) => {
                const isActive = typeof window !== "undefined" && window.location.pathname === link.href;
                return (
                    <li key={link.name}>
                    <Link
                        href={link.href}
                        className={`font-medium px-3 py-2 rounded text-lg transition-colors ${
                        isActive
                            ? "bg-black text-white"
                            : "text-white hover:bg-white/10"
                        }`}
                    >
                        {link.name}
                    </Link>
                    </li>
                );
                })}
            </ul>
            </nav>
            {/* Mobile menu: only on small screens */}
            {menuOpen && (
            <ul className="md:hidden space-y-2 bg-red-700 shadow absolute z-10 w-full left-0">
                {navLinks.map((link) => {
                const isActive = typeof window !== "undefined" && window.location.pathname === link.href;
                return (
                    <li key={link.name} className="border-b-2 border-black">
                    <a
                        href={link.href}
                        className={`block font-medium px-5 text-xl py-5 ${
                        isActive
                            ? "bg-black text-white"
                            : "text-white"
                        }`}
                        onClick={() => setMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                    </li>
                );
                })}
            </ul>
            )}
        </header>
    );
}