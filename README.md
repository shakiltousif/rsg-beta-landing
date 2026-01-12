# RideshareGuides.com Landing Page

A Next.js 15 landing page for RideshareGuides.com - the reservation tool built by drivers, for drivers.

## 🚀 Quick Start

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 📁 Project Structure

```
app/
├── (marketing)/          # Marketing pages with header/footer
│   ├── layout.tsx       # Marketing layout
│   └── page.tsx         # Landing page
├── (auth)/              # Authentication pages
├── dashboard/           # Protected driver dashboard
├── api/                 # API routes
├── actions/             # Server Actions
├── layout.tsx           # Root layout
└── globals.css          # Global styles

components/
├── ui/                  # shadcn/ui components
├── layout/              # Header, Footer
├── sections/            # Landing page sections
└── forms/               # Form components

lib/
├── utils.ts             # Utility functions
└── supabase/            # Supabase client configuration
```

## 🎨 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Forms**: React Hook Form + Zod
- **Database**: Supabase
- **Payments**: Stripe
- **Deployment**: Vercel

## 🔧 Environment Variables

Create a `.env.local` file based on `.env.local.example`:

```env
NEXT_PUBLIC_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
STRIPE_SECRET_KEY=your_stripe_secret_key
# ... see .env.local.example for full list
```

## 📝 Key Features

- ✅ Server Components by default (optimal performance)
- ✅ SEO optimized with metadata API
- ✅ Responsive design (mobile-first)
- ✅ Type-safe with TypeScript
- ✅ Form validation with Zod
- ✅ Server Actions for data mutations

## 🎯 Landing Page Sections

1. **Hero** - Main value proposition with CTAs ✅
2. **Problem/Solution** - Uber vs RideshareGuides comparison ✅
3. **Features** - Key platform features (pending)
4. **How It Works** - 3-step process (pending)
5. **Testimonials** - Driver testimonials (pending)
6. **Pricing** - Beta vs Professional plans (pending)
7. **FAQ** - Common questions (pending)
8. **Final CTA** - Join beta call-to-action (pending)

## 📚 Documentation

- See `../TECHNICAL_PLAN.md` for comprehensive technical specifications
- See `../BUILD_PROGRESS.md` for current build status

---

Built with ❤️ by drivers, for drivers.
