# GD Aayushman Portfolio

## Current State

A single-page portfolio with: Navbar, Hero, About, Portfolio, Services, Contact, Footer. 
Dark purple/blue/cyan gradient theme with glassmorphism and 3D "Hire Me" button animations.

Current sections:
- **Navbar**: Logo, nav links, 3D animated Hire Me button (opens Gmail)
- **Hero**: Animated headline, "Hire Me" + "View Portfolio" CTAs, stats (50+ projects, 2+ years)
- **About**: Floating avatar orb, skill tags, bio text, mini stats
- **Portfolio**: 3-card grid with 3 real YouTube thumbnails (uploaded images), hover overlay, "Many more" note
- **Services**: 4 service cards (Logo Design, Branding, Social Media, YouTube Thumbnails)
- **Contact**: Form (name, email, project details) submitting to backend `submitContact`, email fallback
- **Footer**: Logo, social links (Instagram, Behance, LinkedIn, YouTube), copyright

Backend API: `submitContact(name, email, projectDetails)`, `getAllSubmissions()` — untouched.
Existing thumbnails: `/assets/uploads/1000001866-1.png`, `/assets/uploads/1000001865-2.png`, `/assets/uploads/1000001864-3.png`

Design system: Dark-only, OKLCH tokens, Bricolage Grotesque (display), Outfit (body), glassmorphism CSS utilities, btn-hire-me 3D animation, gradient-text, scroll-triggered useInView animations.

## Requested Changes (Diff)

### Add

1. **Process section** — 4-step visual workflow (Discover → Research → Design → Deliver) between Services and Contact. Each step has a number, icon, title, and short description. Connected with a visual line/connector on desktop.
2. **Testimonials section** — 3 testimonial cards with quote, client name, and role/context. Displayed in a responsive grid. Between Portfolio CTA and Services. Uses glassmorphism cards with subtle star ratings.
3. **Mid-page CTA banner** — A full-width gradient banner section after Portfolio and after Services nudging visitors to Hire Me / Request a Quote. Two instances: one after Portfolio, one after Services.
4. **Hero visual element** — An animated, creative SVG/CSS composition in the hero right column (on md+ screens) showing floating design tools / abstract creative shapes to fill the visual space and make the hero feel premium.
5. **Stats bar** — A horizontal strip below the hero showing 50+ Projects, 2+ Years Experience, 4 services, 100% Creative approach. Subtle separator line, glassmorphism background.
6. **Contact section enhancements** — Add a "Budget" select field to the contact form. Add quick-contact info cards (email, available status) beside the form on desktop.

### Modify

1. **Hero layout** — Change from centered single-column to 2-column on md+ (text left, visual right). Keep all existing text and buttons. Make hero feel more editorial with better spacing.
2. **About section** — Keep all content but improve layout. Add a subtle background pattern in the section. Make bio text more personality-driven and readable.
3. **Portfolio section** — Keep the 3 existing thumbnails. Improve card design with better hover states (smooth scale + info reveal). Add a filter/category label system. Keep "Many more" note.
4. **Services section** — Improve service cards with better icon presentation. Add a "starting from" price indicator or availability tag to each card.
5. **Navbar** — Add a "Process" link to navigation. Improve active/hover states on nav links.
6. **Footer** — Add a brief tagline under the logo. Add nav links column for quick access.

### Remove

- Nothing removed; all existing functionality and content preserved.

## Implementation Plan

1. Update Navbar to include "Process" link and improve nav hover transitions.
2. Redesign Hero to 2-column layout (md+): left = headline/CTA, right = animated SVG/CSS visual element.
3. Add Stats Bar section below Hero.
4. Improve About section layout and content presentation.
5. Improve Portfolio cards — better hover animations, category badges, keep existing images.
6. Add Testimonials section (3 cards) after Portfolio.
7. Add mid-page CTA banner after Portfolio.
8. Improve Services cards with icon upgrades and availability/price hint.
9. Add mid-page CTA banner after Services.
10. Add 4-step Process section after Services CTA, before Contact.
11. Enhance Contact section — add Budget select field, add side info cards on desktop.
12. Improve Footer with tagline and nav links column.
13. Ensure smooth scroll-triggered animations on all new sections using existing useInView hook.
14. Maintain all existing data-ocid markers and add new ones for new interactive elements.
15. Keep all btn-hire-me, btn-gradient, glass-card, and gradient-text CSS utilities.
