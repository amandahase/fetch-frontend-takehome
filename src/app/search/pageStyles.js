import { styled } from '@mui/material/styles';

export const PREFIX = "SearchPage";
export const classes = {
  main: `${PREFIX}-main`,
  filterSection: `${PREFIX}-filterSection`,
  filterSectionWrap: `${PREFIX}-filterSectionWrap`,
  filterSelect: `${PREFIX}-filterSelect`,
  filterButtonWrap: `${PREFIX}-filterButtonWrap`,
  filterButton: `${PREFIX}-filterButton`,
  sortSelectWrap: `${PREFIX}-sortSelectWrap`,
  sortSelect: `${PREFIX}-sortSelect`,
  pagination: `${PREFIX}-pagination`,
  matchSection: `${PREFIX}-matchSection`,
  matchHeading: `${PREFIX}-matchHeading`,
  iconButton: `${PREFIX}-iconButton`,
  icon: `${PREFIX}-icon`,
};

export const StyledMain = styled("main")(({ theme }) => ({
  [`&.${classes.main}`]: {
    width: "90%",
    margin: "40px auto",
    [theme.breakpoints.up("largeDesktop")]: {
      maxWidth: 1440,
    },
  },
  [`& .${classes.filterSection}`]: {
    marginBottom: 30,
    [theme.breakpoints.up("desktop")]: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  [`& .${classes.filterSectionWrap}`]: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("tablet")]: {
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "center",
    },
    [theme.breakpoints.up("desktop")]: {
      width: "80%",
    },
  },
  [`& .${classes.filterSelect}`]: {
    width: "100%",
    marginBottom: 25,
    [theme.breakpoints.up("tablet")]: {
      flexGrow: 1,
    },
    [theme.breakpoints.up("desktop")]: {
      marginBottom: 0,
    },
  },
  [`& .${classes.filterButtonWrap}`]: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
    [theme.breakpoints.up("tablet")]: {
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("desktop")]: {
      marginBottom: 0,
    },
  },
  [`& .${classes.filterButton}`]: {
    width: "100%",
    [theme.breakpoints.up("tablet")]: {
      width: 145,
      marginLeft: 20,
    },
    [theme.breakpoints.up("laptop")]: {
      width: 145,
      marginLeft: 20,
    },
  },
  [`& .${classes.sortSelectWrap}`]: {
    width: "100%",
    [theme.breakpoints.up("tablet")]: {
      display: "flex",
      justifyContent: "flex-end",
    },
    [theme.breakpoints.up("desktop")]: {
      width: 170,
    },
  },
  [`& .${classes.sortSelect}`]: {
    width: "100%",
    [theme.breakpoints.up("tablet")]: {
      width: 170,
    },
    [theme.breakpoints.up("desktop")]: {
      width: "100%",
    },
  },
  [`& .${classes.pagination}`]: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40,
  },
  [`& .${classes.matchSection}`]: {
    width: "90%",
    maxWidth: 600,
    margin: "auto",
  },
  [`& .${classes.matchHeading}`]: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    [theme.breakpoints.up("tablet")]: {
      fontSize: 32,
      marginBottom: 30,
    },
  },
  [`& .${classes.iconButton}`]: {
    "& svg": {
      fill: theme.palette.card.icon,
    },
  },
  [`& .${classes.icon}`]: {
    fill: theme.palette.card.icon,
  },
}));
