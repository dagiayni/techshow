import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateMetadata({ params }: { params: Promise<{ store: string }> }): Promise<Metadata> {
  const { store: storeSlug } = await params;
  // TODO: Fetch store details from API to generate dynamic metadata
  return {
    title: `${storeSlug} | TechHub Showroom`,
    description: `Welcome to ${storeSlug}'s premium tech showroom.`,
  };
}

export default async function StoreLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ store: string }>;
}) {
  const { store: storeSlug } = await params;
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar storeSlug={storeSlug} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer storeSlug={storeSlug} />
    </div>
  );
}
