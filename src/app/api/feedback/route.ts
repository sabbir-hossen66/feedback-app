import { NextResponse } from "next/server";

export type Feedback = {
  id: number;
  name: string;
  email: string;
  message: string;
};

const feedbacks: Feedback[] = [];


const jsonResponse = (data: unknown, status: number = 200) =>
  NextResponse.json(data, { status });

export async function GET() {
  return jsonResponse({ success: true, feedbacks });
}


export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;


    if (!name || !email || !message) {
      return jsonResponse({ success: false, error: "All fields are required" }, 400);
    }

    const newFeedback: Feedback = {
      id: Date.now(),
      name,
      email,
      message,
    };

    feedbacks.unshift(newFeedback);

    return jsonResponse({ success: true, feedback: newFeedback }, 201);
  } catch (error) {
    console.error(error);
    return jsonResponse(
      { success: false, error: "Invalid request body" },
      400
    );
  }
}
