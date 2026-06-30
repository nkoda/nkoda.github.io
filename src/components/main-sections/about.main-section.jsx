import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import { Section, SectionHeading, GlassCard } from '../ui/primitives';
import { palette } from '../../theme';
import { stats } from '../../data';
import img_avatar from '../../assets/1654182881838.jpg';

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <Section id="about" ref={ref}>
      <SectionHeading eyebrow="01 / About" title="About Me" />
      <Grid container spacing={5} alignItems="flex-start">
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              sx={{
                position: 'relative',
                borderRadius: '20px',
                p: '4px',
                background: `linear-gradient(140deg, ${palette.accent}, ${palette.accentDeep})`,
                boxShadow: `0 20px 50px -24px ${palette.accentGlow}`,
              }}
            >
              <Avatar
                alt="Nikko Dumrique"
                src={img_avatar}
                variant="rounded"
                sx={{
                  width: { xs: 200, md: 240 },
                  height: { xs: 200, md: 240 },
                  borderRadius: '17px',
                }}
              />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={8}>
          <Typography
            sx={{
              color: palette.textSecondary,
              fontSize: { xs: '1rem', md: '1.08rem' },
              lineHeight: 1.85,
            }}
          >
            I'm a backend engineer with a background in physics and data science
            from the{' '}
            <Box component="span" sx={{ color: palette.textPrimary, fontWeight: 600 }}>
              University of British Columbia
            </Box>
            . At{' '}
            <Box component="span" sx={{ color: palette.accent, fontWeight: 600 }}>
              Responsive Ads
            </Box>{' '}
            I design and operate the cloud infrastructure behind a large-scale ad
            platform — from serverless backends and 50TB+ data warehouses to the
            production RAG pipelines that power automated layout generation.
          </Typography>
          <Typography
            sx={{
              color: palette.textSecondary,
              fontSize: { xs: '1rem', md: '1.08rem' },
              lineHeight: 1.85,
              mt: 2.5,
            }}
          >
            I care about systems that are resilient, observable, and
            cost-efficient — the kind that quietly keep working while the product
            scales. Outside of engineering I enjoy skiing, cooking, and
            travelling the world.
          </Typography>

          <Grid container spacing={2} sx={{ mt: 1.5 }}>
            {stats.map((s) => (
              <Grid item xs={6} sm={3} key={s.label}>
                <GlassCard sx={{ p: 2, textAlign: 'center', minWidth: 0 }} hover={false}>
                  <Typography
                    sx={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 600,
                      fontSize: { xs: '1.2rem', md: '1.45rem' },
                      color: palette.accent,
                      wordBreak: 'break-word',
                    }}
                  >
                    {s.value}
                  </Typography>
                  <Typography
                    sx={{ color: palette.textMuted, fontSize: 12.5, mt: 0.5, lineHeight: 1.3 }}
                  >
                    {s.label}
                  </Typography>
                </GlassCard>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Section>
  );
});

export default AboutSection;
