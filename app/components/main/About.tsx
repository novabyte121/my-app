"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export const About = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 relative">
          <div className="relative h-96 md:h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-orange-100 group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-950/70 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-orange-100 shadow-lg">
              <p className="text-gray-900 font-bold text-lg">
                {t.about.cardTeam}
              </p>
              <p className="text-gray-500 text-sm font-light mt-1">
                {t.about.cardSub}
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col gap-6">
          <div className="inline-block self-start">
            <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
              {t.about.badge}
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {t.about.title}
          </h2>

          <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
            {t.about.description}
          </p>

          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-sm">
              <h3 className="text-3xl font-extrabold text-orange-600">100+</h3>
              <p className="text-gray-500 text-sm font-medium mt-1">
                {t.about.projectsCompleted}
              </p>
            </div>
            <div className="bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-orange-100 shadow-sm">
              <h3 className="text-3xl font-extrabold text-orange-600">50+</h3>
              <p className="text-gray-500 text-sm font-medium mt-1">
                {t.about.happyClients}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
