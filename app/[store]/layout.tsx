import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: { store: string } }): Promise<Metadata> {
  const storeSlug = params.store;
  // TODO: Fetch store details from API to generate dynamic metadata
  return {
    title: `${storeSlug} | TechHub Showroom`,
    description: `Welcome to ${storeSlug}'s premium tech showroom.`,
  };
}

export default function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { store: string };
}) {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar storeSlug={params.store} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer storeSlug={params.store} />
    </div>
  );
}
