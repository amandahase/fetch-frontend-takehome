import { styled } from '@mui/material/styles';

export const PREFIX = "NavMenu";
export const classes = {
  nav: `${PREFIX}-nav`,
  iconButton: `${PREFIX}-iconButton`,
  icon: `${PREFIX}-icon`,
  button: `${PREFIX}-button`,
};

export const StyledNav = styled("nav")(({ theme }) => ({
  [`&.${classes.nav}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    height: "70px",
    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("largeDesktop")]: {
      maxWidth: 1440,
      margin: "auto",
      padding: "20px 0",
    },
  },
  [`& .${classes.button}`]: {
    marginRight: 10,
    "&.Mui-disabled": {
      backgroundColor: "rgba(248, 249, 250, 0.26)" // Muted POWDER from theme
    }
  },
  [`& .${classes.iconButton}`]: {
    color: theme.palette.card.icon,
  },
  [`& .${classes.icon}`]: {
    color: theme.palette.card.icon,
  },
}));
