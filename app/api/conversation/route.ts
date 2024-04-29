import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

export async function POST(req: Request) {
  console.log("This is apiKey error", process.env.OPEN_AI_KEY);

  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
    if (!openai.apiKey) {
      return new NextResponse("API Key not configured", { status: 500 });
    }
    if (!messages) {
      return new NextResponse("Message is required", { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });
    return NextResponse.json(response.choices[0].message, { status: 200 });
  } catch (error) {
    console.log("[Conversation Error]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
