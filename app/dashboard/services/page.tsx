"use client";

import React, { useState } from "react";

export default function ServicesPage() {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "تطوير تطبيقات الويب",
      price: "$500",
      desc: "بناء تطبيقات ويب سريعة وحديثة باستخدام Next.js و React",
    },
    {
      id: 2,
      title: "تطوير تطبيقات الموبايل",
      price: "$800",
      desc: "تطبيقات متوافقة مع الأندرويد والآيفون عبر React Native",
    },
    {
      id: 3,
      title: "أنظمة قواعد البيانات الباك اند",
      price: "$400",
      desc: "تصميم وبناء APIs قوية وآمنة باستخدام .NET Core",
    },
    {
      id: 4,
      title: "تحسين واجهات المستخدم UI/UX",
      price: "$300",
      desc: "تصميم واجهات احترافية ومريحة للعين باستخدام Tailwind CSS",
    },
  ]);

  return (
    <div dir="rtl" className="text-right">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">إدارة الخدمات</h2>
        <p className="text-gray-500 text-sm mt-1">
          الخدمات التي تقدمها لعملائك.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  {service.title}
                </h3>
                <span className="bg-orange-50 text-orange-600 border border-orange-200 px-3 py-1 rounded-full text-xs font-extrabold">
                  {service.price}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {service.desc}
              </p>
            </div>
            <div className="flex justify-end gap-2 pt-4 border-t border-gray-100">
              <button className="text-orange-600 bg-orange-50 hover:bg-orange-100 px-4 py-1.5 rounded-lg text-xs font-bold transition-all">
                تعديل الخدمة
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
