'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCart, updateQuantity, removeFromCart, type Cart, type CartItem } from '@/lib/cart';

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0, itemCount: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCart(getCart());
    setIsLoading(false);
  }, []);

  const handleUpdateQuantity = (item: CartItem, newQuantity: number) => {
    const updated = updateQuantity(item.productId, item.size, item.color, newQuantity);
    setCart(updated);
  };

  const handleRemove = (item: CartItem) => {
    const updated = removeFromCart(item.productId, item.size, item.color);
    setCart(updated);
  };

  if (isLoading) {
    return (
      <section className="text-center py-16">
        <p className="text-white/70">Loading cart...</p>
      </section>
    );
  }

  if (cart.items.length === 0) {
    return (
      <section className="text-center space-y-6 py-16">
        <div className="text-6xl">🛍️</div>
        <h1 className="font-serif text-3xl">Your Cart is Empty</h1>
        <p className="text-white/70">Start shopping to add items to your cart</p>
        <Link href="/shop" className="btn-primary inline-block">
          Browse Denim
        </Link>
      </section>
    );
  }

  const shipping = cart.total >= 3000 ? 0 : 300;
  const tax = cart.total * 0.08;
  const grandTotal = cart.total + shipping + tax;

  return (
    <section className="space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-4xl">Shopping Cart</h1>
        <span className="text-white/70">{cart.itemCount} {cart.itemCount === 1 ? 'item' : 'items'}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.items.map((item, index) => (
            <div key={`${item.productId}-${item.size}-${item.color}-${index}`} className="card p-5 sm:p-6 flex gap-4 sm:gap-6">
              {/* Product Image */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 relative flex-shrink-0 bg-onyx rounded-xl overflow-hidden shadow-lg">
                {item.image && (
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Product Details */}
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-white/70">{item.brand}</p>
                </div>
                <div className="flex gap-4 text-sm text-white/70">
                  <span>Size: {item.size}</span>
                  <span>Color: {item.color}</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => handleUpdateQuantity(item, item.quantity - 1)}
                    className="w-10 h-10 rounded-lg border-2 border-white/20 hover:border-gold hover:bg-gold/10 transition-all active:scale-95 font-bold"
                  >
                    −
                  </button>
                  <span className="w-10 text-center font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => handleUpdateQuantity(item, item.quantity + 1)}
                    className="w-10 h-10 rounded-lg border-2 border-white/20 hover:border-gold hover:bg-gold/10 transition-all active:scale-95 font-bold"
                  >
                    +
                  </button>
                  <button
                    onClick={() => handleRemove(item)}
                    className="ml-auto text-sm px-4 py-2 rounded-lg text-red-400 hover:text-red-300 hover:bg-red-500/10 border border-red-500/20 hover:border-red-500/40 transition-all active:scale-95"
                  >
                    Remove
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="text-right">
                <p className="font-semibold">KSh {(item.price * item.quantity).toLocaleString()}</p>
                <p className="text-sm text-white/70">KSh {item.price.toLocaleString()} each</p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          <div className="card p-6 sm:p-8 space-y-6 sticky top-4">
            <h2 className="font-serif text-2xl">Order Summary</h2>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Subtotal</span>
                <span>KSh {cart.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Shipping</span>
                <span className={shipping === 0 ? 'text-green-400' : ''}>
                  {shipping === 0 ? 'FREE' : `KSh ${shipping.toLocaleString()}`}
                </span>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-white/60">
                  Free shipping on orders over KSh 3,000
                </p>
              )}
              <div className="flex justify-between">
                <span className="text-white/70">Tax (estimated)</span>
                <span>KSh {tax.toLocaleString()}</span>
              </div>
              <div className="border-t border-white/10 pt-2 flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>KSh {grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <Link href="/checkout" className="btn-primary w-full block text-center">
              Proceed to Checkout
            </Link>

            <Link href="/shop" className="btn-outline w-full block text-center">
              Continue Shopping
            </Link>

            {/* Trust Badges */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span>🔒</span>
                <span>Secure Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <span>↩️</span>
                <span>48-Hour Returns</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Authentic Products</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
