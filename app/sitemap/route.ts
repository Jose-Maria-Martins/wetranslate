import { NextResponse } from 'next/server';

// Define valid language pairs
const validLanguages = [
  "english",
  "spanish", 
  "french",
  "german",
  "catalan",
  "portuguese",
  "polish"
];

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://doc-translate.com';
  
  // Generate entries for the base pages
  const basePages = [
    {
      loc: baseUrl,
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: 1,
    },
    {
      loc: `${baseUrl}/about`,
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: 0.8,
    }
  ];
  
  // Generate entries for all valid language pair combinations
  const translationPages = [];
  
  for (const fromLang of validLanguages) {
    for (const toLang of validLanguages) {
      // Skip same language pairs
      if (fromLang === toLang) continue;
      
      translationPages.push({
        loc: `${baseUrl}/translate/${fromLang}/${toLang}`,
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.9,
      });
    }
  }
  
  // Combine all pages
  const pages = [...basePages, ...translationPages];
  
  // Create the XML sitemap
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages.map(page => `
  <url>
    <loc>${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `).join('')}
</urlset>`;

  // Return the XML with proper content type
  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}