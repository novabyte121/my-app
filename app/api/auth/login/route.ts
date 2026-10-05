import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();

    // القيم الافتراضية لو ملف الـ .env لسه مسمتعش
    const adminUser = process.env.ADMIN_USER || "admin";
    const adminPass = process.env.ADMIN_PASS || "secret123";

    if (username === adminUser && password === adminPass) {
      const response = NextResponse.json({ success: true }, { status: 200 });

      // تعيين الـ Cookie مباشرة في الـ Response
      response.cookies.set({
        name: "admin_token",
        value: "authenticated_admin_session",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // أسبوع
      });

      return response;
    }

    return NextResponse.json(
      { message: "اسم المستخدم أو كلمة المرور غير صحيحة" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json(
      { message: "حدث خطأ في السيرفر" },
      { status: 500 },
    );
  }
}
