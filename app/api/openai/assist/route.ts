import OpenAI from 'openai';
import { NextResponse } from 'next/server';
import { env } from '@/lib/env';

export async function POST(request: Request) {
  const { prompt } = await request.json();
  if (!env.OPENAI_API_KEY) return NextResponse.json({ message: `Draft follow-up: ${prompt}` });
  const client = new OpenAI({ apiKey: env.OPENAI_API_KEY });
  const result = await client.responses.create({ model: 'gpt-4.1-mini', input: `Write concise CRM follow-up: ${prompt}` });
  return NextResponse.json({ message: result.output_text });
}
