import type React from "react";
import { useCallback, useRef, useState } from "react";
import { useActor } from "./hooks/useActor";
import { useInView } from "./hooks/useInView";

/* ─── Constants ─── */
const HIRE_ME_URL =
  "https://mail.google.com/mail/?view=cm&to=gdaayushman@gmail.com&su=Hire Request – GD Aayushman&body=Hi Aayushman,%0A%0APlease fill in the details below:%0A%0A1. Your Name:%0A2. Your Work / Business:%0A3. What do you want me to design / create:%0A4. How long do you need me (Full Time / Part Time):%0A5. Project deadline or timeline:%0A%0ALooking forward to working with you!";

/* ─── Navbar ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

  const navLinks = ["about", "portfolio", "services", "process", "contact"];

  return (
    <header
      data-ocid="nav.section"
      className="glass-nav fixed top-0 left-0 right-0 z-50 h-16"
    >
      <div className="max-w-6xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-display font-extrabold text-xl gradient-text tracking-tight"
          aria-label="GD Aayushman — back to top"
        >
          GD Aayushman
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((id) => (
            <button
              type="button"
              key={id}
              data-ocid="nav.link"
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground capitalize transition-colors duration-200"
            >
              {id}
            </button>
          ))}
          <a
            href={HIRE_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.link"
            className="btn-hire-me text-sm font-semibold px-5 py-2 rounded-full"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-card border-t border-border px-6 py-4 flex flex-col gap-4">
          {navLinks.map((id) => (
            <button
              type="button"
              key={id}
              data-ocid="nav.link"
              onClick={() => scrollTo(id)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground capitalize text-left transition-colors"
            >
              {id}
            </button>
          ))}
          <a
            href={HIRE_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.link"
            className="btn-hire-me text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero Section ─── */
const HEADLINE = "Creative Graphic Designer for Brands & Businesses";
const WORDS = HEADLINE.split(" ");
const WORDS_KEYED = WORDS.map((word, pos) => ({
  word,
  pos,
  key: `headline-word-${word}-${pos}`,
}));

function HeroVisual() {
  return (
    <div
      className="relative w-full h-full min-h-[360px] flex items-center justify-center"
      aria-hidden="true"
    >
      {/* Central glowing ring */}
      <div
        className="absolute w-64 h-64 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.26 285 / 0.18) 0%, transparent 70%)",
          border: "1px solid oklch(0.60 0.24 285 / 0.25)",
          boxShadow: "0 0 60px oklch(0.55 0.26 285 / 0.2)",
          animation: "floatY 5s ease-in-out infinite",
        }}
      />
      {/* SVG composition */}
      <svg
        aria-hidden="true"
        width="340"
        height="340"
        viewBox="0 0 340 340"
        fill="none"
        className="relative z-10"
        style={{ filter: "drop-shadow(0 0 30px oklch(0.55 0.26 285 / 0.3))" }}
      >
        {/* Outer orbit ring */}
        <circle
          cx="170"
          cy="170"
          r="145"
          stroke="oklch(0.55 0.26 285 / 0.15)"
          strokeWidth="1"
          strokeDasharray="8 6"
        />
        {/* Middle orbit ring */}
        <circle
          cx="170"
          cy="170"
          r="105"
          stroke="oklch(0.50 0.26 248 / 0.12)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />

        {/* Central monogram hexagon */}
        <polygon
          points="170,110 210,132 210,178 170,200 130,178 130,132"
          fill="oklch(0.12 0.015 275)"
          stroke="oklch(0.60 0.24 285 / 0.5)"
          strokeWidth="1.5"
        />
        <text
          x="170"
          y="163"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="28"
          fontWeight="900"
          fontFamily="Bricolage Grotesque, sans-serif"
          fill="url(#textGrad)"
        >
          GDA
        </text>

        {/* Floating design elements — top-left: pen tool */}
        <g
          style={{
            animation: "floatY 3.5s ease-in-out infinite",
            transformOrigin: "60px 70px",
          }}
        >
          <circle
            cx="60"
            cy="70"
            r="22"
            fill="oklch(0.55 0.26 285 / 0.12)"
            stroke="oklch(0.60 0.24 285 / 0.4)"
            strokeWidth="1"
          />
          <path
            d="M52 70 L60 58 L68 70 L64 78 L56 78 Z"
            fill="none"
            stroke="oklch(0.80 0.18 285)"
            strokeWidth="1.5"
          />
          <circle cx="60" cy="70" r="2.5" fill="oklch(0.80 0.18 285)" />
        </g>

        {/* Top-right: color palette */}
        <g
          style={{
            animation: "floatY 4.2s ease-in-out infinite 0.8s",
            transformOrigin: "278px 75px",
          }}
        >
          <circle
            cx="278"
            cy="75"
            r="24"
            fill="oklch(0.50 0.26 248 / 0.12)"
            stroke="oklch(0.55 0.25 248 / 0.4)"
            strokeWidth="1"
          />
          <circle cx="272" cy="69" r="5" fill="oklch(0.60 0.24 285 / 0.8)" />
          <circle cx="284" cy="69" r="5" fill="oklch(0.55 0.25 248 / 0.8)" />
          <circle cx="272" cy="81" r="5" fill="oklch(0.72 0.19 198 / 0.8)" />
          <circle cx="284" cy="81" r="5" fill="oklch(0.65 0.22 315 / 0.8)" />
        </g>

        {/* Bottom-left: layers icon */}
        <g
          style={{
            animation: "floatY 3.8s ease-in-out infinite 0.4s",
            transformOrigin: "68px 268px",
          }}
        >
          <circle
            cx="68"
            cy="268"
            r="22"
            fill="oklch(0.72 0.19 198 / 0.10)"
            stroke="oklch(0.72 0.19 198 / 0.4)"
            strokeWidth="1"
          />
          <path
            d="M58 261 L68 257 L78 261 L68 265 Z"
            fill="oklch(0.72 0.19 198 / 0.7)"
          />
          <path
            d="M58 268 L68 264 L78 268 L68 272 Z"
            fill="oklch(0.72 0.19 198 / 0.5)"
          />
          <path
            d="M58 275 L68 271 L78 275 L68 279 Z"
            fill="oklch(0.72 0.19 198 / 0.3)"
          />
        </g>

        {/* Bottom-right: star/sparkle */}
        <g
          style={{
            animation: "floatY 4.8s ease-in-out infinite 1.2s",
            transformOrigin: "275px 270px",
          }}
        >
          <circle
            cx="275"
            cy="270"
            r="22"
            fill="oklch(0.65 0.22 315 / 0.10)"
            stroke="oklch(0.65 0.22 315 / 0.4)"
            strokeWidth="1"
          />
          <path
            d="M275 250 L277 265 L292 263 L280 272 L285 287 L275 278 L265 287 L270 272 L258 263 L273 265 Z"
            fill="oklch(0.75 0.20 315 / 0.6)"
            stroke="none"
            transform="scale(0.65) translate(137 137)"
          />
          {/* Simpler star */}
          <path
            d="M275 258 L277 267 L286 265 L279 271 L281 280 L275 274 L269 280 L271 271 L264 265 L273 267 Z"
            fill="oklch(0.78 0.20 315 / 0.7)"
          />
        </g>

        {/* Orbit dots */}
        <circle cx="170" cy="25" r="4" fill="oklch(0.60 0.24 285 / 0.6)" />
        <circle cx="310" cy="125" r="3" fill="oklch(0.72 0.19 198 / 0.5)" />
        <circle cx="295" cy="245" r="3.5" fill="oklch(0.55 0.25 248 / 0.5)" />
        <circle cx="45" cy="190" r="3" fill="oklch(0.65 0.22 315 / 0.5)" />
        <circle cx="85" cy="30" r="2.5" fill="oklch(0.72 0.19 198 / 0.4)" />
        <circle cx="255" cy="315" r="2.5" fill="oklch(0.60 0.24 285 / 0.4)" />

        {/* Gradient defs */}
        <defs>
          <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.82 0.18 285)" />
            <stop offset="50%" stopColor="oklch(0.72 0.22 248)" />
            <stop offset="100%" stopColor="oklch(0.85 0.18 198)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating labels */}
      <div
        className="absolute top-8 left-2 text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{
          background: "oklch(0.14 0.015 275 / 0.8)",
          border: "1px solid oklch(0.55 0.26 285 / 0.3)",
          color: "oklch(0.80 0.18 285)",
          backdropFilter: "blur(8px)",
          animation: "floatY 4s ease-in-out infinite 0.3s",
        }}
      >
        ✦ Logo Design
      </div>
      <div
        className="absolute bottom-12 right-4 text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{
          background: "oklch(0.14 0.015 275 / 0.8)",
          border: "1px solid oklch(0.50 0.26 248 / 0.3)",
          color: "oklch(0.76 0.18 248)",
          backdropFilter: "blur(8px)",
          animation: "floatY 4.5s ease-in-out infinite 0.9s",
        }}
      >
        ✦ Branding
      </div>
      <div
        className="absolute top-1/2 -left-2 text-xs font-semibold px-3 py-1.5 rounded-full"
        style={{
          background: "oklch(0.14 0.015 275 / 0.8)",
          border: "1px solid oklch(0.72 0.19 198 / 0.3)",
          color: "oklch(0.80 0.18 198)",
          backdropFilter: "blur(8px)",
          animation: "floatY 3.7s ease-in-out infinite 1.5s",
        }}
      >
        ✦ Thumbnails
      </div>
    </div>
  );
}

function HeroSection() {
  const scrollToPortfolio = () =>
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      data-ocid="hero.section"
      className="hero-bg relative min-h-screen flex items-center overflow-hidden pt-16"
    >
      {/* Decorative orbs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-1/4 w-96 h-96 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.55 0.26 285 / 0.12) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.50 0.26 248 / 0.10) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-10 w-60 h-60 rounded-full"
        style={{
          background:
            "radial-gradient(circle, oklch(0.65 0.20 198 / 0.08) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[calc(100vh-4rem)]">
          {/* Text column */}
          <div className="flex flex-col justify-center py-20 md:py-0">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in self-start"
              style={{
                borderColor: "oklch(0.55 0.26 285 / 0.4)",
                background: "oklch(0.55 0.26 285 / 0.1)",
                color: "oklch(0.80 0.18 285)",
                animationDelay: "0s",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: "oklch(0.72 0.19 198)",
                  display: "inline-block",
                  boxShadow: "0 0 6px oklch(0.72 0.19 198)",
                }}
              />
              Available for freelance projects
            </div>

            {/* Animated headline */}
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-[1.02] tracking-tight mb-7">
              {WORDS_KEYED.map(({ word, key, pos }) => (
                <span
                  key={key}
                  className="inline-block mr-[0.3em] animate-fade-in-up"
                  style={{ animationDelay: `${0.1 + pos * 0.07}s` }}
                >
                  {word === "Brands" || word === "Businesses" ? (
                    <span className="gradient-text">{word}</span>
                  ) : (
                    word
                  )}
                </span>
              ))}
            </h1>

            {/* Subheadline */}
            <p
              className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-12 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.9s" }}
            >
              I help brands stand out with powerful visuals — from logos &amp;
              branding to social media graphics and YouTube thumbnails.
            </p>

            {/* CTA buttons */}
            <div
              className="flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up"
              style={{ animationDelay: "1.1s" }}
            >
              <a
                href={HIRE_ME_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="hero.primary_button"
                className="btn-hire-me font-semibold text-base px-9 py-4 rounded-full"
              >
                Hire Me
              </a>
              <button
                type="button"
                data-ocid="hero.secondary_button"
                onClick={scrollToPortfolio}
                className="btn-outline-glow font-semibold text-base px-9 py-4 rounded-full"
              >
                View Portfolio
              </button>
            </div>
          </div>

          {/* Visual column */}
          <div
            className="hidden md:flex items-center justify-center animate-fade-in"
            style={{ animationDelay: "0.5s" }}
          >
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-40"
        aria-hidden="true"
      >
        <svg
          aria-hidden="true"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}

/* ─── Stats Bar ─── */
const STATS = [
  { value: "50+", label: "Projects Done" },
  { value: "2+", label: "Years Experience" },
  { value: "4", label: "Services Offered" },
  { value: "100%", label: "Client Satisfaction" },
];

function StatsBar() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      data-ocid="stats.section"
      ref={ref}
      className={`glass-card border-y ${inView ? "animate-fade-in" : "opacity-0"}`}
      style={{
        borderColor: "oklch(0.30 0.04 285 / 0.2)",
        background: "oklch(0.10 0.015 275 / 0.8)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="relative text-center">
              {/* Divider on desktop */}
              {i > 0 && (
                <div
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px"
                  style={{ background: "oklch(0.35 0.05 285 / 0.2)" }}
                />
              )}
              <div
                className="font-display font-black text-3xl md:text-4xl gradient-text"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── About Section ─── */
const SKILLS = [
  "Logo Design",
  "Branding",
  "Social Media Graphics",
  "Posters",
  "YouTube Thumbnails",
];

function AboutSection() {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section
      id="about"
      data-ocid="about.section"
      ref={ref as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "oklch(0.09 0.012 275)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar side */}
          <div
            className={`flex flex-col items-center gap-6 ${inView ? "animate-slide-left" : "opacity-0"}`}
          >
            {/* Gradient avatar */}
            <div
              className="animate-float relative"
              style={{ width: 220, height: 220 }}
            >
              <div
                className="absolute inset-0 rounded-full animate-pulse-glow"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.26 285), oklch(0.50 0.26 248), oklch(0.65 0.20 198))",
                }}
              />
              <div
                className="absolute inset-1 rounded-full flex items-center justify-center"
                style={{ background: "oklch(0.10 0.015 275)" }}
              >
                <span
                  className="font-display font-black text-5xl"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.80 0.18 285), oklch(0.75 0.20 248), oklch(0.85 0.16 198))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  GDA
                </span>
              </div>
            </div>

            {/* Skill tags */}
            <div className="flex flex-wrap gap-2 justify-center">
              {SKILLS.map((skill, i) => (
                <span
                  key={skill}
                  className="text-xs font-semibold px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: "oklch(0.55 0.26 285 / 0.4)",
                    background: "oklch(0.55 0.26 285 / 0.08)",
                    color: "oklch(0.80 0.18 285)",
                    animationDelay: `${i * 0.08}s`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Bio side */}
          <div
            className={`${inView ? "animate-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
          >
            <p
              className="text-xs font-bold tracking-widest uppercase mb-3"
              style={{ color: "oklch(0.75 0.20 285)" }}
            >
              About Me
            </p>
            <h2 className="font-display font-black text-3xl md:text-4xl mb-6 leading-tight">
              Passionate designer,{" "}
              <span className="gradient-text">bold visuals</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-base mb-6">
              Hi, I'm GD Aayushman — a passionate freelance graphic designer
              with a love for building bold brand identities. I specialize in
              creating visuals that speak louder than words.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base mb-8">
              From crafting unique logos to designing eye-catching social media
              graphics, posters, and YouTube thumbnails, I bring creative
              visions to life with precision and style. Every project is an
              opportunity to tell a story.
            </p>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "2+", label: "Years of Experience" },
              ].map((s) => (
                <div key={s.label} className="glass-card rounded-xl p-4">
                  <div className="font-display font-black text-xl gradient-text">
                    {s.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Portfolio Section ─── */
interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  categoryColor: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Class 10th – How to Study Science?",
    category: "YouTube Thumbnail",
    img: "/assets/uploads/1000001866-1.png",
    categoryColor: "oklch(0.70 0.22 285)",
  },
  {
    id: 2,
    title: "Class 10 – Complete Civics Marathon",
    category: "YouTube Thumbnail",
    img: "/assets/uploads/1000001865-2.png",
    categoryColor: "oklch(0.68 0.22 248)",
  },
  {
    id: 3,
    title: "Class 12 Physics – Chapter 1 Explained",
    category: "YouTube Thumbnail",
    img: "/assets/uploads/1000001864-3.png",
    categoryColor: "oklch(0.70 0.20 50)",
  },
];

function PortfolioCard({
  project,
  delay,
}: {
  project: Project;
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div
      ref={ref}
      data-ocid={`portfolio.item.${project.id}`}
      className={`portfolio-card relative overflow-hidden rounded-2xl cursor-pointer group ${
        inView ? "animate-fade-in-up" : "opacity-0"
      }`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="aspect-[3/2] overflow-hidden bg-card relative">
        <img
          src={project.img}
          alt={project.title}
          className="card-img w-full h-full object-cover"
          loading="lazy"
        />

        {/* Hover overlay */}
        <div
          className="overlay absolute inset-0 flex flex-col items-center justify-center gap-4 p-6 text-center"
          style={{
            background:
              "linear-gradient(to top, oklch(0.08 0.015 275 / 0.95), oklch(0.55 0.26 285 / 0.8))",
            backdropFilter: "blur(4px)",
          }}
        >
          <p className="text-white font-display font-bold text-lg leading-tight">
            {project.title}
          </p>
          <button
            type="button"
            onClick={scrollToContact}
            className="btn-gradient text-sm font-semibold px-5 py-2 rounded-full"
          >
            View Project
          </button>
        </div>
      </div>

      {/* Card footer */}
      <div className="glass-card p-4 flex items-center justify-between border-t-0 rounded-t-none rounded-b-2xl">
        <p className="font-semibold text-sm text-foreground truncate pr-2">
          {project.title}
        </p>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full shrink-0"
          style={{
            background: `${project.categoryColor.replace(")", " / 0.15)")}`,
            color: project.categoryColor,
            border: `1px solid ${project.categoryColor.replace(")", " / 0.35)")}`,
          }}
        >
          {project.category}
        </span>
      </div>
    </div>
  );
}

function PortfolioSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [noteRef, noteInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="portfolio"
      data-ocid="portfolio.section"
      className="section-pad"
      style={{ background: "oklch(0.065 0.01 275)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.75 0.20 285)" }}
          >
            Portfolio
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl">
            My <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A selection of projects spanning branding, social media, and digital
            design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <PortfolioCard key={project.id} project={project} delay={i * 0.1} />
          ))}
        </div>

        {/* Many more note */}
        <div
          ref={noteRef}
          className={`mt-12 text-center ${noteInView ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "0.2s" }}
        >
          <div
            className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-2xl"
            style={{
              background: "oklch(0.14 0.015 275 / 0.7)",
              border: "1px solid oklch(0.55 0.26 285 / 0.25)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div className="flex items-center gap-2">
              <svg
                aria-hidden="true"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="oklch(0.72 0.19 198)"
                strokeWidth="2"
              >
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                <polygon
                  points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                  fill="oklch(0.72 0.19 198)"
                  stroke="none"
                />
              </svg>
              <span
                className="text-sm font-semibold"
                style={{ color: "oklch(0.85 0.10 285)" }}
              >
                Many more YouTube thumbnails like these available
              </span>
            </div>
            <span
              className="text-xs px-3 py-1 rounded-full font-bold"
              style={{
                background: "oklch(0.55 0.26 285 / 0.15)",
                border: "1px solid oklch(0.55 0.26 285 / 0.35)",
                color: "oklch(0.80 0.18 285)",
              }}
            >
              50+ Projects Done
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-3">
            These are just a few samples from my YouTube thumbnail work. I've
            designed thumbnails across education, gaming, tech, vlog, and more
            niches.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA Banner ─── */
interface CTABannerProps {
  headline: string;
  subtext: string;
  buttonText: string;
  ocid: string;
}

function CTABanner({ headline, subtext, buttonText, ocid }: CTABannerProps) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${inView ? "animate-fade-in" : "opacity-0"}`}
    >
      <div
        className="relative py-24 px-6"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.26 0.10 285), oklch(0.22 0.10 248), oklch(0.24 0.07 198))",
          backgroundSize: "300% 300%",
          animation: "gradientShift 6s ease infinite",
        }}
      >
        {/* Noise overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E\")",
            opacity: 0.6,
          }}
        />
        {/* Glow orbs */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.60 0.24 285 / 0.20) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, oklch(0.65 0.20 198 / 0.15) 0%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="font-display font-black text-3xl md:text-5xl mb-5 text-foreground leading-tight">
            {headline}
          </h2>
          <p
            className="mb-10 text-lg md:text-xl leading-relaxed"
            style={{ color: "oklch(0.78 0.04 280)" }}
          >
            {subtext}
          </p>
          <a
            href={HIRE_ME_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-ocid={ocid}
            className="btn-hire-me font-semibold text-base px-10 py-4 rounded-full inline-block"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Testimonials Section ─── */
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Aayushman's thumbnail designs doubled our click-through rate! The visuals are bold, eye-catching, and perfectly match our educational content style.",
    name: "Rahul Sharma",
    role: "Educational Content Creator",
    initial: "R",
    color: "oklch(0.60 0.24 285)",
  },
  {
    id: 2,
    quote:
      "He understood my brand vision instantly and delivered a logo and brand kit that perfectly represents my business. Highly professional and creative!",
    name: "Priya Nair",
    role: "Small Business Owner",
    initial: "P",
    color: "oklch(0.55 0.25 248)",
  },
  {
    id: 3,
    quote:
      "Fast turnaround, great communication, and outstanding design quality. My social media engagement went up 40% after redesigning my graphics with GD Aayushman.",
    name: "Arjun Mehta",
    role: "Tech YouTuber",
    initial: "A",
    color: "oklch(0.65 0.20 198)",
  },
];

function StarRating() {
  return (
    <div className="flex gap-0.5 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          aria-hidden="true"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="oklch(0.82 0.18 60)"
          stroke="none"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function TestimonialsSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  return (
    <section
      data-ocid="testimonials.section"
      className="section-pad"
      style={{ background: "oklch(0.065 0.01 275)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.75 0.20 285)" }}
          >
            Testimonials
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Real feedback from creators and businesses I've had the pleasure of
            working with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={t.id} testimonial={t} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  initial: string;
  color: string;
}

function TestimonialCard({
  testimonial,
  delay,
}: {
  testimonial: Testimonial;
  delay: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * 12;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * -12;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      data-ocid={`testimonials.item.${testimonial.id}`}
      className={`glass-card rounded-2xl p-6 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{
        animationDelay: `${delay}s`,
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "default",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <StarRating />
      <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
        "{testimonial.quote}"
      </p>
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{
            background: `${testimonial.color.replace(")", " / 0.15)")}`,
            border: `1.5px solid ${testimonial.color.replace(")", " / 0.4)")}`,
            color: testimonial.color,
          }}
        >
          {testimonial.initial}
        </div>
        <div>
          <p className="font-semibold text-sm text-foreground">
            {testimonial.name}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── Services Section ─── */
interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
  tag: string;
  tagColor: string;
}

const SERVICES: Service[] = [
  {
    id: 1,
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Logo Design",
    desc: "Unique logos that capture your brand's essence and make a lasting first impression.",
    tag: "Available",
    tagColor: "oklch(0.65 0.20 148)",
  },
  {
    id: 2,
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
    ),
    title: "Branding",
    desc: "Complete brand identity packages including colors, typography, and visual guidelines.",
    tag: "Most Popular",
    tagColor: "oklch(0.68 0.22 285)",
  },
  {
    id: 3,
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Social Media Design",
    desc: "Scroll-stopping graphics for Instagram, Facebook, and all major platforms.",
    tag: "Available",
    tagColor: "oklch(0.65 0.20 148)",
  },
  {
    id: 4,
    icon: (
      <svg
        aria-hidden="true"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
    title: "YouTube Thumbnails",
    desc: "High-CTR thumbnails that get your videos noticed and clicked.",
    tag: "Available",
    tagColor: "oklch(0.65 0.20 148)",
  },
];

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-ocid={`services.item.${service.id}`}
      className={`service-card glass-card rounded-2xl p-7 ${inView ? "animate-fade-in-up" : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-14 h-14 rounded-xl flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.55 0.26 285 / 0.2), oklch(0.50 0.26 248 / 0.15))",
            border: "1px solid oklch(0.55 0.26 285 / 0.25)",
            color: "oklch(0.78 0.20 285)",
          }}
        >
          {service.icon}
        </div>
        <span
          className="text-xs font-bold px-2.5 py-1 rounded-full"
          style={{
            background: `${service.tagColor.replace(")", " / 0.12)")}`,
            border: `1px solid ${service.tagColor.replace(")", " / 0.3)")}`,
            color: service.tagColor,
          }}
        >
          {service.tag}
        </span>
      </div>
      <h3 className="font-display font-bold text-lg mb-3 text-foreground">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.desc}
      </p>
    </div>
  );
}

function ServicesSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="services"
      data-ocid="services.section"
      className="section-pad"
      style={{ background: "oklch(0.09 0.012 275)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.75 0.20 285)" }}
          >
            Services
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl">
            What I <span className="gradient-text">Do</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            From concept to final delivery, I craft visuals that make brands
            unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.id} service={service} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process Section ─── */
const PROCESS_STEPS = [
  {
    id: 1,
    number: "01",
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
    title: "Discovery",
    desc: "I start by understanding your goals, target audience, brand values, and design preferences in depth.",
  },
  {
    id: 2,
    number: "02",
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M2 20h.01M7 20v-4M12 20v-8M17 20V8M22 4v16" />
      </svg>
    ),
    title: "Research & Concepts",
    desc: "Deep research into your industry and competitors. Brainstorm concepts and rough sketches for directions.",
  },
  {
    id: 3,
    number: "03",
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Design Creation",
    desc: "Crafting polished, pixel-perfect designs using professional tools with attention to every detail.",
  },
  {
    id: 4,
    number: "04",
    icon: (
      <svg
        aria-hidden="true"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Deliver & Revise",
    desc: "Final files delivered in all required formats. Revisions included until you're 100% satisfied.",
  },
];

function ProcessSection() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [stepsRef, stepsInView] = useInView<HTMLDivElement>();

  return (
    <section
      id="process"
      data-ocid="process.section"
      className="section-pad"
      style={{ background: "oklch(0.065 0.01 275)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headerRef}
          className={`text-center mb-16 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.75 0.20 285)" }}
          >
            My Process
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            A transparent, structured workflow that ensures every project is
            delivered on time and beyond expectations.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={stepsRef}
          className="relative grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {/* Horizontal connector line on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-[2.75rem] left-[12.5%] right-[12.5%] h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.55 0.26 285 / 0.4), oklch(0.50 0.26 248 / 0.4), oklch(0.65 0.20 198 / 0.4), transparent)",
              borderTop: "1px dashed oklch(0.45 0.12 285 / 0.4)",
            }}
          />

          {PROCESS_STEPS.map((step, i) => {
            const gradients = [
              "oklch(0.55 0.26 285)",
              "oklch(0.50 0.26 248)",
              "oklch(0.65 0.20 198)",
              "oklch(0.60 0.24 285)",
            ];
            const g = gradients[i];

            return (
              <div
                key={step.id}
                data-ocid={`process.item.${step.id}`}
                className={`flex flex-col items-center text-center group ${
                  stepsInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                {/* Step number badge */}
                <div
                  className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{
                    background: `${g.replace(")", " / 0.12)")}`,
                    border: `2px solid ${g.replace(")", " / 0.5)")}`,
                    color: g,
                    transition: "box-shadow 0.3s ease, transform 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      `0 0 20px ${g.replace(")", " / 0.5)")}`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow =
                      "none";
                  }}
                >
                  <span className="font-display font-black text-sm">
                    {step.number}
                  </span>
                </div>

                {/* Icon */}
                <div className="mb-4" style={{ color: g }}>
                  {step.icon}
                </div>

                <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact Section ─── */
type FormStatus = "idle" | "loading" | "success" | "error";

const BUDGET_OPTIONS = [
  { value: "under-1000", label: "Under ₹1,000" },
  { value: "1000-5000", label: "₹1,000 – ₹5,000" },
  { value: "5000-10000", label: "₹5,000 – ₹10,000" },
  { value: "10000-plus", label: "₹10,000+" },
  { value: "discuss", label: "Let's discuss" },
];

function ContactSection() {
  const { actor } = useActor();
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [formRef, formInView] = useInView<HTMLDivElement>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) {
      setErrorMsg("Please fill in all required fields.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      if (actor) {
        const fullDetails = budget
          ? `${details.trim()} | Budget: ${BUDGET_OPTIONS.find((o) => o.value === budget)?.label ?? budget}`
          : details.trim();
        await actor.submitContact(name.trim(), email.trim(), fullDetails);
      }
      setStatus("success");
      setName("");
      setEmail("");
      setDetails("");
      setBudget("");
    } catch {
      setStatus("error");
      setErrorMsg(
        "Something went wrong. Please try again or email me directly.",
      );
    }
  };

  const handleReset = () => {
    setStatus("idle");
    setErrorMsg("");
    setTimeout(() => nameRef.current?.focus(), 50);
  };

  const inputStyle = {
    background: "oklch(0.10 0.015 275)",
    border: "1px solid oklch(0.28 0.04 275)",
  };

  const focusStyle = {
    borderColor: "oklch(0.60 0.24 285)",
    boxShadow: "0 0 0 3px oklch(0.60 0.24 285 / 0.15)",
  };

  const blurStyle = {
    borderColor: "oklch(0.28 0.04 275)",
    boxShadow: "none",
  };

  const inputClass =
    "w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200";

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="section-pad"
      style={{ background: "oklch(0.09 0.012 275)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <p
            className="text-xs font-bold tracking-widest uppercase mb-3"
            style={{ color: "oklch(0.75 0.20 285)" }}
          >
            Contact
          </p>
          <h2 className="font-display font-black text-3xl md:text-5xl">
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Have a project in mind? Fill in the details below and I'll get back
            to you within 24 hours.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start max-w-5xl mx-auto">
          {/* Quick info column */}
          <div
            className={`flex flex-col gap-4 ${formInView ? "animate-slide-left" : "opacity-0"}`}
            style={{ animationDelay: "0.1s" }}
          >
            <h3 className="font-display font-bold text-xl text-foreground mb-2">
              Get in touch
            </h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              Ready to level up your brand? I'm available for freelance projects
              — just drop your details and I'll respond fast.
            </p>

            {/* Quick info cards */}
            {[
              {
                icon: (
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                ),
                label: "Email",
                value: "gdaayushman@gmail.com",
                color: "oklch(0.60 0.24 285)",
              },
              {
                icon: (
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                ),
                label: "Response Time",
                value: "Within 24 hours",
                color: "oklch(0.55 0.25 248)",
              },
              {
                icon: (
                  <svg
                    aria-hidden="true"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                ),
                label: "Availability",
                value: "Open for projects ✦",
                color: "oklch(0.65 0.20 148)",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="glass-card rounded-xl p-4 flex items-center gap-4"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                  style={{
                    background: `${info.color.replace(")", " / 0.12)")}`,
                    border: `1px solid ${info.color.replace(")", " / 0.3)")}`,
                    color: info.color,
                  }}
                >
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="text-sm font-semibold text-foreground">
                    {info.value}
                  </p>
                </div>
              </div>
            ))}

            {/* Direct hire CTA */}
            <div className="mt-2">
              <a
                href={HIRE_ME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hire-me font-semibold text-sm px-6 py-3 rounded-full inline-block"
              >
                Or Hire Me Directly →
              </a>
            </div>
          </div>

          {/* Form column */}
          <div
            ref={formRef}
            className={`glass-card rounded-2xl p-8 ${formInView ? "animate-slide-right" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {status === "success" ? (
              <div
                data-ocid="contact.success_state"
                className="flex flex-col items-center justify-center py-10 text-center gap-4"
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    background: "oklch(0.55 0.20 148 / 0.15)",
                    border: "2px solid oklch(0.65 0.18 148)",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="oklch(0.75 0.18 148)"
                    strokeWidth="2.5"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground text-sm">
                  I'll get back to you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-gradient px-6 py-2.5 rounded-full text-sm font-semibold mt-2"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Your Name{" "}
                    <span style={{ color: "oklch(0.65 0.20 27)" }}>*</span>
                  </label>
                  <input
                    ref={nameRef}
                    id="contact-name"
                    data-ocid="contact.input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Rahul Sharma"
                    autoComplete="name"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, focusStyle)
                    }
                    onBlur={(e) =>
                      Object.assign(e.currentTarget.style, blurStyle)
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email Address{" "}
                    <span style={{ color: "oklch(0.65 0.20 27)" }}>*</span>
                  </label>
                  <input
                    id="contact-email"
                    data-ocid="contact.email_input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="rahul@example.com"
                    autoComplete="email"
                    className={inputClass}
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, focusStyle)
                    }
                    onBlur={(e) =>
                      Object.assign(e.currentTarget.style, blurStyle)
                    }
                  />
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="contact-budget"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Budget Range
                  </label>
                  <select
                    id="contact-budget"
                    data-ocid="contact.select"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className={inputClass}
                    style={{
                      ...inputStyle,
                      appearance: "none",
                      backgroundImage:
                        "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' strokeWidth='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      cursor: "pointer",
                    }}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, {
                        ...focusStyle,
                        appearance: "none",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' strokeWidth='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        cursor: "pointer",
                      })
                    }
                    onBlur={(e) =>
                      Object.assign(e.currentTarget.style, {
                        ...blurStyle,
                        appearance: "none",
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23888' strokeWidth='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 12px center",
                        cursor: "pointer",
                      })
                    }
                  >
                    <option
                      value=""
                      style={{ background: "oklch(0.10 0.015 275)" }}
                    >
                      Select your budget
                    </option>
                    {BUDGET_OPTIONS.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        style={{ background: "oklch(0.10 0.015 275)" }}
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Project Details{" "}
                    <span style={{ color: "oklch(0.65 0.20 27)" }}>*</span>
                  </label>
                  <textarea
                    id="contact-details"
                    data-ocid="contact.textarea"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell me about your project — what do you need, timeline, and any references..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                    style={inputStyle}
                    onFocus={(e) =>
                      Object.assign(e.currentTarget.style, focusStyle)
                    }
                    onBlur={(e) =>
                      Object.assign(e.currentTarget.style, blurStyle)
                    }
                  />
                </div>

                {/* Error state */}
                {status === "error" && (
                  <div
                    data-ocid="contact.error_state"
                    className="flex items-center gap-2 text-sm px-4 py-3 rounded-xl"
                    style={{
                      background: "oklch(0.577 0.245 27.325 / 0.1)",
                      border: "1px solid oklch(0.577 0.245 27.325 / 0.3)",
                      color: "oklch(0.75 0.18 27)",
                    }}
                    role="alert"
                  >
                    <svg
                      aria-hidden="true"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                    {errorMsg || "Something went wrong. Please try again."}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={status === "loading"}
                  className="btn-gradient font-semibold py-3.5 rounded-xl text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        aria-hidden="true"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="animate-spin"
                      >
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-center text-xs text-muted-foreground">
                  or email me directly at{" "}
                  <a
                    href="mailto:gdaayushman@gmail.com"
                    className="underline transition-colors"
                    style={{ color: "oklch(0.75 0.20 285)" }}
                  >
                    gdaayushman@gmail.com
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
const SOCIAL_LINKS = [
  {
    name: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Behance",
    href: "https://behance.net",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M7.443 5.35c.638 0 1.234.05 1.784.158.55.107 1.03.286 1.43.537.396.25.71.587.94 1.014.23.425.342.946.342 1.565 0 .675-.152 1.233-.457 1.68-.304.446-.757.815-1.356 1.105.82.24 1.434.657 1.84 1.248.404.59.607 1.296.607 2.114 0 .673-.137 1.252-.41 1.736-.274.483-.645.876-1.113 1.177-.467.3-.993.518-1.58.65-.585.135-1.182.201-1.79.201H0V5.35h7.443zm-.48 5.71c.509 0 .923-.12 1.24-.36.318-.24.476-.616.476-1.127 0-.285-.05-.52-.153-.706-.102-.183-.24-.33-.413-.44-.173-.108-.37-.183-.593-.22-.22-.04-.447-.058-.68-.058H3.31V11.06h3.653zm.19 5.94c.26 0 .5-.025.722-.076.226-.05.426-.136.6-.26.177-.12.314-.28.418-.48.1-.197.15-.45.15-.756 0-.595-.166-1.022-.496-1.28-.33-.256-.762-.384-1.297-.384H3.31v3.237h3.843zm12.65-2.41c.278.27.44.646.44 1.13l-.002.046H15.86c.03.512.193.9.49 1.166.3.265.664.398 1.098.398.474 0 .875-.128 1.2-.384l.57-.474.953.942c-.378.42-.804.712-1.278.88-.474.167-.97.25-1.49.25-.6 0-1.12-.09-1.576-.27-.453-.18-.84-.436-1.156-.768-.318-.33-.557-.722-.72-1.18-.163-.456-.244-.956-.244-1.498 0-.527.083-1.017.247-1.47.166-.455.398-.85.7-1.186.3-.336.665-.598 1.09-.79.426-.19.9-.286 1.42-.286.567 0 1.065.1 1.492.3.43.198.787.47 1.07.812.284.342.49.742.618 1.2.127.458.19.948.19 1.47l-.002.174h-4.61zM15.71 9.1h4.05V8.017H15.71V9.1zm2.04 1.81c-.42 0-.74.133-.963.4-.224.268-.36.618-.407 1.05h2.61c-.028-.45-.155-.8-.378-1.057-.224-.258-.514-.393-.862-.393z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

const FOOTER_LINKS = ["about", "portfolio", "services", "process", "contact"];

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      data-ocid="footer.section"
      className="border-t"
      style={{
        background: "oklch(0.055 0.01 275)",
        borderColor: "oklch(0.18 0.025 275)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand column */}
          <div>
            <div className="font-display font-extrabold text-2xl gradient-text mb-3">
              GD Aayushman
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Crafting bold visuals for bold brands. Freelance graphic designer
              specializing in logos, branding, and digital graphics.
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
                  style={{ border: "1px solid oklch(0.25 0.03 275)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "oklch(0.55 0.26 285 / 0.5)";
                    e.currentTarget.style.background =
                      "oklch(0.55 0.26 285 / 0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "oklch(0.25 0.03 275)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.75 0.20 285)" }}
            >
              Quick Links
            </p>
            <nav className="flex flex-col gap-2.5">
              {FOOTER_LINKS.map((id) => (
                <button
                  type="button"
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="text-sm text-muted-foreground hover:text-foreground capitalize text-left transition-colors duration-200 w-fit"
                >
                  {id}
                </button>
              ))}
            </nav>
          </div>

          {/* CTA column */}
          <div>
            <p
              className="text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "oklch(0.75 0.20 285)" }}
            >
              Ready to start?
            </p>
            <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
              Let's create something amazing together. Hit me up and let's talk
              about your project.
            </p>
            <a
              href={HIRE_ME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-hire-me text-sm font-semibold px-6 py-2.5 rounded-full inline-block"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
          style={{ borderTop: "1px solid oklch(0.18 0.025 275)" }}
        >
          <p>© {year} GD Aayushman. All rights reserved.</p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            Built with ❤️ using caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}

/* ─── App root ─── */
export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <PortfolioSection />
        <CTABanner
          headline="Ready to elevate your brand?"
          subtext="Let's collaborate and create visuals that make your brand impossible to ignore."
          buttonText="Start a Project"
          ocid="cta1.primary_button"
        />
        <TestimonialsSection />
        <ServicesSection />
        <CTABanner
          headline="Have a project in mind? Let's talk."
          subtext="From logo design to full branding packages — I'm ready to bring your vision to life."
          buttonText="Request a Quote"
          ocid="cta2.primary_button"
        />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
