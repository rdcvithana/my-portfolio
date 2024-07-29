const fs = require('fs');
const path = require('path');

const robotsTxtContent = `
User-agent: *
Allow: /
Disallow: /private/
Disallow: /admin/
Sitemap: https://rdcvithana.com/sitemap.xml
Sitemap: https://rdcvithana.com/sitemap-0.xml
`;

const robotsTxtPath = path.join(__dirname, 'public', 'robots.txt');

fs.writeFileSync(robotsTxtPath, robotsTxtContent, 'utf8');

console.log('robots.txt has been generated.');
