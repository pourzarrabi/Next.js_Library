import { NextRequest, NextResponse } from "next/server";
import config from "@/lib/config";

export async function POST(req: NextRequest) {
  const {
    env: {
      emailjs: { serviceId, templateId, userId },
    },
  } = config;

  try {
    const { email, subject, message } = await req.json();

    const response = await fetch(
      "https://api.emailjs.com/api/v1.0/email/send",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: userId,
          template_params: {
            email,
            subject,
            message,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`EmailJS API error: ${response.statusText}`);
    }

    console.log("Email sent successfully");
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("EmailJS error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
