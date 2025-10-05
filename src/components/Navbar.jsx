import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";

// Responsive, accessible navbar using Tailwind CSS and react-router-dom (v6+)
// New: optional `iconStyle` prop to choose the mobile button icon: "hamburger" (three lines) or "dots" (vertical 3 dots).
// Usage examples:
//  <Navbar />                      // default hamburger icon
//  <Navbar iconStyle="dots" />    // vertical 3 dots in top-right on mobile

export default function Navbar({ logoSrc = null, logoAlt = "Micro Tech", iconStyle = "hamburger" }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
    { to: "/certificate", label: "Certificate" },
  ];

  // Close menu on outside click or Escape
  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) setOpen(false);
    }
    function handleKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  const linkBase = "px-3 py-2 rounded-md text-sm font-medium";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <nav className="container mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-3 text-gray-900">
              {logoSrc ? (
                <img src={logoSrc} alt={logoAlt} className="h-10 w-auto rounded-md" />
              ) : (
                <div className="h-10 w-10 bg-blue-600 text-white rounded-md flex items-center justify-center font-bold">MT</div>
              )}
              <span className="hidden sm:inline-block text-lg font-semibold">Micro Tech</span>
            </a>
          </div>

          {/* Desktop links */}
          <div className="hidden md:flex md:items-center md:space-x-2">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button - positioned top-right on small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen((s) => !s)}
              aria-controls="mobile-menu"
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}
              className="absolute right-4 top-3 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {/* If open, show X icon to close */}
              {open ? (
                <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // When closed, show the selected icon style
                iconStyle === "dots" ? (
                  <svg className={`h-6 w-6`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <circle cx="12" cy="6" r="1.75" />
                    <circle cx="12" cy="12" r="1.75" />
                    <circle cx="12" cy="18" r="1.75" />
                  </svg>
                ) : (
                  <svg className={`h-6 w-6`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu panel */}
        <div
          ref={menuRef}
          id="mobile-menu"
          className={`md:hidden mt-2 transition-max-height duration-200 overflow-hidden ${open ? "max-h-96" : "max-h-0"}`}
          style={{ transitionProperty: 'max-height' }}
        >
          <div className="space-y-1 bg-white rounded-md shadow px-2 py-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${linkBase} ${isActive ? "text-blue-600" : "text-gray-700 hover:text-blue-600"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
