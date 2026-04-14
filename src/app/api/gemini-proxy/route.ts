import { NextRequest, NextResponse } from "next/server";

type GeminiPart = {
  text: string;
};

type GeminiPayload = {
  model?: string;
  prompt: string;
};

export async function POST(req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing GEMINI_API_KEY on server." },
      { status: 500 }
    );
  }

  let body: GeminiPayload;
  try {
    body = (await req.json()) as GeminiPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  if (!body.prompt || !body.prompt.trim()) {
    return NextResponse.json(
      { error: "Field 'prompt' is required." },
      { status: 400 }
    );
  }

  const model = body.model || "gemini-2.5-flash";
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const upstream = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: body.prompt } as GeminiPart],
        },
      ],
    }),
  });

  const data = await upstream.json();
  if (!upstream.ok) {
    return NextResponse.json(
      { error: "Gemini request failed.", details: data },
      { status: upstream.status }
    );
  }

  return NextResponse.json(data);
}
