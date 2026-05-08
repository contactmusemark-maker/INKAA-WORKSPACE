import { openai } from '@/lib/ai';
import { NextResponse } from 'next/server';

export async function POST(req: Request){
  const { transcript } = await req.json();
  const completion = await openai.chat.completions.create({ model: 'gpt-4.1-mini', messages:[{role:'system',content:'Summarize CRM conversation with next actions.'},{role:'user',content:transcript}] });
  return NextResponse.json({ summary: completion.choices[0]?.message.content ?? '' });
}
