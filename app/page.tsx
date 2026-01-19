import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import seed from '../data/seed-products.json';

export default function Home() {
  const featured = (seed as any[]).filter(p => p.featured).slice(0, 6);
  const brands = ['VVIP', '7FAMK', 'DOJO JEANS', 'KIMES'];
  
  return (
    <>
      {/* Hero Section with Dramatic Styling */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1A1A1A] to-black">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#2D1B2E]/30 rounded-full blur-3xl animate-float delay-200"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center space-y-8 px-4 py-20">
          {/* Main heading with dramatic effect */}
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold animate-fade-in">
            <span className="block text-white glow-gold">VELVET</span>
            <span className="block text-[#D4AF37] mt-2">BOUTIQUE</span>
          </h1>
          
          <p className="font-elegant text-xl sm:text-2xl md:text-3xl text-[#F4E4C1] max-w-3xl mx-auto animate-fade-in delay-200 leading-relaxed">
            Where Elegance Meets Authenticity
          </p>
          
          <p className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto animate-fade-in delay-300">
            Curated collection of premium ladies' denim from the world's most prestigious brands
          </p>
          
          {/* Brand badges */}
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center animate-fade-in delay-400 max-w-3xl mx-auto">
            {brands.map((brand, index) => (
              <div key={brand} className="group relative">
                <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                <div className="relative border border-[#D4AF37]/50 px-4 py-2 backdrop-blur-sm hover:border-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/10">
                  <span className="text-[#D4AF37] text-xs sm:text-sm tracking-wider uppercase font-semibold">
                    {brand}
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-8 animate-fade-in delay-500 max-w-md sm:max-w-none mx-auto">
            <Link className="btn-primary group" href="/shop">
              <span className="relative z-10">Explore Collection</span>
            </Link>
            <Link className="btn-outline" href="/register">
              <span className="relative z-10">Become A Member</span>
            </Link>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-[#D4AF37]/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury divider */}
      <div className="container-max py-8">
        <div className="divider"></div>
      </div>

      {/* Featured Products */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-max space-y-12">
          {/* Section header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto px-4">
            <div className="inline-block border border-[#D4AF37]/30 px-6 py-2 mb-4">
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">Handpicked</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Featured Styles
            </h2>
            <p className="text-lg text-white/70 font-light">
              Discover our most coveted pieces, carefully selected for the discerning woman
            </p>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featured.map((p: any, index: number) => (
              <div key={p.id} className={`animate-fade-in delay-${(index % 3 + 1) * 100}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
          
          <div className="text-center pt-8">
            <Link href="/shop" className="btn-outline inline-flex">
              View Entire Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Luxury divider */}
      <div className="container-max py-8">
        <div className="divider"></div>
      </div>

      {/* Brand Showcase */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-transparent via-[#0A0A0A] to-transparent">
        <div className="container-max space-y-12">
          <div className="text-center space-y-4 px-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              Our <span className="text-[#D4AF37]">Exclusive</span> Brands
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Partnering with the world's finest denim designers
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {brands.map((brand) => (
              <Link 
                key={brand} 
                href={`/shop?brand=${encodeURIComponent(brand)}`}
                className="card group relative p-8 sm:p-10 text-center hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="relative font-serif text-xl sm:text-2xl text-[#D4AF37] group-hover:glow-gold transition-all duration-300">
                  {brand}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury divider */}
      <div className="container-max py-8">
        <div className="divider"></div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-max space-y-12">
          <div className="text-center space-y-4 px-4">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              The <span className="text-[#D4AF37]">Velvet</span> Promise
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="card p-8 sm:p-10 space-y-4 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-6xl mb-4 animate-float">💎</div>
              <h3 className="font-serif text-2xl text-[#D4AF37]">100% Authentic</h3>
              <p className="text-white/70 leading-relaxed">
                Every piece verified and sourced directly from authorized distributors
              </p>
            </div>
            
            <div className="card p-8 sm:p-10 space-y-4 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-6xl mb-4 animate-float delay-100">⚡</div>
              <h3 className="font-serif text-2xl text-[#D4AF37]">Swift Delivery</h3>
              <p className="text-white/70 leading-relaxed">
                Free shipping on orders over KSh 3,000. Nationwide delivery in 1-7 days
              </p>
            </div>
            
            <div className="card p-8 sm:p-10 space-y-4 text-center group hover:scale-105 transition-all duration-500">
              <div className="text-6xl mb-4 animate-float delay-200">✨</div>
              <h3 className="font-serif text-2xl text-[#D4AF37]">Perfect Fit</h3>
              <p className="text-white/70 leading-relaxed">
                48-hour return policy. We ensure you find the perfect fit for your style
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 sm:py-24 bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/5 to-[#D4AF37]/10">
        <div className="container-max px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
              Join Our <span className="text-[#D4AF37]">Exclusive</span> Circle
            </h2>
            <p className="text-lg text-white/70">
              Be the first to discover new arrivals, exclusive offers, and style inspiration
            </p>
            <Link href="/register" className="btn-primary inline-flex">
              Become A VIP Member
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
