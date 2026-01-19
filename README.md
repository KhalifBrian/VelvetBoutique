# Velvet Boutique - Premium Ladies' Denim (Kenya)

Premium e-commerce website for authentic ladies' denim in Kenya.

## 🌍 Location & Currency
- **Location:** Kenya
- **Currency:** Kenyan Shillings (KSh)
- **Timezone:** East Africa Time (EAT)
- **Contact:** tenatious212@gmail.com | +1 (615) 414-7990

## 👖 Brands & Products
Exclusive collection of 25 premium denim pieces from:
- **VVIP** - Luxury denim with sophisticated silhouettes (6 products)
- **7FAMK** - Iconic fits with superior stretch technology (6 products)
- **DOJO JEANS** - Contemporary relaxed styles (6 products)
- **KIMES** - Western-inspired ranch denim (7 products)

## 🚀 Features
- Advanced user registration with password strength validation
- Shopping cart with localStorage persistence
- Product filtering by brand and price range
- User dashboard with profile & address management
- Comprehensive Terms & Conditions (Kenya-specific)
- Detailed Privacy Policy (Data Protection Act compliant)
- Responsive design (mobile/tablet/desktop)
- Modern UI with animations and transitions

## 🛒 Shipping
- **Free shipping** on orders over KSh 19,500
- Nairobi & surrounding: 1-3 business days
- Major cities: 2-5 business days
- Other locations: 3-7 business days

## 💳 Payment Methods
- M-Pesa (mobile money)
- Credit/Debit Cards (Visa, Mastercard)
- Bank Transfer

## 📦 Returns & Exchanges
- 30-day return policy
- Free exchanges for size/color
- Items must be unworn with original tags

## 🛠️ Technology Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **State:** React Hooks + localStorage
- **Forms:** Zod validation
- **Auth:** Firebase (ready, works in demo mode)
- **Payments:** Stripe integration ready

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation
\`\`\`bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
\`\`\`

### Environment Variables
Create a \`.env.local\` file:
\`\`\`
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_STORE_CURRENCY=KSh
NEXT_PUBLIC_STORE_LOCALE=en-KE
NEXT_PUBLIC_STORE_COUNTRY=KE

# Firebase (optional - works in demo mode without)
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe (optional - for checkout)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
\`\`\`

## 📁 Project Structure
\`\`\`
velvet-boutique/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── cart/              # Shopping cart
│   ├── checkout/          # Checkout flow
│   ├── contact/           # Contact page
│   ├── dashboard/         # User dashboard
│   ├── login/             # Login page
│   ├── orders/            # Order history
│   ├── privacy/           # Privacy policy
│   ├── product/[id]/      # Product details
│   ├── register/          # Registration page
│   ├── shop/              # Product listing
│   ├── terms/             # Terms & conditions
│   └── ...
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── ProductCard.tsx    # Product display card
│   └── Protected.tsx      # Auth wrapper
├── data/                  # Static data
│   └── seed-products.json # Product catalog
├── lib/                   # Utilities
│   ├── auth.ts            # Authentication
│   ├── cart.ts            # Cart management
│   ├── firebase.ts        # Firebase config
│   ├── stripe.ts          # Stripe integration
│   └── validation.ts      # Form validation schemas
└── ...
\`\`\`

## 🎨 Key Pages
- **/** - Home page with featured products
- **/shop** - Full product catalog with filters
- **/product/[id]** - Individual product pages
- **/cart** - Shopping cart
- **/checkout** - Checkout process
- **/register** - User registration
- **/dashboard** - User account management
- **/terms** - Terms & Conditions (Kenya-specific)
- **/privacy** - Privacy Policy (Data Protection Act)
- **/contact** - Contact information & FAQ

## 📸 Image Notes
**Important:** Product images should feature African models to reflect the Kenyan customer base. The current placeholder images from Unsplash should be replaced with:
- Professional photos of African women modeling the denim
- Diverse representation of Kenyan beauty
- High-quality lifestyle shots in African settings
- Consider working with Kenyan photographers/models

## 🔐 Security & Compliance
- SSL/TLS encryption for all data transmission
- PCI DSS compliant payment processing
- Compliant with Kenya Data Protection Act
- Secure password hashing
- CSRF protection
- Input validation and sanitization

## 📱 Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing
This is a private commercial project. For inquiries, contact tenatious212@gmail.com.

## 📄 License
Proprietary - All rights reserved © 2026 Velvet Boutique

## 📞 Support
- **Email:** tenatious212@gmail.com
- **Phone:** +1 (615) 414-7990
- **Hours:** Monday-Friday, 9:00 AM - 6:00 PM EAT

---

Built with ❤️ in Kenya
