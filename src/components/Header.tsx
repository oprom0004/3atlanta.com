"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname || "/";
  
  const isHome = currentPath === "/";

  const navLinks = [
    { name: "Products", href: isHome ? "#products" : "/#products" },
    { name: "Technology", href: isHome ? "#technology" : "/#technology" },
    { name: "Applications", href: isHome ? "#applications" : "/#applications" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-brand-border/50">
        <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-bold text-xl tracking-tight">3Atlanta</span>
          <span className="text-[9px] font-bold text-brand-muted uppercase tracking-[0.2em] mt-0.5 group-hover:text-black transition-colors">
            Programmable DC
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-brand-muted">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-black transition-colors">
              {link.name}
            </a>
          ))}
          <Link 
            href="/where-to-buy" 
            className="px-5 py-2 bg-black text-white rounded-full text-xs font-bold hover:bg-zinc-800 transition-all"
          >
            Where to Buy
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-brand-border/50 p-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="block text-sm font-medium text-brand-muted"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Link 
            href="/where-to-buy" 
            className="block w-full py-3 bg-black text-white rounded-full text-center text-xs font-bold"
            onClick={() => setIsMenuOpen(false)}
          >
            Where to Buy
          </Link>
        </div>
      )}
    </nav>
  );
}
