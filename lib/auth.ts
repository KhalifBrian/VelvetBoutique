// Auth utilities for server components
// Since we're using client-side storage, this always returns null for server components
// Use the client-side getCurrentUser from user-storage.ts in client components
export async function getCurrentUser() {
  // Server components can't access localStorage
  // Client components should use getCurrentUser from user-storage.ts
  return null;
}
