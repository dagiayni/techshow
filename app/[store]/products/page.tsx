"use client";

import { useState, use } from "react";
import Link from "next/link";
import { LayoutGrid, List, SlidersHorizontal, ChevronDown } from "lucide-react";

export default function ProductCatalog({ params }: { params: Promise<{ store: string }> }) {
  const { store: storeSlug } = use(params);
  const [view, setView] = useState<'grid' | 'list'>('grid');
  
  // Mock data
  const products = [
    { id: 1, name: "Samsung Galaxy S24 Ultra", brand: "Samsung", category: "Smartphones", price: 1199.00, slug: "samsung-galaxy-s24-ultra", image: "" },
    { id: 2, name: "Apple MacBook Pro 16\"", brand: "Apple", category: "Laptops", price: 2499.00, slug: "apple-macbook-pro-16", image: "" },
    { id: 3, name: "Sony WH-1000XM5", brand: "Sony", category: "Audio", price: 398.00, slug: "sony-wh-1000xm5", image: "" },
    { id: 4, name: "iPad Pro 12.9\"", brand: "Apple", category: "Tablets", price: 1099.00, slug: "ipad-pro-12", image: "" },
    { id: 5, name: "LG C3 OLED TV 65\"", brand: "LG", category: "TVs", price: 1599.00, slug: "lg-c3-oled-65", image: "" },
    { id: 6, name: "Dell XPS 15", brand: "Dell", category: "Laptops", price: 1899.00, slug: "dell-xps-15", image: "" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Smartphones', 'Laptops', 'Tablets', 'Audio', 'TVs'].map(cat => (
                <li key={cat}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="rounded border-border text-foreground focus:ring-foreground/20" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{cat}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-2">
              {['Apple', 'Samsung', 'Sony', 'LG', 'Dell'].map(brand => (
                <li key={brand}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input type="checkbox" className="rounded border-border text-foreground focus:ring-foreground/20" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">{brand}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Price Range</h3>
            <div className="flex items-center space-x-2">
              <input type="number" placeholder="Min" className="w-full px-3 py-2 bg-muted rounded-lg text-sm outline-none focus:ring-2 focus:ring-foreground/20" />
              <span className="text-muted-foreground">-</span>
              <input type="number" placeholder="Max" className="w-full px-3 py-2 bg-muted rounded-lg text-sm outline-none focus:ring-2 focus:ring-foreground/20" />
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
            <h1 className="text-3xl font-bold tracking-tight">All Products</h1>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select className="appearance-none bg-card border border-border rounded-lg pl-4 pr-10 py-2 text-sm font-medium focus:ring-2 focus:ring-foreground/20 outline-none">
                  <option>Sort by: Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Most Popular</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
              </div>

              <div className="flex items-center bg-card border border-border rounded-lg p-1">
                <button 
                  onClick={() => setView('grid')}
                  className={`p-1.5 rounded-md transition-colors ${view === 'grid' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <LayoutGrid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setView('list')}
                  className={`p-1.5 rounded-md transition-colors ${view === 'list' ? 'bg-muted text-foreground' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Product Grid/List */}
          <div className={view === 'grid' 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" 
            : "space-y-6"
          }>
            {products.map(product => (
              <Link href={`/${storeSlug}/products/${product.slug}`} key={product.id} className={`group bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-all ${view === 'list' ? 'flex items-center' : 'block'}`}>
                <div className={`bg-muted relative ${view === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-square w-full'}`}>
                  {/* Placeholder for Product Image */}
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    Image
                  </div>
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">{product.brand}</p>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
                    {view === 'list' && (
                      <span className="text-sm font-medium px-4 py-2 bg-foreground text-background rounded-full">
                        View Details
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors disabled:opacity-50">
                Previous
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium bg-foreground text-background">
                1
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-muted-foreground hover:bg-muted transition-colors">
                Next
              </button>
            </nav>
          </div>

        </div>
      </div>
    </div>
  );
}
