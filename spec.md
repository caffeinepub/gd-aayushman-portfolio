# GD Aayushman Portfolio

## Current State
New project. No existing code.

## Requested Changes (Diff)

### Add
- Full single-page portfolio website for freelance graphic designer GD Aayushman
- Hero section: headline "Creative Graphic Designer for Brands & Businesses", short intro text, "Hire Me" and "View Portfolio" CTA buttons
- About Me section: bio describing GD Aayushman, specializations in logo design, branding, social media graphics, posters, and YouTube thumbnails
- Portfolio section: responsive grid of project thumbnails with hover preview/overlay animation
- Services section: animated cards for Logo Design, Branding, Social Media Design, YouTube Thumbnails
- Contact / Hire Me section: form with Name, Email, Project Details fields; form submissions stored in backend and mailto link to gdaayushman@gmail.com
- Footer: copyright text, social media links (Instagram, Behance, LinkedIn, YouTube)
- Smooth scroll navigation with sticky header and nav links
- High-quality animations: fade-in on scroll, hover effects, animated text reveal, smooth transitions, glassmorphism cards

### Modify
- None

### Remove
- None

## Implementation Plan
1. Backend: store contact form submissions (name, email, project details, timestamp); expose submitContact and getContacts query
2. Frontend: single-page app with sections: Nav, Hero, About, Portfolio, Services, Contact, Footer
3. Animations: use Intersection Observer for scroll-triggered fade-ins; CSS keyframes + Tailwind for hover effects
4. Portfolio grid: 6 sample project cards with placeholder thumbnails and hover overlay
5. Services cards: 4 glassmorphism cards with icon and description
6. Contact form: validates and submits to backend, with mailto fallback link
7. Nav: sticky, blur-backdrop glassmorphism, smooth scroll to section anchors
