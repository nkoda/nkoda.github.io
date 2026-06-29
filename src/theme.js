import { createTheme } from '@mui/material/styles';

// Centralized palette — modern dark navy/charcoal with the resume's green accent.
export const palette = {
  bg: '#080c11',
  bgElevated: '#0d141b',
  surface: 'rgba(20, 30, 38, 0.55)',
  surfaceSolid: '#111a22',
  border: 'rgba(126, 207, 178, 0.14)',
  borderStrong: 'rgba(126, 207, 178, 0.28)',
  textPrimary: '#e9eff3',
  textSecondary: '#9aabb6',
  textMuted: '#67767f',
  accent: '#34d399', // emerald — brighter than the deep brand green for dark backgrounds
  accentSoft: '#7ad9b6',
  accentDeep: '#185e44', // resume brand accent RGB(24,94,68)
  accentGlow: 'rgba(52, 211, 153, 0.35)',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: palette.accent },
    background: { default: palette.bg, paper: palette.surfaceSolid },
    text: { primary: palette.textPrimary, secondary: palette.textSecondary },
  },
  typography: {
    fontFamily: "'Inter', 'Helvetica Neue', Arial, sans-serif",
    h1: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 700 },
    h2: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 700 },
    h3: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 700 },
    h4: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 600 },
    h5: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 600 },
    h6: { fontFamily: "'Space Grotesk', 'Inter', sans-serif", fontWeight: 600 },
  },
  shape: { borderRadius: 14 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: palette.bg },
      },
    },
  },
});

export default theme;
