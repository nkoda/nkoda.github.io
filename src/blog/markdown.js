// Tiny markdown-to-HTML renderer for the blog. CommonJS so the build script
// (scripts/prerender-blog.js) can reuse it to write static HTML for crawlers.
// Supports: ## / ### headings, paragraphs, > quotes, - and 1. lists, ``` code,
// --- rules, ![alt](src "caption"), **bold**, *italic*, `code`, [text](url).

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const inline = (s) =>
  escape(s)
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (m, text, url) => {
      const external = /^https?:/.test(url);
      return `<a href="${url}"${external ? ' target="_blank" rel="noopener"' : ''}>${text}</a>`;
    });

function render(md) {
  const lines = md.trim().split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
    } else if (line.startsWith('```')) {
      const code = [];
      i++;
      while (i < lines.length && !lines[i].startsWith('```')) code.push(lines[i++]);
      i++;
      out.push(`<pre><code>${escape(code.join('\n'))}</code></pre>`);
    } else if (/^#{2,3} /.test(line)) {
      const level = line.startsWith('###') ? 3 : 2;
      out.push(`<h${level}>${inline(line.replace(/^#+ /, ''))}</h${level}>`);
      i++;
    } else if (line.trim() === '---') {
      out.push('<hr />');
      i++;
    } else if (/^!\[/.test(line)) {
      const [, alt, src, caption] = line.match(/^!\[([^\]]*)\]\((\S+)(?: "([^"]*)")?\)/) || [];
      out.push(
        `<figure><img src="${src}" alt="${escape(alt || '')}" loading="lazy" />` +
          (caption ? `<figcaption>${inline(caption)}</figcaption>` : '') +
          '</figure>'
      );
      i++;
    } else if (line.startsWith('> ')) {
      const quote = [];
      while (i < lines.length && lines[i].startsWith('> ')) quote.push(lines[i++].slice(2));
      out.push(`<blockquote><p>${inline(quote.join(' '))}</p></blockquote>`);
    } else if (/^(- |\d+\. )/.test(line)) {
      const ordered = /^\d+\. /.test(line);
      const items = [];
      while (i < lines.length && /^(- |\d+\. )/.test(lines[i])) {
        items.push(`<li>${inline(lines[i++].replace(/^(- |\d+\. )/, ''))}</li>`);
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>${items.join('')}</${tag}>`);
    } else {
      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(#{2,3} |> |- |\d+\. |```|---|!\[)/.test(lines[i])) {
        para.push(lines[i++]);
      }
      out.push(`<p>${inline(para.join(' '))}</p>`);
    }
  }
  return out.join('\n');
}

const wordCount = (md) => md.split(/\s+/).filter(Boolean).length;
const readingMinutes = (md) => Math.max(1, Math.round(wordCount(md) / 230));

module.exports = { render, readingMinutes };
