import styles from "../page.module.css";

import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography
} from '@mui/material';

import FavoriteIcon from '@mui/icons-material/Favorite';

export default function Match() {
  const dogMatch = {
    id: "2222",
    img: "",
    name: "Larry",
    age: 4,
    zip_code: "43211",
    breed: "Golden Retriever",
  };

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Typography>Your Dog Match is...</Typography>
        <Card>
          <CardMedia
            title={`${dogMatch.name}, ${dogMatch.age} year old ${dogMatch.breed}`}
          />
          <CardContent>
            <Typography>Name: {dogMatch.name}</Typography>
            <Typography>Breed: {dogMatch.breed}</Typography>
            <Typography>Age: {dogMatch.age}</Typography>
            <Typography>Location (Zip Code): {dogMatch.zip_code}</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        </Card>
      </main>
    </div>
  );
}
