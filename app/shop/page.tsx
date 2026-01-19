'use client';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';

export default function ShopPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1600]);

  useEffect(() => {
    async function loadProducts() {
      const seed = await import('../../data/seed-products.json');
      setProducts(seed.default as any[]);
      setFilteredProducts(seed.default as any[]);
    }
    loadProducts();
  }, []);

  useEffect(() => {
    let filtered = [...products];

    // Filter by brand
    if (selectedBrand !== 'all') {
      filtered = filtered.filter(p => p.brand === selectedBrand);
    }

    // Filter by price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1]);

    // Sort
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(filtered);
  }, [products, selectedBrand, sortBy, priceRange]);

  const brands = ['all', ...Array.from(new Set(products.map(p => p.brand)))];

  return (
    <section className="space-y-8">
      <div className="text-center space-y-2">
        <h1 className="font-serif text-4xl">Shop Premium Denim</h1>
        <p className="text-white/70">Discover our curated collection of ladies' jeans</p>
      </div>

      {/* Filters */}
      <div className="card p-6 sm:p-8 space-y-6">
        <h2 className="font-semibold text-xl sm:text-2xl flex items-center gap-3">
          <span className="text-2xl">🔍</span>
          <span>Filter Products</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Brand Filter */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white/90">Brand</label>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="w-full"
            >
              {brands.map(brand => (
                <option key={brand} value={brand}>
                  {brand === 'all' ? 'All Brands' : brand}
                </option>
              ))}
            </select>
          </div>

          {/* Sort By */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white/90">Sort By</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Name: A to Z</option>
            </select>
          </div>

          {/* Price Range */}
          <div className="space-y-3">
            <label className="block text-sm font-semibold text-white/90">
              Price Range: <span className="text-gold">KSh {priceRange[0].toLocaleString()} - KSh {priceRange[1].toLocaleString()}</span>
            </label>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min="0"
                max="1600"
                step="50"
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min="0"
                max="1600"
                step="50"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="pt-4 border-t border-white/10">
          <p className="text-sm font-medium text-white/80">
            Showing <span className="text-gold font-bold">{filteredProducts.length}</span> of <span className="font-semibold">{products.length}</span> products
          </p>
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((p: any) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 sm:py-16 space-y-4 card p-8">
          <div className="text-4xl sm:text-5xl">😔</div>
          <p className="text-base sm:text-lg text-white/70">No products match your filters</p>
          <button
            onClick={() => {
              setSelectedBrand('all');
              setPriceRange([0, 1600]);
              setSortBy('featured');
            }}
            className="btn-outline inline-flex"
          >
            Clear Filters
          </button>
        </div>
      )}
    </section>
  );
}
