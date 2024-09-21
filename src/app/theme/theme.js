'use client';
import { createTheme } from '@mui/material/styles';

// Color HEX Codes
const SKY = "#bfd7ea";
const CORAL = "#fa7268";
const POWDER = "#f8f9fa";
const NIGHT = "#0a2e4e";

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    background: {
      default: NIGHT,
    },
    primary: {
      main: CORAL,
    },
    text: {
      primary: POWDER,
      secondary: SKY,
    },
    card: {
      background: NIGHT,
      icon: CORAL,
      text: NIGHT,
    },
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
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: POWDER,
          color: NIGHT,
        },
        text: {
          background: "none",
          color: POWDER,
        },
        outlined: {
          background: "none",
          color: POWDER,
          border: `1px solid ${POWDER}`,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: POWDER,
          color: NIGHT,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          backgroundColor: NIGHT,
          color: POWDER,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          fill: CORAL,
        },
      },
    },
  },
});

export default theme;
