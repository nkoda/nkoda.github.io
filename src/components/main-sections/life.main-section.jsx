import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Section, SectionHeading, GlassCard } from '../ui/primitives';
import { palette } from '../../theme';

const base = process.env.PUBLIC_URL || '';

const items = [
  {
    img: 'salmon.png',
    kicker: '05:00',
    title: 'Salmon at dawn',
    blurb:
      "Come August I'm up before sunrise chasing salmon on the river — switching between my baitcaster and fly rod depending on the water.",
  },
  {
    img: 'boat.png',
    kicker: 'Built by hand',
    title: 'Port Moody → Bowen',
    blurb:
      'I built an aluminum boat from scratch and ran it out from Port Moody to Bowen Island.',
  },
  {
    img: 'snowboard.png',
    kicker: 'Revelstoke',
    title: 'Chasing black runs',
    blurb:
      'Winters belong to the mountains — skiing and snowboarding, currently tackling the black runs at Revelstoke.',
  },
  {
    img: 'gymnastics.png',
    kicker: 'Started at 27',
    title: 'Learning baranis',
    blurb:
      "I picked up gymnastics as an adult and I'm still at it — right now I'm working on landing baranis.",
  },
  {
    img: 'travel.png',
    kicker: '23 / 195',
    title: '23 countries, and counting',
    blurb:
      "I've travelled to 23 countries so far — and the map keeps filling in.",
    wide: true,
  },
];

const HobbyImage = ({ src, alt }) => {
  const [errored, setErrored] = useState(false);
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: '3 / 2',
        background:
          'linear-gradient(135deg, #2A1F22 0%, #1B1316 100%)',
        borderBottom: `1px solid ${palette.border}`,
        overflow: 'hidden',
      }}
    >
      {!errored ? (
        <Box
          component="img"
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setErrored(true)}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      ) : (
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 1,
            color: palette.textMuted,
          }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '10px',
              border: `1px dashed ${palette.borderStrong}`,
            }}
          />
          <Typography className="mono" sx={{ fontSize: 11, letterSpacing: '0.1em' }}>
            image coming soon
          </Typography>
        </Box>
      )}
    </Box>
  );
};

const LifeSection = React.forwardRef((props, ref) => {
  return (
    <Section id="life" ref={ref}>
      <SectionHeading eyebrow="05 / Outside Work" title="Off the Clock" />
      <Typography
        sx={{
          color: palette.textSecondary,
          fontSize: { xs: '1rem', md: '1.08rem' },
          lineHeight: 1.8,
          maxWidth: 640,
          mb: { xs: 4, md: 5 },
          fontWeight: 300,
        }}
      >
        When I'm not building systems, I'm usually outside — on the water, in the
        mountains, or chasing something new.
      </Typography>

      <Grid container spacing={2.5}>
        {items.map((item) => (
          <Grid item xs={12} sm={item.wide ? 12 : 6} md={item.wide ? 12 : 4} key={item.title}>
            <GlassCard sx={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
              <HobbyImage src={`${base}/about/${item.img}`} alt={item.title} />
              <Box sx={{ p: { xs: 2.5, md: 3 } }}>
                <Typography
                  className="mono"
                  sx={{
                    color: palette.accent,
                    fontSize: 12,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    mb: 1,
                  }}
                >
                  {item.kicker}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{ color: palette.textPrimary, fontSize: '1.3rem', mb: 1 }}
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    color: palette.textSecondary,
                    fontSize: 14.5,
                    lineHeight: 1.65,
                    fontWeight: 300,
                  }}
                >
                  {item.blurb}
                </Typography>
              </Box>
            </GlassCard>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
});

export default LifeSection;
