import Link from "next/link";

export default function Footer({ storeSlug }: { storeSlug?: string }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href={storeSlug ? `/${storeSlug}` : "/"} className="text-xl font-bold tracking-tight">
              {storeSlug ? (
                <span className="text-gradient capitalize">{storeSlug}</span>
              ) : (
                <span className="text-gradient">TechHub</span>
              )}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Premium digital showroom for electronics. Discover, compare, and connect directly with the store.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${storeSlug}/categories/smartphones`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Smartphones
                </Link>
              </li>
              <li>
                <Link href={`/${storeSlug}/categories/laptops`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Laptops
                </Link>
              </li>
              <li>
                <Link href={`/${storeSlug}/categories/accessories`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${storeSlug}/contact`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href={`/${storeSlug}/branches`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Store Locations
                </Link>
              </li>
              <li>
                <Link href={`/${storeSlug}/faq`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href={`/${storeSlug}/privacy`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href={`/${storeSlug}/terms`} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {storeSlug ? storeSlug.toUpperCase() : "TechHub"}. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            {/* Social Icons can go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}
