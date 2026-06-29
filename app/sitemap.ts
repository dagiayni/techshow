import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://techhub.et';

  // In a real application, you would fetch all active stores from the backend
  const stores = ['abc-electronics', 'digital-world'];
  
  const sitemapEntries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Add store URLs
  stores.forEach((store) => {
    sitemapEntries.push({
      url: `${baseUrl}/${store}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/${store}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    });
    
    sitemapEntries.push({
      url: `${baseUrl}/${store}/branches`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
