export default function TermsPage() {
  return (
    <section className="max-w-4xl mx-auto space-y-8 prose prose-invert">
      <div className="text-center space-y-2 not-prose">
        <h1 className="font-serif text-4xl">Terms & Conditions</h1>
        <p className="text-white/70 text-sm">Last Updated: January 2026</p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">1. Agreement to Terms</h2>
        <p>
          By accessing and using Velvet Boutique's website and services, you accept and agree to be bound by these Terms and Conditions. 
          If you do not agree to these terms, please do not use our services.
        </p>
        <p>
          Velvet Boutique operates in Kenya and all transactions are governed by Kenyan law. Our registered business address and 
          contact details are provided in the Contact section of this website.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">2. Product Information & Pricing</h2>
        <h3 className="font-semibold text-lg">2.1 Product Descriptions</h3>
        <p>
          We strive to provide accurate product descriptions, images, and specifications. However, we do not warrant that product 
          descriptions or other content on our site are accurate, complete, reliable, current, or error-free. Colors may vary 
          slightly due to monitor settings and photography lighting.
        </p>
        
        <h3 className="font-semibold text-lg">2.2 Pricing</h3>
        <p>
          All prices are listed in Kenyan Shillings (KSh) and are inclusive of applicable VAT unless otherwise stated. We reserve 
          the right to change prices at any time without prior notice. Prices applicable to your order will be those displayed at 
          the time of order placement.
        </p>
        
        <h3 className="font-semibold text-lg">2.3 Product Availability</h3>
        <p>
          All products are subject to availability. We reserve the right to limit quantities or discontinue any product at any time. 
          In the event a product is unavailable after an order is placed, we will notify you and offer a full refund or alternative product.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">3. Orders & Payment</h2>
        <h3 className="font-semibold text-lg">3.1 Order Acceptance</h3>
        <p>
          Your order constitutes an offer to purchase products from Velvet Boutique. We reserve the right to accept or decline any 
          order at our sole discretion. Order confirmation emails do not constitute acceptance of your order; acceptance occurs when 
          we dispatch the products to you.
        </p>
        
        <h3 className="font-semibold text-lg">3.2 Payment Methods</h3>
        <p>
          We accept the following payment methods:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>M-Pesa (mobile money)</li>
          <li>Credit/Debit Cards (Visa, Mastercard)</li>
          <li>Bank Transfer</li>
        </ul>
        <p>
          Payment must be received in full before order dispatch. All transactions are processed securely through our payment partners.
        </p>
        
        <h3 className="font-semibold text-lg">3.3 Order Cancellation</h3>
        <p>
          You may cancel your order within 2 hours of placement by contacting us at tenatious212@gmail.com or +1 (615) 414-7990. 
          Once an order has been dispatched, cancellation is not possible, but you may return the products under our Returns Policy.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">4. Shipping & Delivery</h2>
        <h3 className="font-semibold text-lg">4.1 Shipping Within Kenya</h3>
        <p>
          We offer nationwide delivery across Kenya. All orders are delivered within 1-7 business days from the date of purchase, 
          depending on your location:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Nairobi & surrounding areas: 1-3 business days</li>
          <li>Major cities (Mombasa, Kisumu, Nakuru, Eldoret): 2-5 business days</li>
          <li>Remote locations: 3-7 business days</li>
        </ul>
        <p className="mt-2">
          Delivery timeline starts from the date your order is placed and payment is confirmed, not from dispatch date.
        </p>
        
        <h3 className="font-semibold text-lg">4.2 Shipping Costs</h3>
        <p>
          Standard shipping is FREE for orders over KSh 3,000. For orders below this amount, a flat shipping fee of KSh 300 applies 
          within Nairobi and KSh 500 for other regions.
        </p>
        
        <h3 className="font-semibold text-lg">4.3 Delivery Issues</h3>
        <p>
          You must inspect your order upon delivery. If products are damaged or incorrect, please contact us within 48 hours with 
          photos of the issue. We are not responsible for delays caused by courier services, natural disasters, or circumstances 
          beyond our control.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">5. Returns, Exchanges & Refunds</h2>
        <h3 className="font-semibold text-lg">5.1 Return Policy</h3>
        <p>
          We offer a 48-hour (2-day) return policy from the date of delivery. Products must be:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Unworn, unwashed, and in original condition</li>
          <li>With all original tags and packaging intact</li>
          <li>Free from perfume, makeup, or other odors</li>
        </ul>
        
        <h3 className="font-semibold text-lg">5.2 Non-Returnable Items</h3>
        <p>
          The following items cannot be returned:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Products marked as final sale or clearance</li>
          <li>Items damaged due to misuse or normal wear</li>
          <li>Products without original tags or packaging</li>
        </ul>
        
        <h3 className="font-semibold text-lg">5.3 Refund Process</h3>
        <p>
          Once we receive and inspect your return, we will notify you of the approval or rejection. Approved refunds will be 
          processed within 7-14 business days to your original payment method. Shipping costs are non-refundable unless the 
          return is due to our error (wrong item, defective product).
        </p>
        
        <h3 className="font-semibold text-lg">5.4 Exchanges</h3>
        <p>
          We offer free exchanges for size or color within 48 hours of delivery. Contact us immediately to arrange an exchange, 
          and we will provide instructions. Exchange shipping is free within Kenya.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">6. User Accounts</h2>
        <h3 className="font-semibold text-lg">6.1 Account Registration</h3>
        <p>
          You may create an account to access additional features. You are responsible for maintaining the confidentiality of your 
          account credentials and for all activities under your account. Notify us immediately of any unauthorized use.
        </p>
        
        <h3 className="font-semibold text-lg">6.2 Account Termination</h3>
        <p>
          We reserve the right to terminate accounts that violate these terms, engage in fraudulent activity, or abuse our services. 
          You may close your account at any time by contacting us.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">7. Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, logos, images, and software, is the property of Velvet Boutique or 
          its content suppliers and is protected by Kenyan and international copyright laws. You may not reproduce, distribute, or 
          create derivative works without our express written permission.
        </p>
        <p>
          Brand names (VVIP, 7FAMK, DOJO JEANS, KIMES) are trademarks of their respective owners. We are an authorized retailer 
          and use these marks with permission.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">8. Prohibited Activities</h2>
        <p>
          You agree not to:
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use our website for any unlawful purpose</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of the website</li>
          <li>Use automated systems (bots, scrapers) without permission</li>
          <li>Impersonate another person or entity</li>
          <li>Post false, misleading, or defamatory content</li>
          <li>Violate any applicable laws or regulations</li>
        </ul>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by Kenyan law, Velvet Boutique shall not be liable for any indirect, incidental, special, 
          consequential, or punitive damages arising from your use of our website or products, including but not limited to loss of 
          profits, data, or business opportunities.
        </p>
        <p>
          Our total liability to you for any claim arising from these terms or your use of our services shall not exceed the amount 
          you paid for the specific product or service giving rise to the claim.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">10. Warranty Disclaimer</h2>
        <p>
          Our products are sold "as is" without any warranties beyond those provided by the manufacturer. We make no representations 
          about the suitability, reliability, or accuracy of our products or website content. We do not warrant that our website will 
          be uninterrupted, secure, or error-free.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">11. Governing Law & Dispute Resolution</h2>
        <h3 className="font-semibold text-lg">11.1 Governing Law</h3>
        <p>
          These Terms and Conditions are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes 
          shall be subject to the exclusive jurisdiction of the Kenyan courts.
        </p>
        
        <h3 className="font-semibold text-lg">11.2 Dispute Resolution</h3>
        <p>
          In the event of any dispute, we encourage you to first contact us to seek an amicable resolution. If a resolution cannot 
          be reached, disputes shall be settled through arbitration in Nairobi, Kenya, in accordance with the Arbitration Act of Kenya.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">12. Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms and Conditions at any time. Changes will be posted on this page with an updated 
          "Last Updated" date. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
        </p>
      </div>

      <div className="card p-8 space-y-6">
        <h2 className="font-serif text-2xl">13. Contact Information</h2>
        <p>
          For questions about these Terms and Conditions, please contact us:
        </p>
        <ul className="list-none space-y-2">
          <li><strong>Business Name:</strong> Velvet Boutique</li>
          <li><strong>Location:</strong> Kenya</li>
          <li><strong>Email:</strong> tenatious212@gmail.com</li>
          <li><strong>Phone:</strong> +1 (615) 414-7990</li>
          <li><strong>Business Hours:</strong> Monday-Friday, 9:00 AM - 6:00 PM EAT</li>
        </ul>
      </div>

      <div className="card p-8 space-y-4 bg-gold/10 border-gold/30">
        <h2 className="font-serif text-2xl">14. Acknowledgment</h2>
        <p>
          By using Velvet Boutique's website and services, you acknowledge that you have read, understood, and agree to be bound by 
          these Terms and Conditions. If you do not agree to these terms, you must discontinue use of our services immediately.
        </p>
      </div>
    </section>
  );
}
