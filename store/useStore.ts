import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ProductSnippet {
  id: number;
  name: string;
  price: number;
  slug: string;
  image?: string;
  storeSlug: string;
}

interface AppState {
  favorites: ProductSnippet[];
  recentlyViewed: ProductSnippet[];
  addFavorite: (product: ProductSnippet) => void;
  removeFavorite: (id: number) => void;
  addRecentlyViewed: (product: ProductSnippet) => void;
}

export const useStore = create<AppState>()(
  persist(
    (set) => ({
      favorites: [],
      recentlyViewed: [],
      
      addFavorite: (product) => set((state) => {
        if (state.favorites.some(p => p.id === product.id)) return state;
        return { favorites: [...state.favorites, product] };
      }),
      
      removeFavorite: (id) => set((state) => ({
        favorites: state.favorites.filter((p) => p.id !== id)
      })),
      
      addRecentlyViewed: (product) => set((state) => {
        // Remove if exists, then prepend
        const filtered = state.recentlyViewed.filter(p => p.id !== product.id);
        const updated = [product, ...filtered].slice(0, 10); // Keep last 10
        return { recentlyViewed: updated };
      }),
    }),
    {
      name: 'techhub-store-storage',
    }
  )
);
