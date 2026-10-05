"use client";

import { useState, useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";

export const LanguageButton = () => {
  const { t, toggleLang } = useTranslation();

  return (
    <button
      onClick={toggleLang}
      className="px-4 py-2 bg-orange-50 text-orange-600 hover:bg-orange-100 rounded-full text-sm font-medium transition-all shadow-sm cursor-pointer"
    >
      {t.langSwitch}
    </button>
  );
};

export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { name: t.nav.home, idName: "hero" },
    { name: t.nav.about, idName: "about" },
    { name: t.nav.projects, idName: "projects" },
    { name: t.nav.services, idName: "services" },
    { name: t.nav.testimonials, idName: "testimonials" },
    { name: t.nav.contact, idName: "contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.idName);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [navItems]);

  return (
    <header className="flex items-center py-4 rounded-full shadow-md justify-around sticky top-4 z-50 w-[80%] mx-auto bg-white/80 backdrop-blur-md border-b border-orange-100">
      <div className="flex flex-row items-center gap-4">
        <div className="w-12 h-12 bg-orange-500 rounded-full overflow-hidden shadow-md shadow-orange-500/20 flex items-center justify-center text-white font-extrabold text-xl">
          C
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-gray-900">CompanyName</h1>
          <p className="text-sm text-gray-400 font-light">Tech Solutions</p>
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-1">
        {navItems.map((item) => {
          const isActive = activeSection === item.idName;
          return (
            <a
              key={item.idName}
              href={`#${item.idName}`}
              onClick={() => setActiveSection(item.idName)}
              className={`relative px-5 py-2.5 rounded-full text-lg transition-all duration-300 ease-in-out ${
                isActive
                  ? "bg-orange-50 text-orange-600 font-medium shadow-sm"
                  : "text-gray-600 hover:text-orange-600 hover:bg-orange-50/50"
              }`}
            >
              {item.name}

              {isActive && (
                <span className="absolute bottom-0 left-5 right-5 h-0.5 bg-orange-500 rounded-full"></span>
              )}
            </a>
          );
        })}
      </nav>

      <LanguageButton />

      <button className="hidden lg:block bg-orange-500 text-white px-6 py-2.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 font-medium cursor-pointer">
        {t.nav.order}
      </button>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 text-gray-700 hover:text-orange-600 focus:outline-none transition-transform duration-200 active:scale-95 cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-md border border-orange-100 rounded-2xl shadow-xl p-5 flex flex-col gap-3 lg:hidden transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "opacity-100 scale-y-100 translate-y-0 pointer-events-auto"
            : "opacity-0 scale-y-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.idName;
          return (
            <a
              key={item.idName}
              href={`#${item.idName}`}
              onClick={() => {
                setActiveSection(item.idName);
                setIsOpen(false);
              }}
              className={`text-center py-2.5 rounded-full text-lg transition-all ${
                isActive
                  ? "bg-orange-50 text-orange-600 font-medium shadow-sm"
                  : "text-gray-600 hover:bg-orange-50/50 hover:text-orange-600"
              }`}
            >
              {item.name}
            </a>
          );
        })}
        <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors mt-2 shadow-md shadow-orange-500/20 font-medium cursor-pointer">
          {t.nav.order}
        </button>
      </div>
    </header>
  );
};
