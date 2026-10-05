"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export const Services = () => {
  const { t, lang } = useTranslation();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="services">
      <div className="text-center mb-16">
        <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {t.servicesSection.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
          {t.servicesSection.title}
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-light">
          {t.servicesSection.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {t.servicesSection.list.map((service) => (
          <div
            key={service.id}
            className="group relative bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 flex flex-col justify-between hover:-translate-y-2"
          >
            <div>
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                {service.icon}
              </div>

              <span className="inline-block text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full mb-3">
                {service.tag}
              </span>

              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm mt-3 font-light leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between">
              <span className="text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors cursor-pointer">
                {t.servicesSection.learnMore}
              </span>
              <span
                className={`text-orange-500 transform transition-transform ${lang === "ar" ? "group-hover:-translate-x-1 rotate-180" : "group-hover:translate-x-1"}`}
              >
                &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
