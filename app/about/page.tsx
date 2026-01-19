export default function AboutPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h1 className="font-serif text-5xl">About Velvet Boutique</h1>
        <p className="text-xl text-white/80">
          Your destination for premium ladies' denim
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-3xl">Our Story</h2>
        <p className="text-white/80 leading-relaxed">
          Velvet Boutique is passionate about bringing the finest denim brands to women who appreciate quality, 
          fit, and timeless style. Our carefully curated collection features exclusive pieces from 
          VVIP, 7FAMK, DOJO JEANS, and KIMES—brands renowned for their craftsmanship, 
          attention to detail, and perfect fit.
        </p>
        <p className="text-white/80 leading-relaxed">
          Every pair of jeans we offer is selected with care to ensure it meets our high standards 
          for quality and style. We believe that the right pair of jeans can transform your wardrobe 
          and boost your confidence.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="card p-8 space-y-4">
          <div className="text-4xl">✓</div>
          <h3 className="font-serif text-2xl">100% Authentic</h3>
          <p className="text-white/70 leading-relaxed">
            We source directly from authorized distributors and brands to guarantee authenticity. 
            Every product comes with proof of authenticity and manufacturer warranty.
          </p>
        </div>

        <div className="card p-8 space-y-4">
          <div className="text-4xl">♥</div>
          <h3 className="font-serif text-2xl">Perfect Fit Promise</h3>
          <p className="text-white/70 leading-relaxed">
            Not satisfied with the fit? We offer hassle-free returns and exchanges within 48 hours of delivery. 
            Our customer service team is here to help you find your perfect pair.
          </p>
        </div>

        <div className="card p-8 space-y-4">
          <div className="text-4xl">⚡</div>
          <h3 className="font-serif text-2xl">Fast & Free Shipping</h3>
          <p className="text-white/70 leading-relaxed">
            Enjoy complimentary shipping on all orders over KSh 3,000. Most orders ship within 1-2 
            business days across Kenya.
          </p>
        </div>

        <div className="card p-8 space-y-4">
          <div className="text-4xl">🌟</div>
          <h3 className="font-serif text-2xl">Expert Curation</h3>
          <p className="text-white/70 leading-relaxed">
            Our team carefully selects each style based on quality, fit, and current trends. 
            We're constantly updating our collection with the latest releases.
          </p>
        </div>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-3xl">Our Brands</h2>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg text-gold mb-2">VVIP</h4>
            <p className="text-white/70">Luxury denim with signature detailing and sophisticated silhouettes. Premium craftsmanship for the discerning woman.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gold mb-2">7FAMK</h4>
            <p className="text-white/70">Iconic fits with superior stretch technology and flattering designs. From bootcut classics to modern skinny jeans.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gold mb-2">DOJO JEANS</h4>
            <p className="text-white/70">Contemporary styles with relaxed, comfortable fits for effortless chic. Perfect for modern, laid-back elegance.</p>
          </div>
          <div>
            <h4 className="font-semibold text-lg text-gold mb-2">KIMES</h4>
            <p className="text-white/70">Western-inspired denim with authentic ranch styling and durable construction. Where heritage meets modern femininity.</p>
          </div>
        </div>
      </div>

      <div className="text-center space-y-4">
        <p className="text-white/80">Questions? We're here to help!</p>
        <a href="/contact" className="btn-primary inline-block">
          Get In Touch
        </a>
      </div>
    </section>
  );
}
