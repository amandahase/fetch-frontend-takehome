'use client';
import { createTheme } from '@mui/material/styles';

// Color HEX Codes
const CERULEAN = "#0077b6";
const SKY = "#bfd7ea";
const CORAL = "#fa7268";
const PINK = "#f1b7a5";
const POWDER = "#f8f9fa";
const NIGHT = "#0a2e4e";

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    background: {
      default: NIGHT,
    },
    text: {
      primary: POWDER,
      secondary: SKY,
      // disabled: LAVENDER,
    },
    card: {
      background: NIGHT,
      icon: CORAL,
    }
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          marginBottom: 25,
          borderRadius: 10,
        },
        notchedOutline: {
          border: `1px solid ${SKY}`,
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: POWDER,
          color: NIGHT
        },
      }
    },
  },
});

export default theme;
