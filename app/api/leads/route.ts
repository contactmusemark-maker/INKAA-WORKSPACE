import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  const leads = await prisma.lead.findMany({
    take: 50,
    orderBy: { createdAt: 'desc' },
    include: { owner: { select: { id: true, name: true, email: true } } }
  });

  return NextResponse.json({ data: leads });
}
