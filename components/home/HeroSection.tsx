"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const HERO_SLIDES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg",
  "/images/hero/hero-5.jpg",
];

const SLIDE_INTERVAL_MS = 2500;

export function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  function changeSlide(direction: 1 | -1) {
    setActiveSlide((current) => (current + direction + HERO_SLIDES.length) % HERO_SLIDES.length);
  }

  return (
    <section
      className="w-full overflow-hidden bg-navy"
      aria-roledescription="carousel"
      aria-label="AET featured programs"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative aspect-[1710/720] w-full">
        {HERO_SLIDES.map((src, index) => (
          <motion.div
            key={src}
            aria-hidden={index !== activeSlide}
            initial={false}
            animate={{ opacity: index === activeSlide ? 1 : 0 }}
            transition={{ duration: 0.65, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={src}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-top"
            />
          </motion.div>
        ))}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-navy/45 via-transparent to-transparent sm:from-navy/70"
        />

        <Container className="absolute inset-0 hidden items-end pb-16 sm:flex">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-wrap gap-3"
          >
            <Button
              size="lg"
              className="bg-orange text-white shadow-lg hover:bg-orange-light"
              nativeButton={false}
              render={<Link href="/programs" />}
            >
              Explore Programs
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/40 bg-navy/35 text-white shadow-lg backdrop-blur-sm hover:bg-white/15 hover:text-white"
              nativeButton={false}
              render={<Link href="#free-counseling" />}
            >
              <GraduationCap className="size-4" />
              Free Counseling
            </Button>
          </motion.div>
        </Container>

        <div
          className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/15 bg-navy/60 px-1.5 py-1 backdrop-blur-sm sm:bottom-4 sm:gap-2 sm:px-2 sm:py-1.5"
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          <button
            type="button"
            onClick={() => changeSlide(-1)}
            aria-label="Previous hero image"
            className="flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <ChevronLeft className="size-4" />
          </button>
          {HERO_SLIDES.map((src, index) => (
            <button
              key={src}
              type="button"
              onClick={() => setActiveSlide(index)}
              aria-label={`Show hero image ${index + 1}`}
              aria-current={index === activeSlide ? "true" : undefined}
              className={`h-2 rounded-full transition-all ${
                index === activeSlide ? "w-6 bg-orange" : "w-2 bg-white/50 hover:bg-white/80"
              }`}
            />
          ))}
          <button
            type="button"
            onClick={() => changeSlide(1)}
            aria-label="Next hero image"
            className="flex size-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/15 hover:text-white"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>

      <Container className="flex gap-2 py-3 sm:hidden">
        <Button
          className="flex-1 bg-orange text-white hover:bg-orange-light"
          nativeButton={false}
          render={<Link href="/programs" />}
        >
          Explore Programs
          <ArrowRight className="size-4" />
        </Button>
        <Button
          variant="outline"
          className="flex-1 border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white"
          nativeButton={false}
          render={<Link href="#free-counseling" />}
        >
          <GraduationCap className="size-4" />
          Counseling
        </Button>
      </Container>
    </section>
  );
}
