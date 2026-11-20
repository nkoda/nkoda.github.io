// Runs after `react-scripts build`. Writes build/blog/index.html and
// build/blog/<slug>/index.html so each post is a real URL on GitHub Pages, with
// its title, meta tags and full text in the HTML for crawlers that skip JS.
// React replaces the static markup when it loads. Also writes llms.txt and sitemap.xml.
const fs = require('fs');
const path = require('path');
const posts = require('../src/blog/posts');
const { render } = require('../src/blog/markdown');

const SITE = 'https://nkoda.github.io';
const build = path.join(__dirname, '..', 'build');
const shell = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');

function page({ title, description, url, body, type = 'website' }) {
  const head =
    `<title>${esc(title)}</title>` +
    `<meta name="description" content="${esc(description)}"/>` +
    `<link rel="canonical" href="${url}"/>` +
    `<meta property="og:title" content="${esc(title)}"/>` +
    `<meta property="og:description" content="${esc(description)}"/>` +
    `<meta property="og:type" content="${type}"/>` +
    `<meta property="og:url" content="${url}"/>`;
  return shell
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[\s\S]*?\/>/, '')
    .replace(/<meta property="og:[^>]*\/>/g, '')
    .replace('</head>', `${head}</head>`)
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`);
}

const write = (rel, html) => {
  fs.mkdirSync(path.join(build, rel), { recursive: true });
  fs.writeFileSync(path.join(build, rel, 'index.html'), html);
};

const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));

write(
  'blog',
  page({
    title: 'Blog — Nikko Dumrique',
    description: 'Notes on AI engineering, leading a team, cloud costs, commuting and fishing.',
    url: `${SITE}/blog/`,
    body:
      '<main><h1>Blog</h1><ul>' +
      sorted.map((p) => `<li><a href="/blog/${p.slug}/">${esc(p.title)}</a> — ${esc(p.subtitle)}</li>`).join('') +
      '</ul></main>',
  })
);

for (const p of sorted) {
  write(
    `blog/${p.slug}`,
    page({
      title: `${p.title} — Nikko Dumrique`,
      description: p.subtitle,
      url: `${SITE}/blog/${p.slug}/`,
      type: 'article',
      body: `<article><h1>${esc(p.title)}</h1><p>${esc(p.subtitle)}</p><p>By Nikko Dumrique, ${p.date}</p>${render(p.body)}</article>`,
    })
  );
}

fs.writeFileSync(
  path.join(build, 'llms.txt'),
  `# Nikko Dumrique\n\n> Senior software developer in Vancouver, BC. Backend and AI engineering.\n\n## Blog\n\n` +
    sorted.map((p) => `- [${p.title}](${SITE}/blog/${p.slug}/): ${p.subtitle}`).join('\n') +
    `\n\n## Other\n\n- [Portfolio](${SITE}/)\n- [Resume](${SITE}/resume.pdf)\n- [Bosun](https://github.com/nkoda/Bosun)\n`
);

const urls = ['/', '/blog/', ...sorted.map((p) => `/blog/${p.slug}/`)];
fs.writeFileSync(
  path.join(build, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
    urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n') +
    '\n</urlset>\n'
);

console.log(`Pre-rendered ${sorted.length} posts, llms.txt and sitemap.xml.`);
