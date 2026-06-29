import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StoreHomepage({ params }: { params: { store: string } }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32 flex flex-col items-center text-center px-4">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-30 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/20 to-transparent blur-3xl rounded-full mix-blend-multiply filter" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-border bg-card/50 backdrop-blur-sm text-sm font-medium mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2"></span>
            Welcome to {params.store} Showroom
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            Discover Premium <br />
            <span className="text-gradient">Technology</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-10 max-w-2xl">
            Explore our curated collection of the latest electronics. Compare specifications, check availability, and contact us directly to purchase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link 
              href={`/${params.store}/products`}
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-background bg-foreground rounded-full hover:bg-muted-foreground transition-all duration-200"
            >
              Browse Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href={`/${params.store}/branches`}
              className="inline-flex justify-center items-center px-8 py-4 text-base font-medium text-foreground bg-card border border-border rounded-full hover:bg-muted transition-all duration-200"
            >
              Visit Store
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories (Placeholder) */}
      <section className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-muted flex items-center justify-center p-6 border border-border hover:border-foreground/20 transition-all cursor-pointer">
                <span className="text-muted-foreground font-medium">Category {i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
