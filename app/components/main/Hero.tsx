"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <main className="flex flex-col mt-20 items-center gap-6 px-4" id="hero">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center tracking-tight">
        {t.hero.welcome} <span className="text-orange-500">CompanyName</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-500 font-light text-center">
        {t.hero.subtitle}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center max-w-md">
        <button className="w-full sm:w-auto bg-orange-500 text-xl px-6 py-3 cursor-pointer hover:bg-orange-600 hover:scale-[1.02] active:scale-95 transition-all rounded-xl text-white shadow-lg shadow-orange-500/25 font-medium">
          {t.hero.projectsBtn}
        </button>
        <button className="w-full sm:w-auto bg-white border-2 border-orange-500 text-orange-600 text-xl px-6 py-3 cursor-pointer hover:bg-orange-50 hover:scale-[1.02] active:scale-95 transition-all rounded-xl font-medium shadow-sm">
          {t.hero.servicesBtn}
        </button>
      </div>
      <div className="flex flex-col items-center gap-3 mt-8 p-8 bg-orange-50/50 border border-orange-100 rounded-2xl w-full max-w-xl text-center shadow-sm">
        <p className="text-gray-600 font-medium text-lg">
          {t.hero.letsContact}
        </p>
        <button className="bg-gray-900 text-white text-lg px-8 py-2.5 rounded-xl hover:bg-orange-500 transition-colors shadow-md font-medium">
          {t.hero.contactBtn}
        </button>
      </div>
    </main>
  );
};
