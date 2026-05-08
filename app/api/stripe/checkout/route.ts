import Stripe from 'stripe';
import { NextResponse } from 'next/server';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '');
export async function POST(){
  const session = await stripe.checkout.sessions.create({ mode:'subscription', line_items:[{price:process.env.STRIPE_PRICE_ID, quantity:1}], success_url:'https://example.com/success', cancel_url:'https://example.com/cancel' });
  return NextResponse.json({ url: session.url });
}
