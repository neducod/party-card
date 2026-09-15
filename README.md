This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# party-card

A little Project Overview
Party Card is an interactive digital invitation generator designed to showcase modern frontend architecture, reactive state management, and high-performance client-side image rendering. Users can customize invitation copy, background gradients, SVG pattern overlays, and typography with a real-time side-by-side preview canvas.

Key Technical Highlights

Type-Safe Component Architecture: Built with Next.js App Router and TypeScript, using explicit interfaces to maintain strict data boundaries.

Unidirectional State Flow: Built a custom React hook (useCardState) to synchronize complex style mutations and text inputs across split-screen layout views.

Client-Side Export Engine: Leveraged html-to-image and forwardRef to parse raw DOM nodes into high-dpi images without server overhead or CORS degradation.

Vector Pattern Overlays: Integrated scalable inline SVG background patterns with adjustable opacity and blend modes.








































# Party Card 🎈

An interactive digital invitation generator engineered to showcase modern frontend architecture, reactive state management, and high-performance client-side image rendering.

Party Card provides a real-time side-by-side preview canvas where users can upload custom images directly from their device, customize invitation copy, configure background gradients, adjust typography, and instantly download high-DPI exportable cards.

---

## Key Features

* **Custom Image Uploads:** Seamlessly upload and position personal images from local devices onto the canvas.
* **Real-Time Preview:** Side-by-side layout updates invitation copy, font pairings, and color palettes instantaneously.
* **Customizable Styling:** Fine-tune background gradients, SVG pattern overlays, blend modes, and text hierarchies.
* **Client-Side Export:** Download high-resolution PNG/JPEG cards straight from the browser without server processing delays.

---

## Key Technical Highlights

* **Type-Safe Component Architecture:** Built with Next.js App Router and TypeScript, utilizing strict explicit interfaces across components to maintain robust data boundaries.
* **Unidirectional State Flow:** Implemented a custom React hook (`useCardState`) to synchronize complex style mutations, image assets, and text inputs cleanly across split-screen views.
* **Client-Side Export Engine:** Leveraged `html-to-image` and `forwardRef` to parse raw DOM nodes into high-DPI images with zero server overhead or CORS degradation.
* **Vector Pattern Overlays:** Integrated scalable inline SVG background patterns with adjustable opacity and CSS blend modes for crisp rendering at any resolution.

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS / CSS Modules |
| **State Management** | Custom React Hooks (`useCardState`) |
| **DOM Canvas Export** | `html-to-image` |

---

## Getting Started

### Prerequisites

Ensure you have Node.js (v18+) and npm/yarn installed.

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/party-card.git
cd party-card

```


2. **Install dependencies:**
```bash
npm install

```


3. **Run the development server:**
```bash
npm run dev

```


4. **View in browser:**
Open [http://localhost:3000](http://localhost:3000) to start building.

---

## Project Structure

```text
party-card/
├── app/                  # Next.js App Router pages and layout
├── components/           # UI components (Canvas, Controls, Preview)
├── hooks/                # Custom hooks (useCardState)
├── types/                # TypeScript interface definitions
└── public/               # Static assets & SVG patterns

```

---