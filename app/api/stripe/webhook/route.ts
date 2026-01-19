import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

export async function POST(req: Request) {
  const body = await req.text();
  const sig = (await headers()).get('stripe-signature');
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', { apiVersion: '2023-10-16' });

  if (!sig || !webhookSecret) return NextResponse.json({ ok: false }, { status: 400 });

  try {
    const event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    // Handle event (e.g., checkout.session.completed)
    console.log('Webhook event:', event.type);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 400 });
  }
}
