import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const PREFIX = "DogCard";
export const classes = {
  image: `${PREFIX}-image`,
  cardText: `${PREFIX}-cardText`,
  icon: `${PREFIX}-icon`,
};

export const StyledCard = styled(Card)(({ theme }) => ({
  [`& .${classes.image}`]: {
    height: "250px",
    [theme.breakpoints.up('laptop')]: {
      height: "350px"
    }
  },
  [`& .${classes.cardText}`]: {
    color: theme.palette.card.text
  },
  [`& .${classes.icon}`]: {
    "& svg": {
      fill: theme.palette.card.icon
    }
  },
}));
