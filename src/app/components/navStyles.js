import { styled } from '@mui/material/styles';

export const PREFIX = "NavMenu";
export const classes = {
  nav: `${PREFIX}-nav`,
  iconButton: `${PREFIX}-iconButton`,
  icon: `${PREFIX}-icon`
};

export const StyledNav = styled("nav")(({ theme }) => ({
  [`&.${classes.nav}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    height: "50px"
  },
  [`& .${classes.iconButton}`]: {
    color: theme.palette.text.secondary
  },
  [`& .${classes.icon}`]: {
    color: theme.palette.text.secondary
  },
}));
