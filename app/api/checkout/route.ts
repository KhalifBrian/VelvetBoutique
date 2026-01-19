import { NextResponse } from 'next/server';
import { getStripe } from '@/lib/stripe';

export async function POST(req: Request) {
  try {
    const { items, success_url, cancel_url, currency } = await req.json();
    const stripe = getStripe();

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      success_url,
      cancel_url,
      line_items: items.map((it: any) => ({
        price_data: {
          currency,
          product_data: { name: it.name },
          unit_amount: Math.round(Number(it.price) * 100)
        },
        quantity: it.quantity || 1
      })),
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (e: any) {
    return NextResponse.json({ message: e.message || 'Checkout error' }, { status: 400 });
  }
}
