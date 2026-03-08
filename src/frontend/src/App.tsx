import type React from "react";
import { useCallback, useRef, useState } from "react";
import { useActor } from "./hooks/useActor";
import { useInView } from "./hooks/useInView";

/* ─── Nav ─── */
function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  }, []);

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
          {["about", "portfolio", "services", "contact"].map((id) => (
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
            href={
              "https://mail.google.com/mail/?view=cm&to=gdaayushman@gmail.com&su=Hire Request – GD Aayushman&body=Hi Aayushman,%0A%0APlease fill in the details below:%0A%0A1. Your Name:%0A2. Your Work / Business:%0A3. What do you want me to design / create:%0A4. How long do you need me (Full Time / Part Time):%0A5. Project deadline or timeline:%0A%0ALooking forward to working with you!"
            }
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.link"
            className="btn-gradient text-sm font-semibold px-5 py-2 rounded-full"
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
          {["about", "portfolio", "services", "contact"].map((id) => (
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
            href={
              "https://mail.google.com/mail/?view=cm&to=gdaayushman@gmail.com&su=Hire Request – GD Aayushman&body=Hi Aayushman,%0A%0APlease fill in the details below:%0A%0A1. Your Name:%0A2. Your Work / Business:%0A3. What do you want me to design / create:%0A4. How long do you need me (Full Time / Part Time):%0A5. Project deadline or timeline:%0A%0ALooking forward to working with you!"
            }
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="nav.link"
            className="btn-gradient text-sm font-semibold px-5 py-2.5 rounded-full text-center"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}

/* ─── Hero ─── */
const HEADLINE = "Creative Graphic Designer for Brands & Businesses";
const WORDS = HEADLINE.split(" ");
const WORDS_KEYED = WORDS.map((word, pos) => ({
  word,
  pos,
  key: `headline-word-${word}-${pos}`,
}));

function HeroSection() {
  const scrollToPortfolio = () =>
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  return (
    <section
      data-ocid="hero.section"
      className="hero-bg relative min-h-screen flex items-center justify-center overflow-hidden"
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
            "radial-gradient(circle, oklch(0.50 0.26 248 / 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Tag */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase mb-8 animate-fade-in"
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
            }}
          />
          Available for freelance projects
        </div>

        {/* Animated headline */}
        <h1 className="font-display font-black text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-6">
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
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.9s" }}
        >
          I help brands stand out with powerful visuals — from logos to social
          media content.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href={
              "https://mail.google.com/mail/?view=cm&to=gdaayushman@gmail.com&su=Hire Request – GD Aayushman&body=Hi Aayushman,%0A%0APlease fill in the details below:%0A%0A1. Your Name:%0A2. Your Work / Business:%0A3. What do you want me to design / create:%0A4. How long do you need me (Full Time / Part Time):%0A5. Project deadline or timeline:%0A%0ALooking forward to working with you!"
            }
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="hero.primary_button"
            className="btn-gradient font-semibold text-base px-8 py-3.5 rounded-full shadow-glow"
          >
            Hire Me
          </a>
          <button
            type="button"
            data-ocid="hero.secondary_button"
            onClick={scrollToPortfolio}
            className="btn-outline-glow font-semibold text-base px-8 py-3.5 rounded-full"
          >
            View Portfolio
          </button>
        </div>

        {/* Floating stats */}
        <div
          className="mt-16 grid grid-cols-2 gap-6 max-w-xs mx-auto animate-fade-in"
          style={{ animationDelay: "1.4s" }}
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "2+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-2xl gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40"
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

/* ─── About ─── */
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

/* ─── Portfolio ─── */
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
    title: "Brand Identity — TechCorp",
    category: "Logo Design",
    img: "/assets/generated/portfolio-techcorp.dim_600x400.jpg",
    categoryColor: "oklch(0.70 0.22 285)",
  },
  {
    id: 2,
    title: "Social Media Kit — FoodBrand",
    category: "Social Media",
    img: "/assets/generated/portfolio-foodbrand.dim_600x400.jpg",
    categoryColor: "oklch(0.70 0.20 50)",
  },
  {
    id: 3,
    title: "YouTube Channel Art — VloggerX",
    category: "YouTube",
    img: "/assets/generated/portfolio-vloggerx.dim_600x400.jpg",
    categoryColor: "oklch(0.72 0.19 145)",
  },
  {
    id: 4,
    title: "Poster Design — MusicFest 2025",
    category: "Poster",
    img: "/assets/generated/portfolio-musicfest.dim_600x400.jpg",
    categoryColor: "oklch(0.68 0.24 310)",
  },
  {
    id: 5,
    title: "Logo Suite — FitLife Studio",
    category: "Branding",
    img: "/assets/generated/portfolio-fitlife.dim_600x400.jpg",
    categoryColor: "oklch(0.70 0.20 198)",
  },
  {
    id: 6,
    title: "Instagram Pack — BeautyBrand",
    category: "Social Media",
    img: "/assets/generated/portfolio-beautybrand.dim_600x400.jpg",
    categoryColor: "oklch(0.70 0.18 350)",
  },
];

function PortfolioCard({
  project,
  delay,
}: { project: Project; delay: number }) {
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

  return (
    <section
      id="portfolio"
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
      </div>
    </section>
  );
}

/* ─── Services ─── */
interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
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
      <div
        className="mb-5 w-14 h-14 rounded-xl flex items-center justify-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.26 285 / 0.2), oklch(0.50 0.26 248 / 0.15))",
          border: "1px solid oklch(0.55 0.26 285 / 0.25)",
          color: "oklch(0.78 0.20 285)",
        }}
      >
        {service.icon}
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
    <section id="services" className="section-pad">
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

/* ─── Contact ─── */
type FormStatus = "idle" | "loading" | "success" | "error";

function ContactSection() {
  const { actor } = useActor();
  const [headerRef, headerInView] = useInView<HTMLDivElement>();
  const [formRef, formInView] = useInView<HTMLDivElement>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const nameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !details.trim()) {
      setErrorMsg("Please fill in all fields.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    try {
      if (actor) {
        await actor.submitContact(name.trim(), email.trim(), details.trim());
      }
      setStatus("success");
      setName("");
      setEmail("");
      setDetails("");
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

  return (
    <section id="contact" data-ocid="contact.section" className="section-pad">
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

        <div className="max-w-xl mx-auto">
          <div
            ref={formRef}
            className={`glass-card rounded-2xl p-8 ${formInView ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.15s" }}
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
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    ref={nameRef}
                    id="contact-name"
                    data-ocid="contact.input"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    autoComplete="name"
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200"
                    style={{
                      background: "oklch(0.10 0.015 275)",
                      border: "1px solid oklch(0.28 0.04 275)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.60 0.24 285)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px oklch(0.60 0.24 285 / 0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.28 0.04 275)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    data-ocid="contact.email_input"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    autoComplete="email"
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200"
                    style={{
                      background: "oklch(0.10 0.015 275)",
                      border: "1px solid oklch(0.28 0.04 275)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.60 0.24 285)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px oklch(0.60 0.24 285 / 0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.28 0.04 275)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-details"
                    className="block text-sm font-medium text-foreground mb-1.5"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-details"
                    data-ocid="contact.textarea"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Tell me about your project — what do you need, timeline, and budget..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl text-sm text-foreground placeholder:text-muted-foreground outline-none transition-all duration-200 resize-none"
                    style={{
                      background: "oklch(0.10 0.015 275)",
                      border: "1px solid oklch(0.28 0.04 275)",
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.60 0.24 285)";
                      e.currentTarget.style.boxShadow =
                        "0 0 0 3px oklch(0.60 0.24 285 / 0.15)";
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor =
                        "oklch(0.28 0.04 275)";
                      e.currentTarget.style.boxShadow = "none";
                    }}
                  />
                </div>

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

function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer
      data-ocid="footer.section"
      className="py-12 border-t"
      style={{
        background: "oklch(0.06 0.01 275)",
        borderColor: "oklch(0.18 0.025 275)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="font-display font-extrabold text-xl gradient-text">
            GD Aayushman
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="w-10 h-10 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-200"
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

        <div
          className="mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground"
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
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
