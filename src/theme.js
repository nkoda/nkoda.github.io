import { createTheme } from '@mui/material/styles';

// Centralized palette — warm charcoal + copper (Elegant Dark direction).
export const palette = {
  bg: '#1C1518',
  bgElevated: '#241A1C',
  surface: 'rgba(42, 31, 33, 0.55)',
  surfaceSolid: '#241A1C',
  border: 'rgba(200, 130, 90, 0.16)',
  borderStrong: 'rgba(200, 130, 90, 0.34)',
  textPrimary: '#ECE0D6',
  textSecondary: '#B6A89E',
  textMuted: '#8C7E73',
  accent: '#C8825A', // copper
  accentSoft: '#D69C84', // warm rose
  accentDeep: '#9A5B38', // deep copper
  accentGold: '#D9B36C', // champagne — used in the lattice highlights
  accentContrast: '#1C1210', // dark espresso text on copper fills
  accentGlow: 'rgba(200, 130, 90, 0.35)',
};

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: palette.accent },
    background: { default: palette.bg, paper: palette.surfaceSolid },
    text: { primary: palette.textPrimary, secondary: palette.textSecondary },
  },
  typography: {
    fontFamily: "'Jost', 'Helvetica Neue', Arial, sans-serif",
    // Display headings in an elegant serif; smaller UI headings stay in Jost for legibility.
    h1: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 },
    h2: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 },
    h3: { fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 },
    h4: { fontFamily: "'Jost', sans-serif", fontWeight: 500 },
    h5: { fontFamily: "'Jost', sans-serif", fontWeight: 500 },
    h6: { fontFamily: "'Jost', sans-serif", fontWeight: 500 },
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
