import React, { useEffect, useMemo, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import { palette } from '../theme';
import Monogram from '../components/ui/monogram';
import DataLinesBackground from '../components/background/data-lines-background';
import allPosts from './posts';
import { render, readingMinutes } from './markdown';

const serif = "'Cormorant Garamond', Georgia, serif";
const sans = "'Jost', -apple-system, BlinkMacSystemFont, 'Helvetica Neue', sans-serif";
const mono = "'IBM Plex Mono', Menlo, monospace";
const muted = '#A89A8F';

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

// Newest first. The featured post is the latest one.
const posts = [...allPosts].sort((a, b) => b.date.localeCompare(a.date));
const topics = ['All', ...Array.from(new Set(posts.map((p) => p.topic)))];

// Editorial cover: one word on a warm gradient, Keynote-slide style.
// A post can set `image` (with `credit`) to use a photo instead.
const Cover = ({ post, size = 'card' }) => {
  const big = size !== 'card';
  const [a, b] = post.colors;
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: big ? '22px' : '16px',
        aspectRatio: size === 'post' ? { xs: '16 / 10', md: '2.4 / 1' } : big ? { xs: '16 / 10', sm: '16 / 9' } : '16 / 10',
        background: post.image
          ? `${post.imagePosition || 'center 28%'} / cover no-repeat url(${post.image})`
          : `radial-gradient(120% 90% at 0% 0%, ${a} 0%, transparent 60%),
             radial-gradient(90% 90% at 100% 100%, ${b} 0%, transparent 65%),
             ${palette.bgElevated}`,
        border: `1px solid ${palette.border}`,
        display: 'flex',
        alignItems: 'flex-end',
        p: big ? { xs: 3, md: 5 } : 2.5,
      }}
    >
      {!post.image && (
        <Typography
          aria-hidden
          sx={{
            fontFamily: serif,
            fontWeight: 600,
            fontSize: big ? { xs: '3.2rem', md: '5.5rem' } : { xs: '2.4rem', md: '2.6rem' },
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            color: 'rgba(255, 244, 236, 0.92)',
            textShadow: '0 2px 30px rgba(0,0,0,0.25)',
          }}
        >
          {post.coverWord}
        </Typography>
      )}
    </Box>
  );
};

const Meta = ({ post, sx = {} }) => (
  <Typography sx={{ fontFamily: sans, fontSize: 13.5, color: muted, ...sx }}>
    <Box component="span" sx={{ color: palette.accent }}>
      {post.topic}
    </Box>
    <span aria-hidden> · </span>
    <time dateTime={post.date}>{formatDate(post.date)}</time>
    <span aria-hidden> · </span>
    {readingMinutes(post.body)} min read
  </Typography>
);

// Slim bar shared by the index and post pages.
const TopBar = ({ backTo }) => (
  <Box
    component="header"
    sx={{
      position: 'sticky',
      top: 0,
      zIndex: 10,
      background: 'rgba(28, 21, 24, 0.72)',
      backdropFilter: 'saturate(160%) blur(18px)',
      WebkitBackdropFilter: 'saturate(160%) blur(18px)',
      borderBottom: `1px solid ${palette.border}`,
    }}
  >
    <Box
      component="nav"
      aria-label="Primary"
      sx={{
        maxWidth: 1080,
        mx: 'auto',
        px: { xs: 2, sm: 4 },
        height: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box component="a" href="/" sx={{ display: 'flex', alignItems: 'center', gap: 1.25, minHeight: 44, textDecoration: 'none' }}>
        <Monogram size={30} />
        <Typography sx={{ fontFamily: serif, fontWeight: 600, fontSize: 19, color: palette.textPrimary }}>
          Nikko Dumrique
        </Typography>
      </Box>
      <Box
        component="a"
        href={backTo ? '/blog/' : '/'}
        sx={{
          display: 'flex',
          minHeight: 44,
          alignItems: 'center',
          gap: 0.75,
          fontFamily: sans,
          fontSize: 14.5,
          color: palette.textSecondary,
          textDecoration: 'none',
          '&:hover': { color: palette.accent },
        }}
      >
        <ArrowBackIosNewRoundedIcon sx={{ fontSize: 13 }} />
        {backTo ? 'All posts' : 'Portfolio'}
      </Box>
    </Box>
  </Box>
);

const Footer = () => (
  <Box
    component="footer"
    sx={{
      maxWidth: 1080,
      mx: 'auto',
      px: { xs: 2, sm: 4 },
      py: 6,
      mt: 10,
      borderTop: `1px solid ${palette.border}`,
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,
      justifyContent: 'space-between',
      fontFamily: sans,
      fontSize: 14,
      color: muted,
      '& a': { color: palette.textSecondary, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', minHeight: 44, '&:hover': { color: palette.accent } },
    }}
  >
    <span>© {new Date().getFullYear()} Nikko Dumrique. Opinions are my own, not my employer's.</span>
    <Box sx={{ display: 'flex', gap: 2.5 }}>
      <a href="/">Portfolio</a>
      <a href="https://github.com/nkoda" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="https://www.linkedin.com/in/nikkodumrique/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </Box>
  </Box>
);

const PostCard = ({ post }) => (
  <Box
    component="a"
    href={`/blog/${post.slug}/`}
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1.75,
      textDecoration: 'none',
      color: 'inherit',
      '& .cover': { transition: 'transform 0.35s cubic-bezier(.2,.8,.2,1)' },
      '&:hover .cover': { transform: 'scale(1.015)' },
      '&:hover h2': { color: palette.accent },
      '&:focus-visible': { outline: `2px solid ${palette.accent}`, outlineOffset: 6, borderRadius: '16px' },
    }}
  >
    <Box className="cover">
      <Cover post={post} />
    </Box>
    <Meta post={post} />
    <Typography
      component="h2"
      sx={{ fontFamily: sans, fontWeight: 500, fontSize: 20, letterSpacing: '-0.01em', textWrap: 'balance', lineHeight: 1.3, color: palette.textPrimary, transition: 'color .2s' }}
    >
      {post.title}
    </Typography>
    <Typography sx={{ fontFamily: sans, fontSize: 16, lineHeight: 1.6, color: palette.textSecondary }}>
      {post.subtitle}
    </Typography>
  </Box>
);

export const BlogIndex = () => {
  const [topic, setTopic] = useState('All');
  const [featured, ...rest] = posts;
  const shown = topic === 'All' ? rest : posts.filter((p) => p.topic === topic);

  useEffect(() => {
    document.title = 'Blog — Nikko Dumrique';
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', background: palette.bg }}>
      <TopBar />
      <Box component="main">
      <Box sx={{ position: 'relative', overflow: 'hidden' }}>
        <DataLinesBackground style={{ position: 'absolute' }} />
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: { xs: 160, md: 220 },
            zIndex: 0,
            pointerEvents: 'none',
            background: `linear-gradient(to bottom, rgba(28, 21, 24, 0), ${palette.bg})`,
          }}
        />
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 1080, mx: 'auto', px: { xs: 2, sm: 4 } }}>
        <Box sx={{ pt: { xs: 7, md: 11 }, pb: { xs: 5, md: 7 }, maxWidth: 760 }}>
          <Typography sx={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: palette.accent, mb: 2 }}>
            Blog
          </Typography>
          <Typography
            component="h1"
            sx={{ fontFamily: serif, fontWeight: 600, fontSize: { xs: '2.9rem', md: '4.4rem' }, lineHeight: 1.02, letterSpacing: '-0.015em', color: palette.textPrimary }}
          >
            Thoughts I couldn't keep in my head.
          </Typography>
          <Typography sx={{ fontFamily: sans, fontWeight: 300, fontSize: { xs: 18, md: 21 }, lineHeight: 1.55, color: palette.textSecondary, mt: 3 }}>
            Random blurbs on AI engineering, leading a team, cloud bills, my commute and fishing. Some are
            polished, most are just ideas that showed up and wouldn't leave.
          </Typography>
        </Box>

        <Box
          component="aside"
          aria-label="Disclosure"
          sx={{ pl: 2.5, mb: { xs: 14, md: 18 }, maxWidth: 680, borderLeft: `2px solid ${palette.accent}` }}
        >
          <Typography sx={{ fontFamily: sans, fontSize: 15.5, lineHeight: 1.65, color: palette.textSecondary }}>
            <Box component="strong" sx={{ color: palette.textPrimary, fontWeight: 500 }}>
              A quick disclosure.
            </Box>{' '}
            None of this was public before. These were private notes in Notion. Then, somewhere in the middle of
            arguing with my coding agents, I realized I kept re-explaining the same opinions to them. So I'm putting
            my knowledge base on the open web. If the big model labs want to scrape it, go ahead. Next time an agent
            meets me, it might already know how I think, and we both save a few tokens.
          </Typography>
        </Box>
      </Box>
      </Box>

      <Box sx={{ maxWidth: 1080, mx: 'auto', px: { xs: 2, sm: 4 } }}>
        {topic === 'All' && featured && (
          <Box
            component="a"
            href={`/blog/${featured.slug}/`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.35fr 1fr' },
              gap: { xs: 3, md: 5 },
              alignItems: 'center',
              textDecoration: 'none',
              mb: { xs: 8, md: 11 },
              '&:hover h2': { color: palette.accent },
            }}
          >
            <Cover post={featured} size="hero" />
            <Box>
              <Typography sx={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: muted, mb: 1.5 }}>
                Latest
              </Typography>
              <Typography component="h2" sx={{ fontFamily: serif, fontWeight: 600, fontSize: { xs: '2rem', md: '2.5rem' }, lineHeight: 1.12, textWrap: 'balance', color: palette.textPrimary, transition: 'color .2s', mb: 2 }}>
                {featured.title}
              </Typography>
              <Typography sx={{ fontFamily: sans, fontSize: 17, lineHeight: 1.6, color: palette.textSecondary, mb: 2.5 }}>
                {featured.subtitle}
              </Typography>
              <Meta post={featured} />
            </Box>
          </Box>
        )}

        <Box
          role="group"
          aria-label="Filter by topic"
          sx={{
            display: 'flex',
            gap: 1,
            flexWrap: { xs: 'nowrap', sm: 'wrap' },
            overflowX: { xs: 'auto', sm: 'visible' },
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            mb: 6,
          }}
        >
          {topics.map((t) => {
            const on = t === topic;
            return (
              <Box
                key={t}
                component="button"
                aria-pressed={on}
                onClick={() => setTopic(t)}
                sx={{
                  fontFamily: sans,
                  fontSize: 14,
                  px: 2,
                  py: 1.1,
                  flexShrink: 0,
                  borderRadius: 999,
                  cursor: 'pointer',
                  border: `1px solid ${on ? palette.accent : palette.border}`,
                  background: on ? palette.accent : 'transparent',
                  color: on ? palette.accentContrast : palette.textSecondary,
                  transition: 'all .2s',
                  '&:hover': { borderColor: palette.borderStrong, color: on ? palette.accentContrast : palette.textPrimary },
                  '&:focus-visible': { outline: `2px solid ${palette.accent}`, outlineOffset: 2 },
                }}
              >
                {t}
              </Box>
            );
          })}
        </Box>

        <Box aria-live="polite" sx={{ position: 'absolute', width: '1px', height: '1px', overflow: 'hidden', clip: 'rect(0 0 0 0)', whiteSpace: 'nowrap' }}>
          Showing {shown.length} posts
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'minmax(0, 1fr)', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
            columnGap: 4,
            rowGap: 7,
            // A lone card on the last row becomes a wide, horizontal card instead of an orphan.
            '@media (min-width: 1200px)': {
              '& > a:last-child:nth-of-type(3n + 1)': {
                gridColumn: '1 / -1',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                columnGap: 5,
                alignContent: 'center',
                '& .cover': { gridRow: 'span 4' },
              },
            },
          }}
        >
          {shown.map((p) => (
            <PostCard key={p.slug} post={p} />
          ))}
        </Box>
      </Box>
      </Box>
      <Footer />
    </Box>
  );
};

// Long-form reading styles for rendered markdown.
const proseSx = {
  fontFamily: sans,
  fontSize: { xs: 18, md: 19.5 },
  lineHeight: 1.75,
  color: '#E3D6CB',
  '& p': { my: 3 },
  '& h2': { fontFamily: serif, fontWeight: 600, fontSize: { xs: '1.9rem', md: '2.2rem' }, lineHeight: 1.15, color: palette.textPrimary, mt: 7, mb: 1.5 },
  '& h3': { fontWeight: 500, fontSize: '1.25rem', color: palette.textPrimary, mt: 5, mb: 1 },
  '& a': { color: palette.accentSoft, textDecorationLine: 'underline', textDecorationColor: 'currentColor', textDecorationThickness: '1px', textUnderlineOffset: '3px', '&:hover': { color: palette.accent } },
  '& strong': { color: palette.textPrimary, fontWeight: 600 },
  '& ul, & ol': { pl: 3, my: 3 },
  '& li': { my: 1, pl: 0.5 },
  '& li::marker': { color: palette.accent },
  '& blockquote': {
    m: 0,
    my: 5,
    pl: 3,
    borderLeft: `2px solid ${palette.accent}`,
    '& p': { m: 0, fontFamily: serif, fontStyle: 'italic', fontSize: { xs: '1.6rem', md: '1.85rem' }, lineHeight: 1.35, color: palette.textPrimary },
  },
  '& code': { fontFamily: mono, fontSize: '0.86em', background: 'rgba(200,130,90,0.1)', px: 0.6, py: 0.2, borderRadius: '6px' },
  '& pre': { my: 4, p: 2.5, borderRadius: '14px', overflowX: 'auto', background: '#150F11', border: `1px solid ${palette.border}`, '& code': { background: 'none', p: 0, fontSize: 14.5, lineHeight: 1.6 } },
  '& hr': { border: 0, my: 6, textAlign: 'center', '&::after': { content: '"· · ·"', color: muted, letterSpacing: '0.6em' } },
  '& figure': { my: 5, mx: 0, '& img': { width: '100%', maxWidth: 480, mx: 'auto', borderRadius: '14px', display: 'block' } },
  // Own photos and diagrams run the full column; GIFs stay small.
  '& figure img[src^="/blog-media/"]': { maxWidth: '100%' },
  '& figcaption': { mt: 1.25, fontSize: 13.5, color: muted, textAlign: 'center' },
};

const ReadingProgress = () => {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      setP(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <Box
      aria-hidden
      sx={{ position: 'fixed', top: 0, left: 0, height: 2, zIndex: 20, width: `${p * 100}%`, background: `linear-gradient(90deg, ${palette.accentDeep}, ${palette.accent}, ${palette.accentGold})` }}
    />
  );
};

export const BlogPost = ({ slug }) => {
  const index = posts.findIndex((p) => p.slug === slug);
  const post = posts[index];
  const html = useMemo(() => (post ? render(post.body) : ''), [post]);

  useEffect(() => {
    document.title = post ? `${post.title} — Nikko Dumrique` : 'Not found — Nikko Dumrique';
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) {
    return (
      <Box sx={{ minHeight: '100vh', background: palette.bg }}>
        <TopBar backTo />
        <Box sx={{ maxWidth: 680, mx: 'auto', px: 2, py: 12, textAlign: 'center' }}>
          <Typography component="h1" sx={{ fontFamily: serif, fontSize: '2.4rem', color: palette.textPrimary }}>This post doesn't exist.</Typography>
          <Box component="a" href="/blog/" sx={{ color: palette.accent, fontFamily: sans }}>
            See all posts
          </Box>
        </Box>
      </Box>
    );
  }

  const isLast = index === posts.length - 1;
  const next = posts[isLast ? 0 : index + 1];

  return (
    <Box sx={{ minHeight: '100vh', background: palette.bg }}>
      <ReadingProgress />
      <TopBar backTo />
      <Box component="main" sx={{ px: { xs: 2, sm: 4 } }}>
      <Box component="article">
        <Box component="header" sx={{ maxWidth: 720, mx: 'auto', pt: { xs: 6, md: 10 }, pb: { xs: 4, md: 5 } }}>
          <Meta post={post} sx={{ mb: 2.5 }} />
          <Typography
            component="h1"
            sx={{ fontFamily: serif, fontWeight: 600, fontSize: { xs: '2.6rem', md: '3.6rem' }, lineHeight: 1.05, textWrap: 'balance', letterSpacing: '-0.01em', color: palette.textPrimary }}
          >
            {post.title}
          </Typography>
          <Typography sx={{ fontFamily: sans, fontWeight: 300, fontSize: { xs: 19, md: 22 }, lineHeight: 1.5, color: palette.textSecondary, mt: 2.5 }}>
            {post.subtitle}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mt: 4 }}>
            <Monogram size={38} />
            <Box>
              <Typography sx={{ fontFamily: sans, fontSize: 15, color: palette.textPrimary }}>Nikko Dumrique</Typography>
              <Typography sx={{ fontFamily: sans, fontSize: 13, color: muted }}>Senior Software Developer, Vancouver</Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ maxWidth: 960, mx: 'auto', mb: { xs: 2, md: 4 } }}>
          <Cover post={post} size="post" />
          {post.credit && (
            <Typography sx={{ mt: 1.25, fontSize: 13, color: muted, textAlign: 'center' }}>{post.credit}</Typography>
          )}
        </Box>
        <Box sx={{ maxWidth: 680, mx: 'auto', ...proseSx }} dangerouslySetInnerHTML={{ __html: html }} />
        <Box sx={{ maxWidth: 680, mx: 'auto', mt: 10, pt: 6, borderTop: `1px solid ${palette.border}` }}>
          <Box
            component="a"
            href={`/blog/${next.slug}/`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 2,
              p: 3,
              borderRadius: '18px',
              textDecoration: 'none',
              background: palette.surface,
              border: `1px solid ${palette.border}`,
              transition: 'border-color .2s',
              '&:hover': { borderColor: palette.borderStrong },
              '&:hover .t': { color: palette.accent },
            }}
          >
            <Box>
              <Typography sx={{ fontFamily: mono, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase', color: muted, mb: 0.75 }}>
                {isLast ? 'Back to the latest post' : 'Read next'}
              </Typography>
              <Typography className="t" sx={{ fontFamily: serif, fontWeight: 600, fontSize: '1.6rem', lineHeight: 1.2, color: palette.textPrimary, transition: 'color .2s' }}>
                {next.title}
              </Typography>
            </Box>
            <ArrowForwardRoundedIcon sx={{ color: palette.accent, flexShrink: 0 }} />
          </Box>
        </Box>
      </Box>
      </Box>
      <Footer />
    </Box>
  );
};
