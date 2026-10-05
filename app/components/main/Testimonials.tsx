"use client";

import React, { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

export const Testimonials = () => {
  const { t, lang } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = t.testimonialsSection.list || [];

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  if (!testimonials.length) return null;

  const currentItem = testimonials[currentIndex];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="testimonials">
      <div className="text-center mb-16">
        <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {t.testimonialsSection.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
          {t.testimonialsSection.title}
        </h2>
        <p className="text-gray-500 mt-3 text-sm md:text-base font-light max-w-lg mx-auto">
          {t.testimonialsSection.subtitle}
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        {/* Testimonial Card */}
        <div className="bg-white/80 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-orange-100 shadow-xl shadow-orange-50/50 relative transition-all duration-300">
          <div className="w-12 h-12 bg-orange-600 text-white rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-orange-200">
            {/* Quote Icon */}
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <p className="text-gray-700 text-lg md:text-xl font-medium min-h-[90px] leading-relaxed">
            "{currentItem.quote}"
          </p>

          <div className="flex items-center gap-4 mt-8 pt-6 border-t border-orange-100">
            <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-inner">
              {currentItem.name.charAt(0)}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base">
                {currentItem.name}
              </h4>
              <p className="text-xs text-gray-400 font-medium">
                {currentItem.role}
              </p>
            </div>
          </div>
        </div>

        {/* Controls (Arrows & Dots) */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:border-orange-300 transition-all"
            aria-label="Previous Testimonial"
          >
            <span className={lang === "ar" ? "rotate-180" : ""}>&larr;</span>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-orange-600"
                    : "w-2.5 bg-orange-200"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-orange-200 flex items-center justify-center text-gray-600 hover:bg-orange-50 hover:border-orange-300 transition-all"
            aria-label="Next Testimonial"
          >
            <span className={lang === "ar" ? "rotate-180" : ""}>&rarr;</span>
          </button>
        </div>
      </div>
    </section>
  );
};
