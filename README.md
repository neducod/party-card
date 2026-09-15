# Ink and Paint 🎨🖌️

An interactive digital invitation generator engineered to showcase modern frontend architecture, reactive state management, and high-performance client-side image rendering.

Party Card provides a real-time side-by-side preview canvas where users can upload custom images directly from their device, customize invitation copy, configure background gradients, adjust typography, and instantly download high-DPI exportable cards.

---

## Key Features 𖡎

* **Custom Image Uploads:** Seamlessly upload and position personal images from local devices onto the canvas.
* **Real-Time Preview:** Side-by-side layout updates invitation copy, font pairings, and color palettes instantaneously.
* **Customizable Styling:** Fine-tune background gradients, SVG pattern overlays, blend modes, and text hierarchies.
* **Client-Side Export:** Download high-resolution PNG/JPEG cards straight from the browser without server processing delays.

---

## Key Technical Highlights 🛠️

* **Type-Safe Component Architecture:** Built with Next.js App Router and TypeScript, utilizing strict explicit interfaces across components to maintain robust data boundaries.
* **Unidirectional State Flow:** Implemented a custom React hook (`useCardState`) to synchronize complex style mutations, image assets, and text inputs cleanly across split-screen views.
* **Client-Side Export Engine:** Leveraged `html-to-image` and `forwardRef` to parse raw DOM nodes into high-DPI images with zero server overhead or CORS degradation.
* **Vector Pattern Overlays:** Integrated scalable inline SVG background patterns with adjustable opacity and CSS blend modes for crisp rendering at any resolution.

---

## Tech Stack 💻

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