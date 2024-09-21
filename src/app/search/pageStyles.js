import { styled } from '@mui/material/styles';

export const PREFIX = "SearchPage";
export const classes = {
  main: `${PREFIX}-main`,
  filterSection: `${PREFIX}-filterSection`,
  filterButtonWrap: `${PREFIX}-filterButtonWrap`,
  filterButton: `${PREFIX}-filterButton`,
  pagination: `${PREFIX}-pagination`,
};

export const StyledMain = styled("main")(({ theme }) => ({
  [`&.${classes.main}`]: {
    width: "90%",
    margin: "40px auto"
  },
  [`& .${classes.filterSection}`]: {
    marginBottom: 30
  },
  [`& .${classes.filterButtonWrap}`]: {
    display: "flex",
    justifyContent: "space-between"
  },
  [`& .${classes.filterButton}`]: {
    width: "48%"
  },
  [`& .${classes.pagination}`]: {
    display: "flex",
    justifyContent: "center",
    marginTop: 40
  },
}));
