'use client';
import styles from "../page.module.css";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@mui/material';

export default function DogCard(props) {
  return (
    <Card>
      <CardMedia
        title={`${props.dog.name}, ${props.dog.age} year old ${props.dog.breed}`}
      />
      <CardContent>
        <Typography>Name: {props.dog.name}</Typography>
        <Typography>Breed: {props.dog.breed}</Typography>
        <Typography>Age: {props.dog.age}</Typography>
        <Typography>Location (Zip Code): {props.dog.zip_code}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => props.handleFavoriteClick(props.dog)}>
          {props.displayFavoriteIcons(props.dog)}
        </IconButton>
      </CardActions>
    </Card>
  );
}
