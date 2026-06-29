import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import { Section, SectionHeading, GlassCard } from '../ui/primitives';
import { palette } from '../../theme';
import { RESUME_URL } from '../../data';

const links = [
  {
    icon: <EmailIcon fontSize="large" />,
    title: 'Email',
    subtitle: 'dumriquenikko@gmail.com',
    href: 'mailto:dumriquenikko@gmail.com',
  },
  {
    icon: <LinkedInIcon fontSize="large" />,
    title: 'LinkedIn',
    subtitle: 'in/nikkodumrique',
    href: 'https://www.linkedin.com/in/nikkodumrique/',
  },
  {
    icon: <GitHubIcon fontSize="large" />,
    title: 'GitHub',
    subtitle: '@nkoda',
    href: 'https://github.com/nkoda',
  },
  {
    icon: <DescriptionOutlinedIcon fontSize="large" />,
    title: 'Resume',
    subtitle: 'View / download',
    href: RESUME_URL,
  },
];

const ContactSection = React.forwardRef((props, ref) => {
  return (
    <Section id="contact" ref={ref} sx={{ pb: { xs: 10, md: 14 } }}>
      <SectionHeading eyebrow="05 / Contact" title="Get In Touch" align="center" />
      <Typography
        sx={{
          color: palette.textSecondary,
          textAlign: 'center',
          maxWidth: 560,
          mx: 'auto',
          mb: 5,
          fontSize: { xs: '1rem', md: '1.08rem' },
          lineHeight: 1.7,
        }}
      >
        I'm always open to discussing backend infrastructure, AI systems, or new
        opportunities. Feel free to reach out — my inbox is always open.
      </Typography>
      <Grid container spacing={2.5} justifyContent="center">
        {links.map((l) => (
          <Grid item xs={6} sm={3} key={l.title}>
            <Link href={l.href} target="_blank" rel="noopener" underline="none">
              <GlassCard
                sx={{
                  p: 3,
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box sx={{ color: palette.accent }}>{l.icon}</Box>
                <Typography sx={{ color: palette.textPrimary, fontWeight: 600 }}>
                  {l.title}
                </Typography>
                <Typography
                  className="mono"
                  sx={{ color: palette.textMuted, fontSize: 12, wordBreak: 'break-all' }}
                >
                  {l.subtitle}
                </Typography>
              </GlassCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default ContactSection;
