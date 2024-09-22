import { styled } from '@mui/material/styles';

export const PREFIX = "SearchPage";
export const classes = {
  main: `${PREFIX}-main`,
  filterSection: `${PREFIX}-filterSection`,
  filterSectionWrap: `${PREFIX}-filterSectionWrap`,
  filterSelect: `${PREFIX}-filterSelect`,
  sortSelectWrap: `${PREFIX}-sortSelectWrap`,
  sortSelect: `${PREFIX}-sortSelect`,
  filterButtonWrap: `${PREFIX}-filterButtonWrap`,
  filterButton: `${PREFIX}-filterButton`,
  pagination: `${PREFIX}-pagination`,
  matchSection: `${PREFIX}-matchSection`,
  backButton: `${PREFIX}-backButton`,
  matchHeading: `${PREFIX}-matchHeading`,
};

export const StyledMain = styled("main")(({ theme }) => ({
  [`&.${classes.main}`]: {
    width: "90%",
    margin: "40px auto",
    [theme.breakpoints.up('largeDesktop')]: {
      maxWidth: 1440,
    },
  },
  [`& .${classes.filterSection}`]: {
    marginBottom: 30,
  },
  [`& .${classes.filterSectionWrap}`]: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('laptop')]: {
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "center",
    },
  },
  [`& .${classes.filterSelect}`]: {
    width: "100%",
    marginBottom: 25,
    [theme.breakpoints.up('laptop')]: {
      width: "50%",
    },
  },
  [`& .${classes.sortSelectWrap}`]: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    [theme.breakpoints.up('tablet')]: {
      justifyContent: "flex-start",
    },
  },
  [`& .${classes.sortSelect}`]: {
    flexGrow: 1,
    marginRight: 20,
    [theme.breakpoints.up('tablet')]: {
      width: "25%",
      flexGrow: "unset",
    },
  },
  [`& .${classes.filterButtonWrap}`]: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
    [theme.breakpoints.up('laptop')]: {
      justifyContent: "flex-end",
    },
  },
  [`& .${classes.filterButton}`]: {
    width: "48%",
    [theme.breakpoints.up('laptop')]: {
      width: "auto",
      "&:first-of-type": {
        margin: "0 20px",
      },
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
  [`& .${classes.backButton}`]: {
    marginBottom: 40,
  },
  [`& .${classes.matchHeading}`]: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    [theme.breakpoints.up('tablet')]: {
      fontSize: 32,
      marginBottom: 30,
    },
  },
}));
