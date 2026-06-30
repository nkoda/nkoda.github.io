import React from 'react';
import Box from '@mui/material/Box';
import { palette } from '../../theme';

// Serif "ND" monogram tile — matches the favicon (concept 01). Reused in the
// sidebar and the mobile top bar so the brand mark is consistent everywhere.
const Monogram = ({ size = 44 }) => (
  <Box
    aria-label="Nikko Dumrique"
    sx={{
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: `${size * 0.23}px`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      fontWeight: 600,
      fontSize: size * 0.52,
      lineHeight: 1,
      letterSpacing: '-0.04em',
      color: palette.accentContrast,
      background: `linear-gradient(140deg, #E0A985 0%, ${palette.accent} 50%, #8E5232 100%)`,
      boxShadow: `0 8px 22px -8px ${palette.accentGlow}`,
    }}
  >
    ND
  </Box>
);

export default Monogram;
