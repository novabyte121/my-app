"use client";

import React, { useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "منصة تجارة إلكترونية",
      category: "تطوير ويب",
      status: "نشط",
      date: "2026-01-15",
    },
    {
      id: 2,
      title: "تطبيق توصيل طلبات",
      category: "تطوير موبايل",
      status: "قيد العمل",
      date: "2026-02-20",
    },
    {
      id: 3,
      title: "نظام إدارة موارد المؤسسات",
      category: "أنظمة سحابية",
      status: "نشط",
      date: "2026-03-10",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    title: "",
    category: "",
    status: "نشط",
  });

  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProject.title || !newProject.category) return;

    setProjects([
      ...projects,
      {
        id: Date.now(),
        title: newProject.title,
        category: newProject.category,
        status: newProject.status,
        date: new Date().toISOString().split("T")[0],
      },
    ]);
    setNewProject({ title: "", category: "", status: "نشط" });
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id));
  };

  return (
    <div dir="rtl" className="text-right">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900">
            إدارة المشاريع
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            عرض وتعديل وإضافة المشاريع الخاصة بك.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-orange-600 text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-orange-200 hover:bg-orange-700 transition-all"
        >
          + إضافة مشروع جديد
        </button>
      </div>

      {/* جدول المشاريع */}
      <div className="bg-white rounded-2xl border border-orange-100 shadow-sm overflow-hidden">
        <table className="w-full text-right border-collapse">
          <thead>
            <tr className="bg-orange-50 border-b border-orange-100 text-gray-700 text-sm font-bold">
              <th className="p-4">عنوان المشروع</th>
              <th className="p-4">التصنيف</th>
              <th className="p-4">الحالة</th>
              <th className="p-4">التاريخ</th>
              <th className="p-4 text-center">الإجراءات</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {projects.map((project) => (
              <tr
                key={project.id}
                className="hover:bg-orange-50/55 transition-colors"
              >
                <td className="p-4 font-bold text-gray-900">{project.title}</td>
                <td className="p-4 text-gray-600">{project.category}</td>
                <td className="p-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      project.status === "نشط"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {project.status}
                  </span>
                </td>
                <td className="p-4 text-gray-500">{project.date}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="text-red-500 hover:text-red-700 font-medium text-xs bg-red-50 px-3 py-1.5 rounded-lg border border-red-100 transition-all"
                  >
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* نافذة الإضافة */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              إضافة مشروع جديد
            </h3>
            <form onSubmit={handleAddProject} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  عنوان المشروع
                </label>
                <input
                  type="text"
                  value={newProject.title}
                  onChange={(e) =>
                    setNewProject({ ...newProject, title: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-sm"
                  placeholder="أدخل عنوان المشروع"
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  التصنيف
                </label>
                <input
                  type="text"
                  value={newProject.category}
                  onChange={(e) =>
                    setNewProject({ ...newProject, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-sm"
                  placeholder="تطوير ويب، موبايل..."
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1">
                  الحالة
                </label>
                <select
                  value={newProject.status}
                  onChange={(e) =>
                    setNewProject({ ...newProject, status: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 text-sm bg-white"
                >
                  <option value="نشط">نشط</option>
                  <option value="قيد العمل">قيد العمل</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl font-bold text-sm transition-all"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold text-sm shadow-md transition-all"
                >
                  حفظ المشروع
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
