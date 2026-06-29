import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AdBannerProps {
  title: string;
  subtitle: string;
  targetUrl: string;
  image?: string;
  placement: "hero" | "promotional" | "sponsored" | "category" | "product";
}

export default function AdBanner({ title, subtitle, targetUrl, image, placement }: AdBannerProps) {
  // Render differently based on placement
  if (placement === 'promotional') {
    return (
      <div className="w-full bg-foreground text-background rounded-2xl overflow-hidden relative group cursor-pointer my-8">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent to-background/50 group-hover:opacity-40 transition-opacity"></div>
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between p-8 sm:p-12">
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">{title}</h3>
            <p className="text-muted text-sm sm:text-base">{subtitle}</p>
          </div>
          <Link 
            href={targetUrl}
            className="inline-flex items-center px-6 py-3 bg-background text-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform"
          >
            Explore Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    );
  }

  // Default block style (e.g. category or product page sidebar ad)
  return (
    <Link href={targetUrl} className="block w-full bg-card border border-border rounded-2xl overflow-hidden hover:border-foreground/30 transition-colors group my-6">
      <div className="aspect-[21/9] bg-muted relative">
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={image} alt={title} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground bg-gradient-to-tr from-muted to-muted/50">
            Ad Image Placeholder
          </div>
        )}
      </div>
      <div className="p-4 flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-foreground">{title}</h4>
          <p className="text-xs text-muted-foreground">{subtitle}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
      </div>
    </Link>
  );
}
