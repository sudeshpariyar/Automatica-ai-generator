import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_AI_KEY,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { prompt } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!prompt) {
      return new NextResponse("Message is required", { status: 400 });
    }
    const input = {
      prompt: prompt,
      model_version: "stereo-large",
      output_format: "mp3",
      normalization_strategy: "peak",
    };

    //checks for the free trial limit
    const freeTrial = await checkApiLimit();
    if (!freeTrial) {
      return new NextResponse("Api Limit exceeded", { status: 403 });
    }

    const response = await replicate.run(
      "meta/musicgen:671ac645ce5e552cc63a54a2bbff63fcf798043055d2dac5fc9e36a837eedcfb",
      { input }
    );
    //increment the free trial
    await increaseApiLimit();
    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.log("[Music Error]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
