"use client";

import Link from "next/link";
import { Search, ShoppingBag, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar({ storeSlug }: { storeSlug?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href={storeSlug ? `/${storeSlug}` : "/"} className="text-xl font-bold tracking-tight">
              {storeSlug ? (
                <span className="text-gradient capitalize">{storeSlug}</span>
              ) : (
                <span className="text-gradient">TechHub</span>
              )}
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href={`/${storeSlug}/products`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <Link href={`/${storeSlug}/categories`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Categories
            </Link>
            <Link href={`/${storeSlug}/branches`} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Branches
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-muted-foreground hover:text-foreground transition-colors">
              <ShoppingBag className="h-5 w-5" />
            </button>
            <Link
              href={`/${storeSlug}/contact`}
              className="bg-foreground text-background px-4 py-2 rounded-full text-sm font-medium hover:bg-muted-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden glass border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={`/${storeSlug}/products`} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted">
              Products
            </Link>
            <Link href={`/${storeSlug}/categories`} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted">
              Categories
            </Link>
            <Link href={`/${storeSlug}/branches`} className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-muted">
              Branches
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
