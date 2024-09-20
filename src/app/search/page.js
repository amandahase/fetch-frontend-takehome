'use client';
import styles from "../page.module.css";
import { useState } from "react"

import Grid from '@mui/material/Grid2';
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  FormControl,
  InputLabel,
  Select,
  Chip,
  Box,
  MenuItem,
  OutlinedInput,
  Button
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';

const dogs = [
  {
    id: "1111",
    img: "",
    name: "Daisy",
    age: 2,
    zip_code: "12345",
    breed: "Chocolate Lab",
  },
  {
    id: "2222",
    img: "",
    name: "Larry",
    age: 4,
    zip_code: "43211",
    breed: "Golden Retriever",
  },
  {
    id: "3333",
    img: "",
    name: "Luke",
    age: 1,
    zip_code: "98765",
    breed: "Husky",
  },
  {
    id: "4444",
    img: "",
    name: "Freya",
    age: 6,
    zip_code: "76585",
    breed: "Australian Shephard",
  },
  {
    id: "5555",
    img: "",
    name: "Callie",
    age: 2,
    zip_code: "76854",
    breed: "Border Collie",
  },
  {
    id: "6666",
    img: "",
    name: "Snickers",
    age: 4,
    zip_code: "34567",
    breed: "Pitbull",
  },
]

const dogBreeds = ["Pitbull", "Border Collie", "Australian Shephard", "Husky", "Golden Retriever", "Chocolate Lab"]

export default function Search() {
  const [dogsList, setdogsList] = useState(dogs)
  const [dogBreedFilter, setDogBreedFilter] = useState([]);
  const [favoriteDogsList, setFavoriteDogsList] = useState([]);

  const handleChangeDogBreedFilter = (event) => {
    const {
      target: { value },
    } = event;
    setDogBreedFilter (
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleFilterList = () => {
    const filteredDogList = dogsList.filter((dog) => dogBreedFilter.includes(dog.breed))

    setdogsList(filteredDogList)
  }

  const handleRemoveFilters = () => {
    setdogsList(dogs)
    setDogBreedFilter([])
  }

  const handleDogMatching = () => {
    if (!favoriteDogsList.length) {
      alert("You don't have any favorite dogs yet!")
    } else {
      alert("We're gonna find your match, yay!")
    }
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.pageOptions}>
          <div className={styles.filterWrap}>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-chip-label">Filter By Breed</InputLabel>
              <Select
                labelId="demo-multiple-chip-label"
                id="demo-multiple-chip"
                multiple
                value={dogBreedFilter}
                onChange={handleChangeDogBreedFilter}
                input={<OutlinedInput id="select-multiple-chip" label="Filter By Breed" />}
                renderValue={(selected) => (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                className={styles.filterField}
              >
                {dogBreeds.map((breed) => (
                  <MenuItem
                    key={breed}
                    value={breed}
                  >
                    {breed}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              onClick={handleFilterList}
            >
              Filter List
            </Button>
            <Button
              variant="text"
              onClick={handleRemoveFilters}
            >
              Remove Filters
            </Button>
          </div>
          <Button
            variant="outlined"
            onClick={handleDogMatching}
          >
            Find My Dog Match
          </Button>
        </div>
        <Grid container spacing={3}>
          {dogsList.map((dog) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dog.id}>
              <Card>
                <CardMedia
                  title={`${dog.name}, ${dog.age} year old ${dog.breed}`}
                />
                <CardContent>
                  <Typography>Name: {dog.name}</Typography>
                  <Typography>Breed: {dog.breed}</Typography>
                  <Typography>Age: {dog.age}</Typography>
                  <Typography>Location (Zip Code): {dog.zip_code}</Typography>
                </CardContent>
                <CardActions>
                  <IconButton>
                    <FavoriteBorderIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
}
