"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "../components/ui/card"; // Adjust if needed
import { cn } from "../lib/utils"; // Optional className utility

function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
}

// Inline blog data
const blogs = [
  {
    id: 1,
    title: "How to Bake Like a Pro",
    excerpt: "Discover secrets to professional baking.",
    image: "/images/blogs/blog1.png",
  },
  {
    id: 2,
    title: "Top 5 Cake Decorating Tips",
    excerpt: "Make your cakes Instagram-worthy!",
    image: "/images/blogs/blog1.png",
  },
  {
    id: 3,
    title: "Shakey’s Wedding Highlights",
    excerpt: "A magical outdoor ceremony and cake setup.",
    image: "/images/blogs/blog1.png",
  },
];

export default function BlogCarousel() {
  const hasMounted = useHasMounted();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % blogs.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % blogs.length);
  };

  if (!hasMounted) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Latest Blogs</h2>

      <Card className="rounded-2xl shadow-md border border-gray-100 bg-white transition-all duration-300">
        <CardContent className="p-4 md:p-6">
          <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
            <Image
              src={blogs[activeIndex].image}
              alt={blogs[activeIndex].title}
              fill
              className="object-cover"
            />
          </div>
          <h3 className="mt-4 text-xl font-semibold">
            {blogs[activeIndex].title}
          </h3>
          <p className="text-gray-600">{blogs[activeIndex].excerpt}</p>
        </CardContent>
      </Card>

      {/* Controls */}
      <div className="flex items-center justify-between mt-4 px-4">
        <button
          onClick={goPrev}
          className="text-sm text-pink-600 hover:text-pink-800 transition"
        >
          ← Previous
        </button>

        <div className="flex gap-2 items-center">
          {blogs.map((_, i) => (
            <span
              key={i}
              className={cn(
                "relative w-3 h-3 rounded-full bg-gray-300 overflow-hidden",
                i === activeIndex && "bg-pink-500"
              )}
            >
              {i === activeIndex && (
                <span className="absolute left-0 top-0 h-full bg-pink-300 animate-slide w-full"></span>
              )}
            </span>
          ))}
        </div>

        <button
          onClick={goNext}
          className="text-sm text-pink-600 hover:text-pink-800 transition"
        >
          Next →
        </button>
      </div>

      {/* Loader Animation Style */}
      <style jsx>{`
        @keyframes slide {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        .animate-slide {
          animation: slide 5s linear forwards;
        }
      `}</style>
    </div>
  );
}
