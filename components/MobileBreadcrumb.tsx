"use client"

import { scrollToSection } from "@/utils/utilityFunctions"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Our Story", href: "#ourStory" },
  { name: "Wedding Details", href: "#weddingDetail" },
  { name: "Gallery", href: "#gallery" },
  { name: "RSVP", href: "#RSVP" },
]

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation"
        className="flex flex-col gap-1.5 md:hidden"
      >
        <span className="h-0.5 w-7 bg-[#d6b56d]" />
        <span className="h-0.5 w-7 bg-[#d6b56d]" />
        <span className="h-0.5 w-7 bg-[#d6b56d]" />
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* Sliding mobile menu */}
      <aside
        className={`fixed right-0 top-0 z-50 h-screen w-[80%] max-w-sm bg-green px-6 py-8 shadow-xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-12 flex items-center justify-between">
          <span className="text-xl font-semibold text-golden">
            Menu
          </span>

          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation"
            className="text-3xl leading-none text-golden"
          >
            &times;
          </button>
        </div>

        <nav>
          <ul className="flex flex-col gap-7">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}
                  onClick={()=>setIsOpen(false)}
                  className="text-lg text-golden-light transition-colors hover:text-golden"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}