"use client";

import { ShoppingCart, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative h-screen max-h-[800px] w-full overflow-hidden">
      {/* Clear Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero2.png"
          alt="Beautiful cake display"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right-aligned Content with Color Theme */}
      <div className="container relative h-full flex items-center justify-end">
        <div className="text-right p-7 space-y-6 max-w-md">
          {/* Title with rose-800 color and subtle shadow */}
          <h1 className="text-4xl md:text-5xl font-bold text-rose-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
            SHAKEYS CAKES & EVENTS
          </h1>

          {/* Subtitle with rose-700 */}
          <p className="text-xl text-rose-700 drop-shadow-[0_2px_4px_rgba(255,255,255,0.6)]">
            Sweet Moments, Lasting Memories
          </p>

          {/* Social Media Icons with rose-600 */}
          <div className="flex justify-end gap-6">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-800 text-3xl transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-800 text-3xl transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-600 hover:text-rose-800 text-3xl transition-all duration-300 hover:scale-110"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
          </div>

          {/* Buttons with rose color scheme */}
          <div className="flex justify-end gap-4 pt-4">
            <Button className="bg-rose-600 hover:bg-rose-700 text-white px-6 py-3 text-lg shadow-md">
              <ShoppingCart className="mr-2" /> Order Now
            </Button>
            <Button
              variant="outline"
              className="text-rose-700 border-rose-700 hover:bg-rose-50 px-6 py-3 text-lg shadow-sm"
            >
              <CalendarDays className="mr-2" /> Book Event
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
