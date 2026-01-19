export default function ContactPage() {
  return (
    <section className="max-w-3xl mx-auto space-y-8">
      <div className="text-center space-y-2">
        <h1 className="font-serif text-4xl">Contact Us</h1>
        <p className="text-white/70">We're here to help with any questions</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="card p-8 space-y-6">
          <h2 className="font-serif text-2xl">Get In Touch</h2>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-gold text-xl">📞</span>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <a href="tel:+16154147990" className="text-white/80 hover:text-gold transition">
                  +1 (615) 414-7990
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gold text-xl">📧</span>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a href="mailto:tenatious212@gmail.com" className="text-white/80 hover:text-gold transition break-all">
                  tenatious212@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gold text-xl">📍</span>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-white/80">Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-gold text-xl">⏰</span>
              <div>
                <h3 className="font-semibold">Business Hours</h3>
                <p className="text-white/80">Monday - Friday</p>
                <p className="text-white/80">9:00 AM - 6:00 PM EAT</p>
                <p className="text-white/70 text-sm mt-1">(East Africa Time)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Form */}
        <div className="card p-8 space-y-6">
          <h2 className="font-serif text-2xl">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-1">Name</label>
              <input 
                type="text" 
                className="w-full bg-onyx border border-white/15 rounded p-3" 
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Email</label>
              <input 
                type="email" 
                className="w-full bg-onyx border border-white/15 rounded p-3" 
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Phone (Optional)</label>
              <input 
                type="tel" 
                className="w-full bg-onyx border border-white/15 rounded p-3" 
                placeholder="+254 7XX XXX XXX"
              />
            </div>
            <div>
              <label className="block text-sm text-white/70 mb-1">Message</label>
              <textarea 
                className="w-full bg-onyx border border-white/15 rounded p-3 h-32" 
                placeholder="How can we help you?"
              />
            </div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group">
            <summary className="font-semibold cursor-pointer hover:text-gold transition">
              What brands do you carry?
            </summary>
            <p className="text-white/70 mt-2 pl-4">
              We exclusively carry VVIP, 7FAMK, DOJO JEANS, and KIMES - premium ladies' denim brands known for exceptional quality and perfect fit.
            </p>
          </details>
          <details className="group">
            <summary className="font-semibold cursor-pointer hover:text-gold transition">
              Do you offer free shipping?
            </summary>
            <p className="text-white/70 mt-2 pl-4">
              Yes! Free shipping on all orders over KSh 3,000 within Kenya. Standard shipping is KSh 300 for Nairobi and KSh 500 for other regions.
            </p>
          </details>
          <details className="group">
            <summary className="font-semibold cursor-pointer hover:text-gold transition">
              What is your return policy?
            </summary>
            <p className="text-white/70 mt-2 pl-4">
              We offer easy returns and exchanges within 48 hours of delivery. Items must be unworn with tags attached. See our Terms & Conditions for full details.
            </p>
          </details>
          <details className="group">
            <summary className="font-semibold cursor-pointer hover:text-gold transition">
              What payment methods do you accept?
            </summary>
            <p className="text-white/70 mt-2 pl-4">
              We accept M-Pesa, credit/debit cards (Visa, Mastercard), and bank transfers. All payments are processed securely.
            </p>
          </details>
          <details className="group">
            <summary className="font-semibold cursor-pointer hover:text-gold transition">
              How long does delivery take?
            </summary>
            <p className="text-white/70 mt-2 pl-4">
              All orders are delivered within 1-7 business days from the date of purchase. Nairobi: 1-3 days. Major cities (Mombasa, Kisumu, Nakuru, Eldoret): 2-5 days. Remote locations: 3-7 days.
            </p>
          </details>
          <details className="group">
            <summary className="font-semibold cursor-pointer hover:text-gold transition">
              Are your products authentic?
            </summary>
            <p className="text-white/70 mt-2 pl-4">
              Yes! We source 100% authentic products directly from authorized distributors. Every item comes with proof of authenticity.
            </p>
          </details>
        </div>
      </div>

      {/* Additional Support */}
      <div className="card p-6 bg-gold/10 border-gold/30">
        <p className="text-center text-white/90">
          <strong>Need immediate assistance?</strong> Call us at +1 (615) 414-7990 during business hours or email tenatious212@gmail.com
        </p>
      </div>
    </section>
  );
}
