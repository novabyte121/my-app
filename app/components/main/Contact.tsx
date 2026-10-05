"use client";

import { useState } from "react";
import { useTranslation } from "@/context/LanguageContext";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello NovaByte,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(
      `https://wa.me/your_whatsapp_number?text=${encodedText}`,
      "_blank",
    );
  };

  const handleEmailSend = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || "Project Inquiry");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`,
    );
    window.location.href = `mailto:your_email@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto" id="contact">
      <div className="text-center mb-16">
        <span className="bg-orange-100 text-orange-600 text-sm font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          {t.contact.badge}
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-4 tracking-tight">
          {t.contact.title}
        </h2>
        <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto font-light">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-5 bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-orange-100 shadow-sm flex flex-col justify-between space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t.contact.infoTitle}
            </h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              {t.contact.infoSub}
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 font-bold shadow-sm">
                📍
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase">
                  {t.contact.location}
                </p>
                <p className="text-gray-800 font-medium">
                  {t.contact.locationVal}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 font-bold shadow-sm">
                📧
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase">
                  {t.contact.emailUs}
                </p>
                <p className="text-gray-800 font-medium">
                  contact@novabyte.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 font-bold shadow-sm">
                📞
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium uppercase">
                  {t.contact.callUs}
                </p>
                <p className="text-gray-800 font-medium">+20 123 456 7890</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-white/80 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-orange-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.contact.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t.contact.namePlaceholder}
                  required
                  className="px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-gray-800"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  {t.contact.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t.contact.emailPlaceholder}
                  required
                  className="px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-gray-800"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                {t.contact.subjectLabel}
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder={t.contact.subjectPlaceholder}
                required
                className="px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-gray-800"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                {t.contact.messageLabel}
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t.contact.messagePlaceholder}
                required
                className="px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:bg-white transition-all text-gray-800 resize-none"
              ></textarea>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <button
                type="button"
                onClick={handleWhatsAppSend}
                className="w-full bg-emerald-600 text-white py-3.5 rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-600/20 font-medium text-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>💬</span> {t.contact.whatsappBtn}
              </button>

              <button
                type="button"
                onClick={handleEmailSend}
                className="w-full bg-orange-500 text-white py-3.5 rounded-xl hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/25 font-medium text-lg cursor-pointer flex items-center justify-center gap-2"
              >
                <span>📧</span> {t.contact.emailBtn}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
