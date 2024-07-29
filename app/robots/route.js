// app/robots/route.js
import { NextResponse } from 'next/server';

export async function GET() {
  const robotsTxt = `
    User-agent: *
    Disallow: /private/
    Allow: /
    Sitemap: https://rdcvithana.com/sitemap.xml
  `;

  return NextResponse.json(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
