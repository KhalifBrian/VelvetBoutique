// Cart management with localStorage persistence and event notifications

export interface CartItem {
  productId: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  size: string;
  color: string;
  quantity: number;
  image: string;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

const CART_STORAGE_KEY = 'denim-boutique-cart';

// Emit custom event when cart changes
function emitCartUpdate() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent('cartUpdated'));
  }
}

export function getCart(): Cart {
  if (typeof window === 'undefined') {
    return { items: [], total: 0, itemCount: 0 };
  }
  
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return { items: [], total: 0, itemCount: 0 };
    
    const cart = JSON.parse(stored) as Cart;
    return cart;
  } catch {
    return { items: [], total: 0, itemCount: 0 };
  }
}

export function saveCart(cart: Cart): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  emitCartUpdate();
}

export function calculateCart(items: CartItem[]): Cart {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  return { items, total, itemCount };
}

export function addToCart(product: any, size: string, color: string, quantity: number = 1): Cart {
  const cart = getCart();
  
  // Check if item already exists with same size and color
  const existingIndex = cart.items.findIndex(
    item => item.productId === product.id && item.size === size && item.color === color
  );
  
  if (existingIndex >= 0) {
    // Update quantity
    cart.items[existingIndex].quantity += quantity;
  } else {
    // Add new item
    const newItem: CartItem = {
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: product.price,
      currency: product.currency,
      size,
      color,
      quantity,
      image: product.images?.[0] || ''
    };
    cart.items.push(newItem);
  }
  
  const updatedCart = calculateCart(cart.items);
  saveCart(updatedCart);
  return updatedCart;
}

export function removeFromCart(productId: string, size: string, color: string): Cart {
  const cart = getCart();
  const filtered = cart.items.filter(
    item => !(item.productId === productId && item.size === size && item.color === color)
  );
  const updatedCart = calculateCart(filtered);
  saveCart(updatedCart);
  return updatedCart;
}

export function updateQuantity(productId: string, size: string, color: string, quantity: number): Cart {
  const cart = getCart();
  const itemIndex = cart.items.findIndex(
    item => item.productId === productId && item.size === size && item.color === color
  );
  
  if (itemIndex >= 0) {
    if (quantity <= 0) {
      return removeFromCart(productId, size, color);
    }
    cart.items[itemIndex].quantity = quantity;
  }
  
  const updatedCart = calculateCart(cart.items);
  saveCart(updatedCart);
  return updatedCart;
}

export function clearCart(): Cart {
  const emptyCart = { items: [], total: 0, itemCount: 0 };
  saveCart(emptyCart);
  return emptyCart;
}
