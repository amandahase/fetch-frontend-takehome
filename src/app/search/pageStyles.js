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
    margin: "40px auto"
  },
  [`& .${classes.filterSection}`]: {
    marginBottom: 30
  },
  [`& .${classes.filterSectionWrap}`]: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up('laptop')]: {
      justifyContent: "flex-start",
      flexDirection: "row",
      alignItems: "center"
    }
  },
  [`& .${classes.filterSelect}`]: {
    width: "100%",
    margin: 0,
    [theme.breakpoints.up('laptop')]: {
      width: "50%"
    }
  },
  [`& .${classes.sortSelectWrap}`]: {
    display: "flex",
    [theme.breakpoints.up('laptop')]: {
      justifyContent: "flex-end"
    }
  },
  [`& .${classes.sortSelect}`]: {
    width: "100%",
    [theme.breakpoints.up('laptop')]: {
      width: "33%",
    },
    [theme.breakpoints.up('desktop')]: {
      width: "20%",
    }
  },
  [`& .${classes.filterButtonWrap}`]: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 30,
    [theme.breakpoints.up('laptop')]: {
      justifyContent: "flex-end"
    }
  },
  [`& .${classes.filterButton}`]: {
    width: "48%",
    [theme.breakpoints.up('laptop')]: {
      width: "auto",
      "&:first-of-type": {
        margin: "0 20px"
      }
    }
  },
  [`& .${classes.pagination}`]: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40
  },
  [`& .${classes.matchSection}`]: {
    width: "90%",
    maxWidth: 600,
    margin: "auto"
  },
  [`& .${classes.backButton}`]: {
    marginBottom: 40
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
