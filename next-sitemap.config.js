/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://rdcvithana.com',
  generateRobotsTxt: true, // Generate a robots.txt file
  generateIndexSitemap: true, // Generate a sitemap index file
  sitemapSize: 5000, // Maximum number of URLs per sitemap file
  changefreq: 'daily', // How often the pages are updated
  priority: 0.7, // Default priority for pages
  exclude: ['/admin/**', '/private/**'], // Exclude specific paths from the sitemap
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: ['/api/', '/_next/', '/static/', '/private/'],
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://rdcvithana.com/sitemap.xml',
      'https://rdcvithana.com/sitemap-0.xml',
    ],
  },
};

module.exports = config;
