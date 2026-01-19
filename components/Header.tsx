'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getCart } from '@/lib/cart';
import { getCurrentUser, logoutUser } from '@/lib/user-storage';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    // Initial cart count and user
    const cart = getCart();
    setCartCount(cart.itemCount);
    setUser(getCurrentUser());

    // Listen for cart updates
    const handleStorageChange = () => {
      const cart = getCart();
      setCartCount(cart.itemCount);
      setUser(getCurrentUser());
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange as any);
    window.addEventListener('userLoggedIn', handleStorageChange as any);
    window.addEventListener('userLoggedOut', handleStorageChange as any);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange as any);
      window.removeEventListener('userLoggedIn', handleStorageChange as any);
      window.removeEventListener('userLoggedOut', handleStorageChange as any);
    };
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    window.dispatchEvent(new CustomEvent('userLoggedOut'));
    router.push('/');
  };

  return (
    <header className="border-b border-white/10 bg-black/95 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container-max flex items-center justify-between py-3 sm:py-4">
        {/* Logo */}
        <Link href="/" className="font-serif text-xl sm:text-2xl hover:text-gold transition-colors duration-200 flex-shrink-0">
          Velvet Boutique
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base text-white/90">
          <Link href="/shop" className="hover:text-gold transition">Shop</Link>
          <Link href="/about" className="hover:text-gold transition">About</Link>
          <Link href="/contact" className="hover:text-gold transition">Contact</Link>
          
          {user ? (
            <>
              <Link href="/dashboard" className="hover:text-gold transition">
                Hi, {user.firstName}
              </Link>
              <button onClick={handleLogout} className="hover:text-gold transition">
                Logout
              </button>
            </>
          ) : (
            <Link href="/login" className="hover:text-gold transition">Login</Link>
          )}
          
          <Link href="/cart" className="relative hover:text-gold transition">
            🛍️ Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-onyx text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-2xl p-2 -mr-2 hover:text-gold transition-colors active:scale-95"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden border-t border-white/10 bg-black/98 backdrop-blur-md animate-slide-in">
          <div className="container-max flex flex-col gap-1 py-2">
            <Link href="/shop" className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg active:scale-95" onClick={() => setIsMenuOpen(false)}>
              Shop
            </Link>
            <Link href="/about" className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg active:scale-95" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg active:scale-95" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            
            {user ? (
              <>
                <Link href="/dashboard" className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg active:scale-95" onClick={() => setIsMenuOpen(false)}>
                  👤 Hi, {user.firstName}
                </Link>
                <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg text-left active:scale-95">
                  🚪 Logout
                </button>
              </>
            ) : (
              <Link href="/login" className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg active:scale-95" onClick={() => setIsMenuOpen(false)}>
                🔑 Login
              </Link>
            )}
            
            <Link href="/cart" className="py-3 px-4 hover:bg-gold/10 hover:text-gold transition-all rounded-lg flex items-center gap-2 active:scale-95" onClick={() => setIsMenuOpen(false)}>
              🛍️ Cart {cartCount > 0 && <span className="bg-gold text-onyx text-xs px-2 py-1 rounded-full font-bold">{cartCount}</span>}
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
