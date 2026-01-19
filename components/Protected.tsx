import { ReactNode } from 'react';
import { getCurrentUser } from '@/lib/auth';
import Link from 'next/link';

export default async function Protected({ children }: { children: ReactNode }) {
  const user = await getCurrentUser();
  if (!user) {
    return (
      <div className="text-center space-y-4">
        <p>You must be logged in to view this page.</p>
        <Link className="btn-primary" href="/login">Login</Link>
      </div>
    );
  }
  return <>{children}</>;
}
