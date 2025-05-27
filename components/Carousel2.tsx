"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "../lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const blogs = [
  {
    title: "How to Bake the Perfect Chocolate Cake",
    description:
      "A step-by-step guide to baking the most delicious chocolate cake.",
    image: "/images/blogs/blog1.png",
    date: "May 15, 2024",
  },
  {
    title: "Wedding Cake Trends in 2024",
    description: "Discover the hottest wedding cake designs this year.",
    image: "/images/blogs/blog1.png",
    date: "April 28, 2024",
  },
  {
    title: "How to Bake the Perfect Chocolate Cake",
    description:
      "A step-by-step guide to baking the most delicious chocolate cake.",
    image: "/images/blogs/blog1.png",
    date: "May 15, 2024",
  },
  {
    title: "Wedding Cake Trends in 2024",
    description: "Discover the hottest wedding cake designs this year.",
    image: "/images/blogs/blog1.png",
    date: "April 28, 2024",
  },
  {
    title: "How to Bake the Perfect Chocolate Cake",
    description:
      "A step-by-step guide to baking the most delicious chocolate cake.",
    image: "/images/blogs/blog1.png",
    date: "May 15, 2024",
  },
  {
    title: "Wedding Cake Trends in 2024",
    description: "Discover the hottest wedding cake designs this year.",
    image: "/images/blogs/blog1.png",
    date: "April 28, 2024",
  },
  // Add more blogs...
];

const BlogCarousel = () => {
  // State and refs
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [visibleItems, setVisibleItems] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Set loading state for images
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Responsive items calculation
  const updateItemsPerPage = () => {
    const width = window.innerWidth;
    if (width < 640) return 1;
    if (width < 1024) return 2;
    return 3;
  };

  useEffect(() => {
    setVisibleItems(updateItemsPerPage());
    const handleResize = () => setVisibleItems(updateItemsPerPage());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(blogs.length / visibleItems);

  // Auto-rotation with progress animation
  const startAutoSlide = () => {
    stopAutoSlide();
    setProgress(0);

    const increment = (100 / 4000) * 40; // 4 second interval

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((prev) => (prev + 1) % totalPages);
          return 0;
        }
        return prev + increment;
      });
    }, 40);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [activeIndex, visibleItems]);

  const goToSlide = (index: number) => {
    stopAutoSlide();
    setActiveIndex(index);
    startAutoSlide();
  };

  const handlePrev = () =>
    goToSlide((activeIndex - 1 + totalPages) % totalPages);
  const handleNext = () => goToSlide((activeIndex + 1) % totalPages);

  // Mobile swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
    stopAutoSlide();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].clientX;
    const diff = startX - x;
    setTranslateX(-diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (translateX > 50) {
      handleNext();
    } else if (translateX < -50) {
      handlePrev();
    }
    setTranslateX(0);
    startAutoSlide();
  };

  // Clone items for seamless looping
  const items = [...blogs, ...blogs.slice(0, visibleItems)];
  const currentItems = items.slice(activeIndex, activeIndex + visibleItems);

  return (
    <div className="w-full px-4 py-12 bg-rose-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8 px-4">
          <h2 className="text-3xl font-heading text-primary">Latest Blogs</h2>
          <Link
            href="/blog"
            className="text-primary hover:underline flex items-center"
          >
            View All <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>

        <div className="relative overflow-hidden">
          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-rose-100 transition-colors text-primary hidden md:block"
            onClick={handlePrev}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>

          {/* Blog Cards - Seamless looping */}
          <div
            ref={containerRef}
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
          >
            <div
              ref={sliderRef}
              className="flex transition-transform duration-300"
              style={{
                transform: isDragging
                  ? `translateX(${translateX}px)`
                  : "translateX(0)",
              }}
            >
              {currentItems.map((blog, i) => (
                <div
                  key={`${activeIndex}-${i}`}
                  className="px-2 w-full"
                  style={{
                    minWidth: `${100 / visibleItems}%`,
                    maxWidth: `${100 / visibleItems}%`,
                  }}
                >
                  {isLoading ? (
                    <Card className="h-full border border-rose-200 animate-pulse">
                      <div className="aspect-video bg-rose-100 rounded-t-lg" />
                      <CardContent className="p-6">
                        <div className="h-4 bg-rose-100 rounded w-3/4 mb-4" />
                        <div className="h-3 bg-rose-100 rounded w-full mb-2" />
                        <div className="h-3 bg-rose-100 rounded w-5/6" />
                      </CardContent>
                    </Card>
                  ) : (
                    <Link
                      href={`/blog/${blog.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      <Card className="h-full flex flex-col overflow-hidden border border-rose-200 hover:shadow-lg transition-all duration-300">
                        <div className="aspect-video overflow-hidden">
                          <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <CardContent className="p-6 flex-grow">
                          <span className="text-sm text-rose-600">
                            {blog.date}
                          </span>
                          <h3 className="text-xl font-semibold mt-2 mb-3 text-gray-800">
                            {blog.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {blog.description}
                          </p>
                          <span className="text-primary font-medium hover:underline inline-flex items-center">
                            Read more <ArrowRight className="ml-1 w-4 h-4" />
                          </span>
                        </CardContent>
                      </Card>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-rose-100 transition-colors text-primary hidden md:block"
            onClick={handleNext}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress-style Pagination */}
        <div className="mt-10 flex justify-center items-center gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className="relative w-16 h-1 rounded-full bg-rose-200 overflow-hidden"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={cn(
                  "absolute left-0 top-0 h-full bg-primary transition-all duration-300",
                  activeIndex === i ? "w-full" : "w-0"
                )}
                style={{
                  width: activeIndex === i ? `${progress}%` : "0%",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogCarousel;
