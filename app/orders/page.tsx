import Protected from '@/components/Protected';

export default function OrdersPage() {
  return (
    <Protected>
      <section className="space-y-4">
        <h1 className="font-serif text-3xl">Order History</h1>
        <p className="text-white/70">Your orders will appear here.</p>
      </section>
    </Protected>
  );
}
