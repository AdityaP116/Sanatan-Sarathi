<div align="center">
  <img src="public/home-full.png" alt="Sanatan Sarathi" width="800" style="border-radius: 12px; margin-bottom: 24px;" />

  <h1>Sanatan Sarathi</h1>
  <p><strong>Your Guide to Hindu Wisdom</strong></p>
  <p>
    A modern spiritual companion designed to make the wisdom of Sanatana Dharma more accessible through a thoughtful and beautifully crafted digital experience.
  </p>
  <p>
    <a href="#dedicated-to-my-father">Created as a tribute for Father's Day.</a>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind%20CSS-v4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer%20Motion-black?style=flat-square&logo=framer" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" alt="License" />
  </p>
</div>

---

## The Inspiration

Sanatan Sarathi was born out of a desire to bridge the gap between ancient tradition and modern technology. Our parents and elders often hold a deep respect for Sanatana Dharma, yet navigating the vast ocean of knowledge—from deities and festivals to symbols and mantras—can be fragmented across various books, articles, and websites.

I built this project as a deeply personal Father's Day gift. I wanted to create a space that respects the sanctity of these teachings while presenting them in a beautiful, accessible, and dignified format. It is a tribute not just to the divine, but to the fathers who pass down these values to the next generation.

## The Problem

Learning about Hindu deities, their stories, and their associated rituals requires piecing together information from scattered sources. For many, especially elders who are less familiar with navigating complex digital platforms, this can be overwhelming. There was a clear need for a unified, serene, and respectful platform that organizes this spiritual knowledge into an intuitive experience.

## The Solution

Sanatan Sarathi acts as a unified digital companion. It distills complex spiritual information into an elegant, distraction-free environment. 

Whether you are looking up the sacred mantra of Lord Shiva, understanding the symbolism of Lord Vishnu's Sudarshana Chakra, or simply looking for daily wisdom, the application provides instantaneous, locally-sourced answers without requiring internet bandwidth for heavy data loads. With built-in features like a global search, alias recognition (e.g., searching "Mahadev" finds "Shiva"), and a personalized favorites system, it serves as a reliable pocket guide to Hindu spirituality.

---

## Features

- ✨ **Lightning-Fast Search:** Instantly query Hindu deities by their primary names or common aliases (e.g., *Mahadev*, *Bholenath*, *Kanha*).
- 📖 **Comprehensive Deity Profiles:** Detailed pages containing lore, appearance, symbols, Vahanas (vehicles), and associated festivals.
- 🕉️ **Sacred Mantras:** Beautifully formatted mantras with a one-click copy function for daily chanting.
- 💡 **Daily Wisdom:** A dynamically rotating section providing profound quotes and life lessons drawn from Hindu philosophy.
- ❤️ **Personalized Favorites:** Users can bookmark their most revered deities. The data is securely saved in `localStorage`, maintaining privacy.
- 👑 **Father's Favorite:** A prominently featured section specifically dedicated to the deity most cherished by my father.
- 📱 **Mobile-First & Responsive:** A fluid layout that looks stunning on everything from ultra-wide monitors to older smartphones.
- ♿ **Accessibility-First:** Engineered with semantic HTML, keyboard navigation, and high-contrast readable typography.

---

## Visuals

> *Note: Placeholders below represent the high-fidelity UI of the application.*

### Homepage
![Homepage Experience](/placeholder-homepage.png)
*A serene, distraction-free entry point featuring a soft, ambient glow and gentle parallax geometry.*

### Search & Discovery
![Search Experience](/placeholder-search.png)
*Real-time predictive search recognizing hundreds of traditional aliases and avatars.*

### Deity Details
![Deity Profile](/placeholder-details.png)
*A deeply detailed, beautifully typeset profile page highlighting symbols, festivals, and mantras.*

### Mobile Experience
![Mobile View](/placeholder-mobile.png)
*A touch-friendly, responsive interface ensuring perfect legibility on the go.*

---

## Design Philosophy

The aesthetic of Sanatan Sarathi is rooted in **Modern Spiritual Minimalism**. 

- **Typography:** We use *Inter* for crisp, legible body text and *Poppins* for elegant, welcoming headings.
- **Color Palette:** A soothing balance of deep, meditative dark tones (backgrounds) paired with subtle warm gold accents, evoking the feeling of a lit diya (lamp).
- **Motion:** Powered by Framer Motion, the application uses soft fades, gentle upward reveals, and continuous slow-rotating sacred geometry (like lotuses and chakras). All animations strictly respect the user's OS-level Reduced Motion preferences.
- **UX:** Touch targets are oversized (minimum 44px) to ensure elders can navigate effortlessly without accidental taps.

---

## Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 16 (App Router)** | Framework for React, handling routing, layouts, and SEO |
| **TypeScript** | End-to-end type safety and developer experience |
| **Tailwind CSS v4** | Utility-first styling with a custom design token system |
| **shadcn/ui** | Accessible, unstyled component primitives |
| **Framer Motion** | Fluid, physics-based animations and transitions |
| **Lucide React** | Clean, consistent, and customizable iconography |
| **LocalStorage** | Privacy-first state persistence for user favorites |

---

## Architecture Overview

Sanatan Sarathi is built with a highly decoupled, maintainable architecture:

```text
Sanatan-Sarathi/
├── app/                  # Next.js App Router (pages, layouts, SEO metadata)
├── components/           # Reusable UI system
│   ├── ui/               # shadcn primitive components (buttons, cards, inputs)
│   └── ...               # Domain-specific components (DeityCard, Hero, InstantSearch)
├── hooks/                # Custom React hooks (use-favourites, use-mobile)
├── lib/                  # Utilities and local data sources (deities.ts)
└── public/               # Static assets, Open Graph images, and icons
```

The data layer is currently powered by statically exported TypeScript objects (`lib/deities.ts`). This guarantees zero-latency loads, offline-capable expansion potential, and removes the need for a database, ensuring the app remains perfectly free and infinitely scalable.

---

## Installation

To run this project locally, ensure you have Node.js (v18.17+) installed.

```bash
# 1. Clone the repository
git clone https://github.com/AdityaP116/Sanatan-Sarathi.git

# 2. Navigate into the directory
cd Sanatan-Sarathi

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

To create a production-ready build:

```bash
# Compile the application for production
npm run build

# Start the optimized production server
npm run start
```

---

## Accessibility & Performance

**Accessibility (a11y):**
- Strict adherence to WCAG contrast guidelines.
- Fully navigable via keyboard (Tab/Shift+Tab) with visible `focus-visible` rings.
- Semantic HTML (`<nav>`, `<ul>`, `<main>`, `<article>`) for screen readers.
- Motion dynamically disables if the user prefers reduced motion on their OS.

**Performance:**
- `0` database queries.
- Statically generated routes (SSG) for all deity profiles.
- Optimized images via `next/image` preventing cumulative layout shifts (CLS).

---

## Future Roadmap

While fully functional, Sanatan Sarathi is a living project. Planned updates include:

- [ ] **Audio Playback:** High-quality, serene audio clips for proper mantra pronunciation.
- [ ] **Festival Calendar:** A dynamic calendar highlighting upcoming Hindu festivals based on the lunar cycle.
- [ ] **Sanskrit Pronunciation Guide:** Phonetic spelling and audio assistance for traditional terms.
- [ ] **Multi-language Support:** Expanding UI and data support for Hindi, Tamil, Telugu, and Gujarati.
- [ ] **Regional Deity Collections:** Expanding the database to include localized deities and regional avatars.

---

## Dedicated to My Father

This project is deeply personal. It is dedicated to my father—the first spiritual guide in my life.

Thank you for your endless guidance, the values you instilled in me, your unwavering support, and the inspiration you provide every single day. Just as the Sarathi (charioteer) guides the chariot, you have guided me through life's complexities with wisdom and patience. 

Happy Father's Day.

---

## Contributing

Contributions make the open-source community an incredible place to learn, inspire, and create. Any contributions to expand the deity database, improve translations, or fix bugs are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

> *"Built with devotion, gratitude, and modern technology."*
