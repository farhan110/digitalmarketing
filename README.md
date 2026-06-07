# 🪐 Mars Agency — Next.js Website

Futuristic professional website for **Mars Agency** — Lucknow's digital marketing experts.
Built with Next.js 14, TypeScript, Tailwind CSS, and Space Grotesk + Inter fonts.
Designed for one-click Vercel deployment.

---

## ✨ Features

- 🪐 **Animated rotating Mars planet** with orbital rings and floating metric pills
- 🎨 **Glassmorphism cards** with gradient borders and hover glow
- 🌌 **Animated gradient mesh background** + subtle grid pattern
- ✍️ **Gradient text** on all headlines (orange → pink → purple)
- 📊 **Animated stat counters** that count up on scroll
- 🔄 **Marquee scroll** with service keywords
- 💫 **Smooth animations** — float, pulse, shine, orbit motion
- 📱 **Fully responsive** mobile + desktop
- 🚀 **6 fully built pages** with rich content

## 📄 Pages

| Route             | Page                                                        |
|-------------------|-------------------------------------------------------------|
| `/`               | Homepage — Mars planet hero + stats + services + process    |
| `/about`          | About — Story + Values + Industries + IXT Minds partner     |
| `/services`       | Services — 10 services + featured UGC Video Ads             |
| `/case-studies`   | Case Studies — 5 detailed clients with growth tables        |
| `/local-seo`      | Local SEO — 16 Lucknow areas + 6 services + process         |
| `/faq`            | FAQ — 12 questions with accordion + sidebar stats           |
| `/contact`        | Contact — Form + WhatsApp button + IXT Minds                |

---

## 🚀 Quick Start (Local)

```bash
npm install
npm run dev
```

Open http://localhost:3000

## ☁️ Deploy to Vercel (3 steps)

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Mars Agency website"
git remote add origin https://github.com/YOUR_USERNAME/mars-agency.git
git push -u origin main
```

### 2. Import to Vercel
1. Go to https://vercel.com/new
2. Click "Import Git Repository"
3. Select your repo → click "Deploy"
4. Vercel auto-detects Next.js — done in 60 seconds!

### 3. (Optional) Configure Contact Form Email
Add environment variables in Vercel dashboard:
- **Resend** (recommended): `RESEND_API_KEY`
- **Gmail**: `EMAIL_USER`, `EMAIL_PASS` (App Password)

Then uncomment the relevant code block in `app/api/contact/route.ts`.

---

## 📞 Contact Info Configured

- **Phone / WhatsApp**: +91 70071 89274
- **Email**: hello@marsagency.in
- **Location**: Lucknow, Uttar Pradesh
- **WhatsApp link**: https://wa.me/917007189274

To change these, search and replace:
- `+91 70071 89274` (display)
- `917007189274` (WhatsApp URLs)
- `hello@marsagency.in`

---

## 🎨 Tech Stack

- **Next.js 14** (App Router) + TypeScript
- **Tailwind CSS** with custom Mars colors
- **Space Grotesk** + **Inter** (Google Fonts via next/font)
- **CSS animations** (no JS libs needed)

---

## 📁 Project Structure

```
mars-agency/
├── app/
│   ├── layout.tsx          Root layout + fonts + nav + footer
│   ├── globals.css         All styles + animations
│   ├── page.tsx            Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── case-studies/page.tsx
│   ├── local-seo/page.tsx
│   ├── faq/page.tsx
│   ├── contact/page.tsx
│   └── api/contact/route.ts
├── components/
│   ├── Navbar.tsx          Sticky nav + mobile menu
│   ├── Footer.tsx          Footer + WhatsApp + IXT Minds
│   ├── MarsPlanet.tsx      🪐 Rotating Mars + orbits
│   └── StatCounter.tsx     Animated number counters
├── tailwind.config.ts      Mars colors + Space Grotesk
└── package.json
```

---

## 🛠 Customisation Quick Reference

| What                    | File                          |
|-------------------------|-------------------------------|
| Phone / WhatsApp number | Search `917007189274`         |
| Hero headline           | `app/page.tsx`                |
| Services list           | `app/page.tsx`, `services/`   |
| Case studies            | `app/case-studies/page.tsx`   |
| FAQ questions           | `app/faq/page.tsx`            |
| Mars planet animation   | `components/MarsPlanet.tsx`   |
| Colors / gradient       | `app/globals.css` (CSS vars)  |
| Planet rotation speed   | `globals.css` `marsRotate 28s`|

---

🪐 **Built with care for Mars Agency, Lucknow**
Web development partner: **IXT Minds** (ixtminds.com)
