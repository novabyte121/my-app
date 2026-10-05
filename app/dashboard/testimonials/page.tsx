"use client";

import React, { useState } from "react";

export default function DashboardTestimonials() {
  // بيانات مبدئية تجريبية (مؤقتاً لحد ما نربطها بقاعدة البيانات)
  const [testimonials, setTestimonials] = useState([
    {
      id: 1,
      name: "احمد محمد",
      quote: "تعاملت مع هذه الشركه وانشات موقع الكتروني حقا ممتازين",
      role: "عميل",
    },
    {
      id: 2,
      name: "محمود علي",
      quote: "خدمة احترافية جداً والتسليم كان في الموعد المحدد.",
      role: "صاحب عمل",
    },
  ]);

  const [newName, setNewName] = useState("");
  const [newQuote, setNewQuote] = useState("");
  const [newRole, setNewRole] = useState("");

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newQuote) return;

    const newItem = {
      id: Date.now(),
      name: newName,
      quote: newQuote,
      role: newRole || "عميل",
    };

    setTestimonials([...testimonials, newItem]);
    setNewName("");
    setNewQuote("");
    setNewRole("");
  };

  const handleDelete = (id: number) => {
    setTestimonials(testimonials.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            إدارة آراء العملاء
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            إضافة أو حذف تقييمات العملاء التي تظهر في الصفحة الرئيسية.
          </p>
        </div>
      </div>

      {/* فورم إضافة تقييم جديد */}
      <form
        onSubmit={handleAddTestimonial}
        className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm mb-8 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            اسم العميل
          </label>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="مثال: أحمد محمد"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            الدور / الوظيفة
          </label>
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="مثال: عميل / مبرمج"
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="md:col-span-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            نص التقييم (الكومنت)
          </label>
          <textarea
            value={newQuote}
            onChange={(e) => setNewQuote(e.target.value)}
            placeholder="اكتب رأي العميل هنا..."
            rows={3}
            className="w-full px-4 py-2 rounded-xl border border-gray-200 focus:outline-none focus:border-orange-500"
          />
        </div>
        <div className="md:col-span-3 flex justify-end">
          <button
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-all shadow-md shadow-orange-200"
          >
            إضافة التقييم
          </button>
        </div>
      </form>

      {/* جدول عرض الكومنتات الحالية */}
      <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-orange-50/50 border-b border-orange-100 text-gray-700 text-sm">
              <th className="p-4 font-bold">العميل</th>
              <th className="p-4 font-bold">الدور</th>
              <th className="p-4 font-bold">التعليق</th>
              <th className="p-4 font-bold text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {testimonials.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50/50">
                <td className="p-4 font-medium text-gray-900">{item.name}</td>
                <td className="p-4 text-gray-500 text-sm">{item.role}</td>
                <td className="p-4 text-gray-600 text-sm max-w-md truncate">
                  {item.quote}
                </td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="text-red-600 hover:text-red-800 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-lg text-sm font-medium transition-all"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
