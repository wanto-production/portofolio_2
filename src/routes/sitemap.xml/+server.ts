
export async function GET() {
    const body = sitemap();
    const response = new Response(body);
    response.headers.set('Cache-Control', 'max-age=0, s-maxage=3600');
    response.headers.set('Content-Type', 'application/xml');
    return response;
}

const sitemap = () => `<?xml version="1.0" encoding="UTF-8"?> 
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
<url>
  <loc>http://portofolio-ikhwan.vercel.app/</loc>
  <lastmod>2025-02-01</lastmod>
</url>
</urlset>
`;
