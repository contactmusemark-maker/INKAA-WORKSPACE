import { NextResponse } from 'next/server';
export async function POST(request: Request){const { engagement=50,budget=50,intent=50 } = await request.json(); const score=Math.round((engagement+budget+intent)/3); return NextResponse.json({ score });}
