"use client";

import React, { useState } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      message: "أرغب في الاستفسار عن تكلفة إنشاء تطبيق موبايل خاص بشركتي.",
      date: "منذ ساعتين",
    },
    {
      id: 2,
      name: "محمود علي",
      email: "mahmoud@example.com",
      message:
        "مهتم بخدمة تطوير الباك اند باستخدام .NET Core، هل يمكننا البدء قريباً؟",
      date: "أمس",
    },
  ]);

  const handleDelete = (id: number) => {
    setMessages(messages.filter((m) => m.id !== id));
  };

  return (
    <div dir="rtl" className="text-right">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">
          الرسائل والطلبات
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          الرسائل الواردة من زوار الموقع والعملاء.
        </p>
      </div>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="bg-white p-8 rounded-2xl border border-orange-100 text-center text-gray-500">
            لا توجد رسائل جديدة حالياً.
          </div>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-bold text-gray-900">{msg.name}</h3>
                  <span className="text-xs text-gray-400">({msg.email})</span>
                  <span className="text-xs bg-orange-50 text-orange-600 px-2.5 py-0.5 rounded-full border border-orange-100">
                    {msg.date}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mt-2">{msg.message}</p>
              </div>
              <div className="flex gap-2 w-full md:w-auto justify-end">
                <a
                  href={`mailto:${msg.email}`}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-xl text-xs font-bold shadow-sm transition-all text-center"
                >
                  رد بالبريد
                </a>
                <button
                  onClick={() => handleDelete(msg.id)}
                  className="bg-red-50 hover:bg-red-100 text-red-600 px-4 py-2 rounded-xl text-xs font-bold border border-red-100 transition-all"
                >
                  حذف
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
