import { styled } from '@mui/material/styles';

export const PREFIX = "MainPage";
export const classes = {
  pageContainer: `${PREFIX}-pageContainer`,
  main: `${PREFIX}-main`,
  card: `${PREFIX}-card`,
  cardContent: `${PREFIX}-cardContent`,
  icon: `${PREFIX}-icon`
};

export const Root = styled("div")(({ theme }) => ({
  [`&.${classes.pageContainer}`]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100svh",
    backgroundColor: theme.palette.background.default
  },
  [`& .${classes.main}`]: {
    width: "90%",
    maxWidth: "500px"
  },
  [`& .${classes.card}`]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  [`& .${classes.icon}`]: {
    fontSize: 100,
    width: "auto",
    fill: theme.palette.card.icon,
    marginBottom: 40
  },
  [`& .${classes.button}`]: {
    fontSize: 16,
    maxWidth: "150px",
    
  },
}));
