# 🛍️ Velvet Boutique - Luxury E-commerce Platform

A modern, elegant e-commerce platform built with Next.js, featuring a premium denim and fashion collection with integrated Stripe payments and Firebase authentication.

## ✨ Features

- **🎨 Enhanced UI/UX**: Smooth animations, rounded corners, and user-friendly design
- **🔐 Authentication**: Secure user registration and login with Firebase
- **🛒 Shopping Cart**: Full cart management with add, remove, and update quantity
- **💳 Stripe Integration**: Secure payment processing
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🔍 Product Filtering**: Filter by brand, price range, and sort options
- **⭐ Product Features**: Featured products, stock indicators, and detailed product pages
- **📧 Lengthy Email Support**: Expanded input fields for long email addresses
- **🎯 Accessibility**: Large touch targets and clear visual feedback

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Firebase account
- Stripe account

### Installation

1. Clone the repository:
```bash
git clone https://github.com/KhalifBrian/VelvetBoutique.git
cd VelvetBoutique
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Payments**: Stripe
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
velvet-boutique/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── cart/              # Shopping cart page
│   ├── checkout/          # Checkout flow
│   ├── login/             # Authentication pages
│   ├── product/           # Product detail pages
│   └── shop/              # Shop listing page
├── components/            # Reusable components
├── lib/                   # Utility functions and configurations
├── data/                  # Seed data and product information
└── public/                # Static assets
```

## 🎨 Design Features

- **Premium Gold Theme**: Elegant gold (#D4AF37) accents on black background
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **Rounded Design**: Modern rounded corners throughout the interface
- **Enhanced Forms**: Better padding, focus states, and accessibility
- **Product Cards**: Interactive cards with image overlays and stock indicators

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## 🔑 Key Pages

- **Home** (`/`): Hero section and featured products
- **Shop** (`/shop`): Full product catalog with filtering
- **Product Details** (`/product/[id]`): Detailed product information
- **Cart** (`/cart`): Shopping cart management
- **Checkout** (`/checkout`): Secure checkout with Stripe
- **Login/Register** (`/login`, `/register`): User authentication

## 🌟 Recent Improvements

- ✅ Fixed CSS compilation errors in globals.css
- ✅ Enhanced button styling with rounded corners and hover effects
- ✅ Improved form inputs with better padding and focus states
- ✅ Expanded email input fields for lengthy email addresses
- ✅ Enhanced product cards with better spacing and animations
- ✅ Improved shopping cart UX with larger buttons and better feedback
- ✅ Enhanced password strength indicator with visual feedback

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**KhalifBrian**
- GitHub: [@KhalifBrian](https://github.com/KhalifBrian)
- Email: khalifbrian@tutamail.com

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Stripe for payment processing
- Firebase for authentication and database

---

Made with ❤️ by KhalifBrian
