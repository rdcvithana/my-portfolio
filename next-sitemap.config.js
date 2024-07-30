/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://rdcvithana.com',
  generateRobotsTxt: true, // (optional) Generate a robots.txt file
  generateIndexSitemap: true, // (optional) Generate a sitemap index file
  sitemapSize: 5000, // (optional) Maximum number of URLs per sitemap file
  changefreq: 'daily', // (optional) How often the pages are updated
  priority: 0.7, // (optional) Default priority for pages
  exclude: ['/admin/**', '/private/**'], // (optional) Exclude specific paths from the sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    additionalSitemaps: [
      'https://rdcvithana.com/sitemap.xml',
      "https://rdcvithana.com/sitemap-0.xml",
    ],
  },
};

module.exports = config;
