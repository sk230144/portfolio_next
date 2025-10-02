import { getProjects } from '@/lib/portfolio-service';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://saurabh-tiwari-portfolio.com';

function generateSiteMap(projects: { slug: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>${BASE_URL}</loc>
     </url>
     <url>
       <loc>${BASE_URL}/projects</loc>
     </url>
     <url>
       <loc>${BASE_URL}/experience</loc>
     </url>
      <url>
       <loc>${BASE_URL}/contact</loc>
     </url>
     ${projects
       .map(({ slug }) => {
         return `
       <url>
           <loc>${`${BASE_URL}/projects/${slug}`}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

export async function GET() {
  const projects = await getProjects();
  const body = generateSiteMap(projects);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
