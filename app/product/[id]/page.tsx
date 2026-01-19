'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { addToCart } from '@/lib/cart';
import { useRouter } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function loadProduct() {
      try {
        const seed = await import('../../../data/seed-products.json');
        const found = (seed.default as any[]).find((p: any) => p.id === params.id);
        setProduct(found);
        if (found) {
          setSelectedSize(found.sizes?.[0] || '');
          setSelectedColor(found.colors?.[0] || '');
        }
      } catch (error) {
        console.error('Failed to load product:', error);
      }
    }
    loadProduct();
  }, [params.id]);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert('Please select size and color');
      return;
    }
    
    addToCart(product, selectedSize, selectedColor, quantity);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 3000);
  };

  if (!product) {
    return (
      <section className="text-center py-16">
        <p className="text-white/70">Loading product...</p>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <Link href="/shop" className="text-gold hover:underline text-sm">
        ← Back to Shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square relative card overflow-hidden">
            {product.images?.[activeImage] && (
              <Image
                src={product.images[activeImage]}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            )}
          </div>
          
          {product.images?.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((img: string, i: number) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`aspect-square relative card overflow-hidden ${
                    activeImage === i ? 'border-gold' : 'border-white/10'
                  }`}
                >
                  <Image src={img} alt={`${product.name} ${i + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-gold text-sm font-medium mb-2">{product.brand}</p>
            <h1 className="font-serif text-4xl mb-2">{product.name}</h1>
            <p className="text-3xl font-semibold">KSh {product.price.toLocaleString()}</p>
          </div>

          {product.inStock ? (
            <p className="text-green-400 text-sm">✓ In Stock</p>
          ) : (
            <p className="text-red-400 text-sm">Out of Stock</p>
          )}

          <p className="text-white/80 leading-relaxed">{product.description}</p>

          {/* Size Selection */}
          <div className="space-y-3">
            <label className="block font-medium">Select Size</label>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map((size: string) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded transition ${
                    selectedSize === size
                      ? 'border-gold bg-gold text-onyx'
                      : 'border-white/15 hover:border-gold'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <label className="block font-medium">Select Color</label>
            <div className="flex flex-wrap gap-2">
              {product.colors?.map((color: string) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 border rounded transition ${
                    selectedColor === color
                      ? 'border-gold bg-gold text-onyx'
                      : 'border-white/15 hover:border-gold'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="space-y-3">
            <label className="block font-medium">Quantity</label>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded border border-white/15 hover:border-gold transition"
              >
                −
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded border border-white/15 hover:border-gold transition"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-3">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="btn-primary flex-1 py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {addedToCart ? '✓ Added to Cart!' : 'Add to Cart'}
            </button>
            <button
              onClick={() => router.push('/cart')}
              className="btn-outline px-6"
              title="View Cart"
            >
              🛍️
            </button>
          </div>

          {/* Product Details */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <h3 className="font-semibold">Product Details</h3>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Premium denim construction</li>
              <li>• Designed for comfort and style</li>
              <li>• Machine washable</li>
              <li>• Imported</li>
            </ul>
          </div>

          {/* Shipping & Returns */}
          <div className="border-t border-white/10 pt-6 space-y-4">
            <h3 className="font-semibold">Shipping & Returns</h3>
            <ul className="text-sm text-white/70 space-y-2">
              <li>• Free shipping on orders over KSh 3,000</li>
              <li>• 48-hour return policy from delivery</li>
              <li>• Delivered within 1-7 days from purchase</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
