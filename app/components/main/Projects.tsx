"use client";

import React from "react";
import { useTranslation } from "@/context/LanguageContext";

export const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto" id="projects">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          {t.projectsSection.title}
        </h2>
        <p className="text-gray-500 mt-2">{t.projectsSection.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.projectsSection.list.map((project) => (
          <div
            key={project.id}
            className="group relative h-96 rounded-3xl overflow-hidden shadow-lg border border-orange-100 flex flex-col justify-end p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.image})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />

            <div className="relative z-10 flex flex-col gap-2">
              <span className="self-start bg-orange-500/80 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-medium">
                {project.category}
              </span>
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <p className="text-gray-300 text-sm font-light line-clamp-2">
                {project.description}
              </p>
              <button className="mt-3 bg-white text-gray-900 py-2.5 rounded-xl font-medium hover:bg-orange-500 hover:text-white transition-colors">
                {t.projectsSection.demoBtn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
