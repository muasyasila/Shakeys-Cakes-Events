"use client";

import { useState } from "react";
import { Phone, Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo - moved to far left */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image
              src="/images/shakeys_logo.png"
              alt="Shakeys Cakes Logo"
              width={40}
              height={40}
              className="h-8 w-auto"
            />
            <span className="font-bold text-xl text-rose-800 hidden sm:inline">
              SHAKEYS CAKES & EVENTS
            </span>
          </Link>

          {/* Centered navigation links */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="/" className="text-gray-800 hover:text-rose-600">
              Home
            </Link>
            <Link href="/menu" className="text-gray-800 hover:text-rose-600">
              Menu
            </Link>
            <Link href="/gallery" className="text-gray-800 hover:text-rose-600">
              Gallery
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-rose-600">
              About
            </Link>
          </nav>

          {/* Phone CTA - stays on the right */}
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="bg-rose-600 hover:bg-rose-700 hidden sm:flex gap-2"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="h-4 w-4" />
                <span>Call to Order</span>
              </a>
            </Button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-gray-800"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white pb-4 px-4 space-y-2 border-t">
            <Link
              href="/"
              className="block py-2 text-gray-800 hover:text-rose-600"
            >
              Home
            </Link>
            <Link
              href="/menu"
              className="block py-2 text-gray-800 hover:text-rose-600"
            >
              Menu
            </Link>
            <Link
              href="/gallery"
              className="block py-2 text-gray-800 hover:text-rose-600"
            >
              Gallery
            </Link>
            <Link
              href="/about"
              className="block py-2 text-gray-800 hover:text-rose-600"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
