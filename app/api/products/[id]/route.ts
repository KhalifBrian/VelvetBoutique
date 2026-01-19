import { NextResponse } from 'next/server';
import seed from '../../../../data/seed-products.json';

export async function GET(_: Request, { params }: { params: { id: string } }) {
  const product = seed.find(p => p.id === params.id);
  if (!product) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(product);
}
