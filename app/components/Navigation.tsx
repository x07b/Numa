"use client";

import { useEffect, useMemo, useState } from "react";
import "./Navigation.css";

const NAV_LINKS = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const navClassName = useMemo(() => {
    const base = ["navbar"];
    if (isScrolled) base.push("navbar--scrolled");
    if (isOpen) base.push("navbar--open");
    return base.join(" ");
  }, [isOpen, isScrolled]);

  return (
    <nav className={navClassName} aria-label="Primary">
      <div className="navbar-pill">
        <a className="logo" href="#top" onClick={() => setIsOpen(false)}>
          <span className="logo-text">NÜMA</span>
          <span className="logo-sub">Coffee &amp; Kitchen</span>
        </a>

        <ul className="nav-menu" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-cta">
          <a className="btn-reserve" href="#location">
            Réserver
          </a>

          <button
            type="button"
            className="nav-toggle"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((v) => !v)}
          >
            <span className="nav-toggle-bars" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        className="nav-mobile-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile menu"
        onClick={(e) => {
          if (e.currentTarget === e.target) setIsOpen(false);
        }}
      >
        <div className="nav-mobile-sheet">
          <div className="nav-mobile-header">
            <span className="nav-mobile-title">Navigation</span>
            <button
              type="button"
              className="nav-mobile-close"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>

          <ul className="nav-mobile-links" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="nav-mobile-cta" href="#location" onClick={() => setIsOpen(false)}>
            Réserver maintenant
          </a>
        </div>
      </div>
    </nav>
  );
}
