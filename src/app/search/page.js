'use client';
import styles from "../page.module.css";
import { useState, useEffect } from "react"
import DogCard from "../components/dogCard"

import Grid from '@mui/material/Grid2';
import {
  FormControl,
  InputLabel,
  Select,
  Chip,
  Box,
  MenuItem,
  OutlinedInput,
  Button,
  Pagination
} from '@mui/material';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const axios = require('axios');

export default function Search() {
  const [dogsList, setDogsList] = useState([]);
  const [dogBreeds, setDogBreeds] = useState([]);
  const [dogBreedFilter, setDogBreedFilter] = useState([]);
  const [favoriteDogsList, setFavoriteDogsList] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getDogBreeds()
  }, [])

  const handleGetDogsList = async () => {
    const fromValue = page * 25;
    let resultDogIds
    const params = {
      breeds: dogBreedFilter,
      from: fromValue
    }

    await axios.get('https://frontend-take-home-service.fetch.com/dogs/search', { params: params, withCredentials: true, })
    .then((response) => {
      resultDogIds = response.data.resultIds
      if (pageCount === 0) {
        setPageCount(Math.ceil(response.data.total/25))
      }
    })
    .catch((error) => {
      console.log(error); // TODO: Remove/replace this
    });

    await axios.post('https://frontend-take-home-service.fetch.com/dogs', resultDogIds , { withCredentials: true })
    .then((response) => {
      setDogsList(response.data)
    })
    .catch((error) => {
      console.log(error); // TODO: Remove/replace this
    });
  }

  const getDogBreeds = () => {
    axios.get('https://frontend-take-home-service.fetch.com/dogs/breeds', { withCredentials: true })
    .then((response) => {
      setDogBreeds(response.data)
    })
    .catch((error) => {
      console.log(error); // TODO: Remove/replace this
    });
  }

  const handleChangeDogBreedFilter = (event) => {
    const {
      target: { value },
    } = event;
    setDogBreedFilter (
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleRemoveFilters = () => {
    setDogsList([])
    setDogBreedFilter([])
  }

  const handleDogMatching = () => {
    if (!favoriteDogsList.length) {
      alert("You don't have any favorite dogs yet!")
    } else {
      alert("We're gonna find your match, yay!")
    }
  }

  const handleFavoriteClick = (dog) => {
    if (!favoriteDogsList.includes(dog.id)) {
      setFavoriteDogsList(oldArray => [...oldArray, dog.id])
    } else {
      setFavoriteDogsList(oldArray => oldArray.filter((d) => d !== dog.id))
    }
  }

  const displayFavoriteIcons = (dog) => {
    if (favoriteDogsList.includes(dog.id)) {
      return <FavoriteIcon />
    } else {
      return <FavoriteBorderIcon />
    }
  }

  const handlePageChange = (event, value) => {
    setPage(value)
    handleGetDogsList()
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
                {dogBreeds?.map((breed) => (
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
              onClick={handleGetDogsList}
            >
              Search Dogs
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
          {dogsList.length ? 
            dogsList?.map((dog) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={dog.id}>
                <DogCard
                  dog={dog}
                  handleFavoriteClick={handleFavoriteClick}
                  displayFavoriteIcons={displayFavoriteIcons}
                />
              </Grid>
            ))
          :
            "No search results"
          }
        </Grid>
        <Pagination count={pageCount} page={page} onChange={handlePageChange} color="primary" />
      </main>
    </div>
  );
}
