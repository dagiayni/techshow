"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Heart, ShieldCheck, Truck, Phone, MessageCircle } from "lucide-react";

export default function ProductDetails({ params }: { params: { store: string, slug: string } }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'specs'>('overview');
  
  // Mock Data
  const product = {
    name: "Samsung Galaxy S24 Ultra",
    brand: "Samsung",
    price: 1199.00,
    status: "In Stock",
    description: "Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility — starting with the most important device in your life. Your smartphone.",
    specs: [
      { key: "Display", value: "6.8\" QHD+ Dynamic AMOLED 2X, 120Hz" },
      { key: "Processor", value: "Snapdragon 8 Gen 3 for Galaxy" },
      { key: "RAM", value: "12GB" },
      { key: "Storage", value: "256GB / 512GB / 1TB" },
      { key: "Camera", value: "200MP Wide, 50MP Periscope, 12MP Ultrawide" },
      { key: "Battery", value: "5000mAh, 45W Charging" },
      { key: "OS", value: "Android 14, One UI 6.1" },
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pb-32">
      {/* Breadcrumbs */}
      <nav className="flex items-center text-sm font-medium text-muted-foreground mb-8">
        <Link href={`/${params.store}`} className="hover:text-foreground">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${params.store}/products`} className="hover:text-foreground">Products</Link>
        <span className="mx-2">/</span>
        <Link href={`/${params.store}/categories/smartphones`} className="hover:text-foreground">Smartphones</Link>
        <span className="mx-2">/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Gallery */}
        <div className="space-y-4">
          <div className="aspect-square bg-muted rounded-2xl border border-border flex items-center justify-center overflow-hidden">
             {/* Main Image Placeholder */}
             <span className="text-muted-foreground text-lg font-medium">Product Image Gallery</span>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square bg-muted rounded-xl border border-border flex items-center justify-center cursor-pointer hover:border-foreground/50 transition-colors">
                <span className="text-muted-foreground text-xs">Thumb {i}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-bold text-muted-foreground tracking-wider uppercase mb-2">{product.brand}</p>
              <h1 className="text-4xl font-extrabold tracking-tight mb-4">{product.name}</h1>
            </div>
            <div className="flex space-x-2">
              <button className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-red-500">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-3 bg-card border border-border rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                <Share2 className="h-5 w-5" />
              </button>
            </div>
          </div>

          <div className="mb-6 flex items-center">
            <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
            <span className="ml-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-500">
              {product.status}
            </span>
          </div>

          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            {product.description}
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center p-4 bg-muted/50 rounded-xl border border-border">
              <ShieldCheck className="h-6 w-6 text-foreground mr-3" />
              <div>
                <p className="text-sm font-medium text-foreground">1 Year Warranty</p>
                <p className="text-xs text-muted-foreground">Official Brand Warranty</p>
              </div>
            </div>
            <div className="flex items-center p-4 bg-muted/50 rounded-xl border border-border">
              <Truck className="h-6 w-6 text-foreground mr-3" />
              <div>
                <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">Available in Store</p>
              </div>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex flex-col space-y-4 mt-auto">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Contact Store to Purchase</h3>
            <div className="flex space-x-4">
              <button className="flex-1 inline-flex justify-center items-center px-6 py-4 bg-foreground text-background rounded-full font-medium hover:bg-muted-foreground transition-all">
                <Phone className="h-5 w-5 mr-2" />
                Call Store
              </button>
              <button className="flex-1 inline-flex justify-center items-center px-6 py-4 bg-[#25D366] text-white rounded-full font-medium hover:bg-[#128C7E] transition-all">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-20">
        <div className="border-b border-border">
          <nav className="flex space-x-8">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'overview' ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('specs')}
              className={`pb-4 text-sm font-medium border-b-2 transition-colors ${activeTab === 'specs' ? 'border-foreground text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
            >
              Specifications
            </button>
          </nav>
        </div>

        <div className="py-8">
          {activeTab === 'overview' && (
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p>{product.description}</p>
              {/* Additional Rich Text Content here */}
            </div>
          )}
          
          {activeTab === 'specs' && (
            <div className="max-w-3xl">
              <dl className="divide-y divide-border border-t border-border">
                {product.specs.map((spec) => (
                  <div key={spec.key} className="py-4 flex justify-between gap-4">
                    <dt className="text-sm font-medium text-muted-foreground w-1/3">{spec.key}</dt>
                    <dd className="text-sm font-medium text-foreground w-2/3">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Mobile Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-card/80 backdrop-blur-md border-t border-border z-50 flex gap-4">
        <button className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-foreground text-background rounded-full font-medium">
          <Phone className="h-4 w-4 mr-2" /> Call
        </button>
        <button className="flex-1 inline-flex justify-center items-center px-4 py-3 bg-[#25D366] text-white rounded-full font-medium">
          <MessageCircle className="h-4 w-4 mr-2" /> WhatsApp
        </button>
      </div>

    </div>
  );
}
