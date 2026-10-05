export default function DashboardOverview() {
  return (
    <div dir="rtl" className="text-right">
      <div className="mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900">
          نظرة عامة على الإحصائيات
        </h2>
        <p className="text-gray-500 text-sm mt-1">
          مرحباً بك في لوحة تحكم الموقع.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">إجمالي المشاريع</h3>
          <p className="text-3xl font-extrabold text-orange-600 mt-2">3</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">الخدمات النشطة</h3>
          <p className="text-3xl font-extrabold text-orange-600 mt-2">4</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-orange-100 shadow-sm">
          <h3 className="text-gray-500 text-sm font-medium">آراء العملاء</h3>
          <p className="text-3xl font-extrabold text-orange-600 mt-2">2</p>
        </div>
      </div>
    </div>
  );
}
