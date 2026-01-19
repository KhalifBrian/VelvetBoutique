import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-white/10 mt-16 bg-onyx/50">
      <div className="container-max py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Brand */}
        <div className="space-y-4">
          <h4 className="font-serif text-xl text-white">Velvet Boutique</h4>
          <p className="text-white/70 leading-relaxed">
            Kenya's premier destination for authentic ladies' denim from VVIP, 7FAMK, DOJO JEANS, and KIMES.
          </p>
        </div>

        {/* Shop */}
        <div className="space-y-4">
          <h5 className="font-semibold text-white">Shop</h5>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/shop" className="hover:text-gold transition">All Denim</Link></li>
            <li><Link href="/shop?brand=VVIP" className="hover:text-gold transition">VVIP</Link></li>
            <li><Link href="/shop?brand=7FAMK" className="hover:text-gold transition">7FAMK</Link></li>
            <li><Link href="/shop?brand=DOJO JEANS" className="hover:text-gold transition">DOJO JEANS</Link></li>
            <li><Link href="/shop?brand=KIMES" className="hover:text-gold transition">KIMES</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div className="space-y-4">
          <h5 className="font-semibold text-white">Customer Service</h5>
          <ul className="space-y-2 text-white/70">
            <li><Link href="/about" className="hover:text-gold transition">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition">Contact</Link></li>
            <li><Link href="/terms" className="hover:text-gold transition">Terms & Conditions</Link></li>
            <li><Link href="/privacy" className="hover:text-gold transition">Privacy Policy</Link></li>
            <li><Link href="/orders" className="hover:text-gold transition">Track Order</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h5 className="font-semibold text-white">Get In Touch</h5>
          <ul className="space-y-3 text-white/70">
            <li className="flex items-start gap-2">
              <span>📞</span>
              <a href="tel:+16154147990" className="hover:text-gold transition">
                +1 (615) 414-7990
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span>📧</span>
              <a href="mailto:tenatious212@gmail.com" className="hover:text-gold transition break-all">
                tenatious212@gmail.com
              </a>
            </li>
            <li className="flex items-start gap-2">
              <span>⏰</span>
              <span>Mon-Fri: 9am-6pm CST</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container-max py-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© {currentYear} Velvet Boutique. All rights reserved.</p>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">🔒 Secure Checkout</span>
            <span className="flex items-center gap-1">✓ Authentic Products</span>
            <span className="flex items-center gap-1">↩️ 48-Hour Returns</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
