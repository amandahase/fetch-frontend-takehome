'use client';
import { createTheme } from '@mui/material/styles';

// Color HEX Codes
const MIDNIGHT = "#001d44";
const POLAR = "#f4f9fd";
const FRENCH_BLUE = "#bee4ff";
const PIPPIN = "#ffdfdf";
const DEW_DROP = "#e4f7ff";
const COBALT = "#0047aa";

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    background: {
      default: MIDNIGHT,
    },
    text: {
      primary: DEW_DROP,
      secondary: FRENCH_BLUE,
      disabled: POLAR,
    },
    card: {
      border: COBALT,
      heart: PIPPIN,
    }
  },
});

export default theme;
