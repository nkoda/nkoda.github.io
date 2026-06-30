import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { palette } from '../../theme';

// Full-width section wrapper with consistent vertical rhythm.
export const Section = React.forwardRef(({ id, children, sx = {} }, ref) => (
  <Box
    component="section"
    id={id}
    ref={ref}
    sx={{
      position: 'relative',
      zIndex: 1,
      width: '100%',
      maxWidth: 1180,
      mx: 'auto',
      px: { xs: 3, sm: 5, md: 6 },
      py: { xs: 8, md: 12 },
      scrollMarginTop: '80px',
      ...sx,
    }}
  >
    {children}
  </Box>
));

// Eyebrow + heading pair used at the top of each section.
export const SectionHeading = ({ eyebrow, title, align = 'left' }) => (
  <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: align }}>
    <Typography
      className="mono"
      sx={{
        color: palette.accent,
        fontSize: 13,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        mb: 1.5,
      }}
    >
      {eyebrow}
    </Typography>
    <Typography
      variant="h3"
      sx={{
        color: palette.textPrimary,
        fontSize: { xs: '1.9rem', md: '2.5rem' },
        display: 'inline-block',
        position: 'relative',
        pb: 1.5,
        '&::after': {
          content: '""',
          position: 'absolute',
          left: align === 'center' ? '50%' : 0,
          transform: align === 'center' ? 'translateX(-50%)' : 'none',
          bottom: 0,
          width: 54,
          height: 3,
          borderRadius: 2,
          background: `linear-gradient(90deg, ${palette.accent}, ${palette.accentDeep})`,
        },
      }}
    >
      {title}
    </Typography>
  </Box>
);

// Frosted-glass surface card.
export const GlassCard = ({ children, sx = {}, hover = true }) => (
  <Box
    sx={{
      position: 'relative',
      height: '100%',
      borderRadius: '16px',
      background: palette.surface,
      border: `1px solid ${palette.border}`,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
      ...(hover && {
        '&:hover': {
          transform: 'translateY(-5px)',
          borderColor: palette.borderStrong,
          boxShadow: `0 18px 40px -20px ${palette.accentGlow}`,
        },
      }),
      ...sx,
    }}
  >
    {children}
  </Box>
);

// Small pill tag for skills / tech.
export const Tag = ({ label }) => (
  <Box
    component="span"
    className="mono"
    sx={{
      display: 'inline-block',
      fontSize: 12.5,
      color: palette.accentSoft,
      px: 1.4,
      py: 0.6,
      borderRadius: '8px',
      border: `1px solid ${palette.border}`,
      background: 'rgba(200, 130, 90, 0.07)',
      whiteSpace: 'nowrap',
    }}
  >
    {label}
  </Box>
);
