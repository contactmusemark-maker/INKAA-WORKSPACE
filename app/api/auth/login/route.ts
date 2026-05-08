import { NextResponse } from 'next/server';
import { createMockSession } from '@/lib/auth';

export async function POST(request: Request) {
  const { email } = await request.json();
  createMockSession(email);
  return NextResponse.json({ ok: true });
}
