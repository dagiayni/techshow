import Link from "next/link";
import { ArrowRight, Monitor, ShoppingBag, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Navbar */}
      <header className="fixed top-0 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Monitor className="h-6 w-6 text-foreground" />
            <span className="text-xl font-bold tracking-tight">TechHub Showroom</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <Link 
              href="/admin" 
              className="inline-flex h-9 items-center justify-center rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Admin Panel
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-32 sm:py-40">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-foreground/20 opacity-20 blur-[100px]"></div>
          
          <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm font-medium mb-8">
              <Zap className="mr-2 h-4 w-4 text-yellow-500" />
              <span>The ultimate platform for tech retailers</span>
            </div>
            
            <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl mb-6">
              Create Your Premium <br className="hidden sm:block" />
              <span className="text-muted-foreground">Tech Showroom</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-muted-foreground mb-10">
              Launch your electronics store in minutes. Manage inventory, process orders, and provide a world-class shopping experience for your customers.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
              >
                Go to Dashboard
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                href="/demo"
                className="inline-flex h-12 items-center justify-center rounded-full border border-border bg-background px-8 text-sm font-medium transition-colors hover:bg-muted"
              >
                View Demo Store
              </Link>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-24 bg-card border-t border-border/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 border border-border/50 transition-colors hover:bg-muted">
                <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center border border-border mb-4">
                  <ShoppingBag className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Storefronts</h3>
                <p className="text-muted-foreground">Beautiful, high-converting product pages designed specifically for electronics and hardware.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 border border-border/50 transition-colors hover:bg-muted">
                <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center border border-border mb-4">
                  <Monitor className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
                <p className="text-muted-foreground">Keep track of SKUs, manage stock levels, and organize your products by categories and brands.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/50 border border-border/50 transition-colors hover:bg-muted">
                <div className="h-12 w-12 rounded-full bg-background flex items-center justify-center border border-border mb-4">
                  <Zap className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Fast Performance</h3>
                <p className="text-muted-foreground">Built on Next.js 15 for lightning-fast page loads, ensuring your customers never wait.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        <div className="container mx-auto">
          <p>© {new Date().getFullYear()} TechHub Showroom. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
