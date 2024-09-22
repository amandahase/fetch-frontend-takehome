'use client';
import { StyledCard, classes } from "./dogCardStyles";

import {
  CardMedia,
  CardContent,
  CardActions,
  Typography,
} from '@mui/material';

export default function DogCard(props) {
  return (
    <StyledCard>
      <CardMedia
        image={props.dog.img}
        title={`${props.dog.name}, ${props.dog.age} year old ${props.dog.breed}`}
        className={classes.image}
      />
      <CardContent>
        <Typography className={classes.cardText}>
          <strong>Name:</strong> {props.dog.name}
        </Typography>
        <Typography className={classes.cardText}>
          <strong>Breed:</strong> {props.dog.breed}
        </Typography>
        <Typography className={classes.cardText}>
          <strong>Age:</strong> {props.dog.age}
        </Typography>
        <Typography className={classes.cardText}>
          <strong>Location (Zip Code):</strong> {props.dog.zip_code}
        </Typography>
      </CardContent>
      <CardActions>
        {props.displayFavoriteIcons(props.dog)}
      </CardActions>
    </StyledCard>
  );
};
