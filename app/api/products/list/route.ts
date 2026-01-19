import { NextResponse } from 'next/server';
import seed from '../../../../data/seed-products.json';

export async function GET() {
  // TODO: Replace with Firestore query
  return NextResponse.json(seed);
}
