import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }: { product: any }) {
  return (
    <Link 
      href={`/product/${product.id}`} 
      className="group block"
    >
      <div className="card overflow-hidden transition-all duration-700 hover:scale-[1.03] hover:shadow-2xl hover:shadow-[#D4AF37]/30">
        {/* Image container with overlay effect */}
        <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-black to-[#1A1A1A] rounded-t-2xl">
          {product.images?.[0] ? (
            <>
              <Image 
                src={product.images[0]} 
                alt={product.name} 
                fill 
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-80" 
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </>
          ) : (
            <div className="w-full h-full grid place-items-center text-white/20 text-sm">No image</div>
          )}
          
          {/* Featured badge */}
          {product.featured && (
            <div className="absolute top-4 right-4 z-10">
              <div className="border-2 border-[#D4AF37] bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg shadow-[#D4AF37]/30">
                <span className="text-[#D4AF37] text-xs tracking-widest uppercase font-semibold">Featured</span>
              </div>
            </div>
          )}
          
          {/* Stock indicator */}
          <div className="absolute bottom-4 left-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            {product.inStock ? (
              <div className="flex items-center gap-2 bg-black/80 backdrop-blur-sm border-2 border-green-500/40 px-4 py-2 rounded-lg shadow-lg">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-green-400 text-xs font-semibold tracking-wide uppercase">In Stock</span>
              </div>
            ) : (
              <div className="bg-black/80 backdrop-blur-sm border-2 border-red-500/40 px-4 py-2 rounded-lg shadow-lg">
                <span className="text-red-400 text-xs font-semibold tracking-wide uppercase">Sold Out</span>
              </div>
            )}
          </div>
          
          {/* Quick view overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-10">
            <div className="border-2 border-[#D4AF37] px-8 py-4 bg-black/90 backdrop-blur-md rounded-xl shadow-2xl shadow-[#D4AF37]/50 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-[#D4AF37] text-sm tracking-widest uppercase font-bold">View Details</span>
            </div>
          </div>
        </div>
        
        {/* Product info */}
        <div className="p-6 sm:p-7 space-y-4 bg-gradient-to-br from-[#0A0A0A] to-black rounded-b-2xl">
          {/* Brand */}
          <div className="flex items-center justify-between">
            <span className="text-[#D4AF37] text-xs tracking-[0.2em] uppercase font-semibold">
              {product.brand}
            </span>
            <div className="w-8 h-px bg-gradient-to-r from-[#D4AF37] to-transparent"></div>
          </div>
          
          {/* Product name */}
          <h3 className="font-serif text-base sm:text-lg text-white line-clamp-2 min-h-[3rem] group-hover:text-[#D4AF37] transition-colors duration-300">
            {product.name}
          </h3>
          
          {/* Price */}
          <div className="flex items-center justify-between pt-2 border-t border-[#D4AF37]/20">
            <div>
              <p className="text-2xl font-bold text-[#D4AF37] tracking-wide">
                KSh {product.price.toLocaleString()}
              </p>
              <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">Premium Quality</p>
            </div>
            
            {/* Add to cart icon */}
            <div className="w-12 h-12 border-2 border-[#D4AF37]/30 rounded-xl flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300 group-hover:scale-110">
              <svg className="w-5 h-5 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
