"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "الرئيسية (الإحصائيات)", href: "/dashboard", icon: "📊" },
    { name: "إدارة المشاريع", href: "/dashboard/projects", icon: "💼" },
    { name: "إدارة الخدمات", href: "/dashboard/services", icon: "⚙️" },
    {
      name: "آراء العملاء (الكومنتات)",
      href: "/dashboard/testimonials",
      icon: "💬",
    },
    { name: "الرسائل والطلبات", href: "/dashboard/messages", icon: "✉️" },
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gray-50 flex">
      {/* Sidebar على اليمين للشاشات الكبيرة */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-l border-orange-100 p-6 fixed right-0 top-0 bottom-0 z-50">
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md shadow-orange-200">
            N
          </div>
          <span className="font-extrabold text-xl text-gray-900">
            Admin Panel
          </span>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                  isActive
                    ? "bg-orange-600 text-white shadow-md shadow-orange-200"
                    : "text-gray-600 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="pt-4 border-t border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm text-red-600 hover:bg-red-50 transition-all"
          >
            <span>🚪</span>
            العودة للموقع
          </Link>
        </div>
      </aside>

      {/* محتوى الصفحة الرئيسي والـ Header العلوي (مع مسافة من اليمين تناسب الـ Sidebar) */}
      <div className="flex-1 md:mr-64 flex flex-col min-w-0">
        <header className="h-20 bg-white border-b border-orange-100 px-6 flex items-center justify-between sticky top-0 z-40 shadow-sm">
          <h1 className="text-xl font-bold text-gray-800">لوحة التحكم</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-gray-600 bg-orange-50 px-3 py-1.5 rounded-full border border-orange-100">
              مدير النظام 👑
            </span>
          </div>
        </header>

        <main className="flex-1 p-6 md:p-10">{children}</main>
      </div>
    </div>
  );
}
