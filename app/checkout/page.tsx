import Protected from '@/components/Protected';

export default function CheckoutPage() {
  return (
    <Protected>
      <section className="space-y-4">
        <h1 className="font-serif text-3xl">Checkout</h1>
        <p className="text-white/70">Address selection, order summary, and Stripe payment will be here.</p>
      </section>
    </Protected>
  );
}
