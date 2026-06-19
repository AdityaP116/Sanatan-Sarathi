<div align="center">

# 🕉️ Sanatan Sarathi

### _Your Companion on the Path of Sacred Wisdom_

**A modern spiritual companion to explore the stories, symbols, festivals, and sacred mantras of Hindu deities through a beautiful and accessible digital experience.**

🪔 _Created with love as a Father's Day tribute._ 🪔

<br/>

![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-E11D48?style=for-the-badge)

</div>

---

## 🌸 Introduction

**Sanatan Sarathi** ("the eternal charioteer") is a serene, mobile-first web application that invites you to walk among the deities of Sanatana Dharma. Each profile gathers a deity's origin story, sacred symbols, vahana (divine mount), associated festivals, and revered mantras into one calm, uncluttered space — designed to be as approachable for a curious newcomer as it is meaningful for a lifelong devotee.

It was built not as a product, but as a **gift** — a small offering of gratitude to my father, whose quiet faith first taught me the value of these stories.

---

## ✨ Inspiration

This project grew from a simple wish: to honor my father.

- 🙏 **Respect for Sanatana Dharma** — preserving timeless stories and wisdom for a new generation.
- 💝 **A meaningful gift** — something handcrafted and personal for my father on Father's Day.
- 📖 **Accessible knowledge** — making spiritual learning easy to explore, search, and enjoy.
- 🌉 **Tradition meets technology** — pairing ancient devotion with a modern, polished interface.

---

## 🎁 Features

- 🔍 **Search deities by name** — instant, alias-aware search (try _"Mahadev"_, _"Bajrangbali"_, or _"Neelkanth"_).
- 🌟 **Browse featured deities** — a curated gallery on the homepage.
- 📜 **Detailed deity profiles** — rich, beautifully laid-out pages for each deity.
- 🏛️ **Story & origin information** — the lore and meaning behind every deity.
- 🔱 **Symbols & attributes** — explore the iconography and what it represents.
- 🦚 **Vahana information** — discover each deity's divine mount.
- 🎉 **Associated festivals** — learn the celebrations tied to each deity.
- 🕉️ **Sacred mantras** — authentic mantras presented with reverence.
- 📋 **Copy mantra** — one-tap copy for personal practice.
- ❤️ **Favourite deities** — save the ones closest to your heart.
- 🌅 **Daily wisdom** — a rotating verse to inspire each day.
- 📱 **Responsive design** — graceful from mobile to desktop.
- ♿ **Accessibility-focused** — built to be usable by everyone.

---

## 🎨 Design Philosophy

The experience is intentionally **minimalist, respectful, and warm** — a modern spiritual aesthetic that feels premium yet humble. Every choice favors clarity and calm, with a **mobile-first** layout and generous touch targets so that **older users can navigate it with ease**.

**Theme Colors**

| Color | Hex | Usage |
| --- | --- | --- |
| 🌹 Dusty Rose | `#E11D48` | Primary accent & calls to action |
| 🏜️ Warm Beige | `#F5F0E8` | Soft, inviting backgrounds |
| 🤎 Dark Brown | `#1A0A00` | Grounded, readable text |

**Typography**

- **Poppins** — headings, for a friendly modern character.
- **Inter** — body text, for effortless readability.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| --- | --- |
| **Next.js 16** | App Router framework & rendering |
| **TypeScript** | Type-safe, maintainable code |
| **Tailwind CSS 4** | Utility-first styling & theming |
| **shadcn/ui** | Accessible, composable UI components |
| **Framer Motion** | Smooth animations & scroll reveals |
| **Lucide React** | Consistent, elegant icon set |
| **Local JSON Data** | Self-contained deity content |
| **LocalStorage** | Persisting favourites on-device |

---

## 📁 Project Structure

```
sanatan-sarathi/
├── app/
│   ├── deity/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic deity detail route
│   ├── search/
│   │   └── page.tsx            # Search & explore page
│   ├── globals.css             # Theme tokens & global styles
│   ├── layout.tsx              # Root layout, fonts & metadata
│   └── page.tsx                # Homepage
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   ├── hero.tsx                # Animated hero with instant search
│   ├── instant-search.tsx      # Alias-aware live search dropdown
│   ├── featured-deities.tsx    # Featured gallery
│   ├── deity-card.tsx          # 3D tilt deity card
│   ├── deity-detail.tsx        # Full deity profile
│   ├── mantra-card.tsx         # Mantra with copy-to-clipboard
│   ├── daily-wisdom.tsx        # Rotating daily verse
│   ├── dedication.tsx          # Father's Day dedication band
│   ├── fathers-favourite.tsx   # "My Father's Favourite Deity"
│   ├── favourite-deities.tsx   # Saved favourites section
│   ├── reveal.tsx              # Scroll-reveal animation wrapper
│   └── site-header.tsx         # Navigation header
├── hooks/
│   └── use-favourites.ts       # LocalStorage favourites hook
├── lib/
│   └── deities.ts              # Deity data & search utilities
└── public/
    └── deities/                # Devotional artwork
```

---

## 🚀 Getting Started

Clone the repository, then run the following commands:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev

# Create a production build
npm run build

# Run the production server
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

---

## 📸 Screenshots

| Homepage | Search Experience |
| --- | --- |
| ![Homepage](./public/screenshots/homepage.png) | ![Search](./public/screenshots/search.png) |

| Deity Details Page | Mobile View |
| --- | --- |
| ![Deity Details](./public/screenshots/deity-details.png) | ![Mobile](./public/screenshots/mobile.png) |

> _Replace the placeholders above with your own screenshots in `public/screenshots/`._

---

## 🔮 Future Enhancements

- 🎧 **Audio mantra recitation** — listen and chant along.
- 📅 **Festival calendar** — never miss an auspicious day.
- 🗣️ **Sanskrit pronunciation guide** — phonetic help for mantras.
- 👨‍👩‍👧 **Family tradition section** — record and share personal rituals.
- 🗺️ **Regional deity collections** — explore deities by region.
- 🌐 **Multilingual support** — Hindi, Sanskrit, and more.
- 🤖 **AI-powered spiritual assistant** — ask questions, get guidance.

---

## ♿ Accessibility

Built so that everyone — including elders and first-time users — can explore with comfort:

- ⌨️ **Keyboard navigation** across interactive elements.
- 🌗 **High contrast** between text and backgrounds.
- 📐 **Responsive layouts** that adapt to any screen.
- 🔤 **Readable typography** with comfortable sizing and spacing.
- 👆 **Large touch targets** for easy tapping.

---

## 💛 Dedicated to My Father

> _This project is for you, Papa._
>
> Thank you for being my first guide — the one who taught me patience, devotion, and the quiet strength of doing things with sincerity. The values you live by shaped every line of this work. Like a charioteer who steadies the path without seeking the spotlight, you have always guided gently and given generously.
>
> **Sanatan Sarathi** is my small way of saying what is hard to put into words: _thank you, I love you, and I am grateful for everything._

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

<div align="center">

**Built with devotion, gratitude, and modern technology.** 🪔

</div>
