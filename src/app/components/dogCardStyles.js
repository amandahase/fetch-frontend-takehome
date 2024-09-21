import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';

export const PREFIX = "DogCard";
export const classes = {
  cardText: `${PREFIX}-cardText`,
  icon: `${PREFIX}-icon`,
};

export const StyledCard = styled(Card)(({ theme }) => ({
  [`&.${classes.nav}`]: {

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
