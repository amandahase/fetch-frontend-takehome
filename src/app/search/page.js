'use client';
import { useState, useEffect } from "react"
import DogCard from "../components/dogCard"
import Nav from "../components/nav"
import { StyledMain, classes } from "./pageStyles"

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
  Pagination,
  Typography
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
  const [foundDogMatch, setFoundDogMatch] = useState(false)
  const [sort, setSort] = useState("breed:asc")

  useEffect(() => {
    getDogBreeds()
    handleGetDogsList()
  }, [])

  const handleGetDogsList = async () => {
    const fromValue = page * 25;
    let resultDogIds
    const params = {
      breeds: dogBreedFilter,
      from: fromValue,
      sort: sort
    }

    await axios.get('https://frontend-take-home-service.fetch.com/dogs/search', { params: params, withCredentials: true, })
    .then((response) => {
      resultDogIds = response.data.resultIds
      if (pageCount === 0) {
        setPageCount(Math.ceil(response.data.total/25))
      }
      console.log(response)
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
    setPage(1)
    setPageCount(0)
  }

  const handleDogMatching = async () => {
    let dogMatchId
    if (!favoriteDogsList.length) {
      alert("You don't have any favorite dogs yet!")
    } else {
      await axios.post('https://frontend-take-home-service.fetch.com/dogs/match', favoriteDogsList, { withCredentials: true })
      .then((response) => {
        dogMatchId = [response.data.match]
      })
      .catch((error) => {
        console.log(error); // TODO: Remove/replace this
      });

      await axios.post('https://frontend-take-home-service.fetch.com/dogs', dogMatchId , { withCredentials: true })
      .then((response) => {
        setFoundDogMatch(true)
        setDogsList(response.data)
      })
      .catch((error) => {
        console.log(error); // TODO: Remove/replace this
      });
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

  const handleChangeSort = async (event) => {
    setSort(event.target.value)
    await handleGetDogsList() // Works except for when you change the sort value
  }
console.log(sort)
  return (
    <div>
      <Nav 
        handleDogMatching={handleDogMatching}
      />
      <StyledMain className={classes.main}>
        {foundDogMatch ? 
          <div>
            <Typography variant="h1" className={classes.matchHeading}>Your dog match is...</Typography>
            {dogsList?.map((dog) => (
              <Grid size={{ md: 8 }} key={dog.id}>
                <DogCard
                  dog={dog}
                  handleFavoriteClick={handleFavoriteClick}
                  displayFavoriteIcons={displayFavoriteIcons}
                />
              </Grid>
            ))}
          </div>
        :
          <div>
            <div className={classes.filterSection}>
              <FormControl sx={{ m: 1, width: "100%", margin: 0 }}>
                <InputLabel id="filter-by-breed-label">Filter By Breed</InputLabel>
                <Select
                  labelId="filter-by-breed-label"
                  id="filter-by-breed"
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
              <div className={classes.filterButtonWrap}>
                <Button
                  variant="contained"
                  onClick={handleGetDogsList}
                  className={classes.filterButton}
                >
                  Search Dogs
                </Button>
                <Button
                  variant="outlined"
                  onClick={handleRemoveFilters}
                  className={classes.filterButton}
                >
                  Remove Filters
                </Button>
              </div>
              <FormControl fullWidth>
                <InputLabel id="sort-dogs-label">Sort Dogs By Name</InputLabel>
                <Select
                  labelId="sort-dogs-label"
                  id="sort-dogs"
                  value={sort}
                  label="Sort Dogs By Name"
                  onChange={handleChangeSort}
                >
                  <MenuItem value={"name:asc"}>By Name (A-Z)</MenuItem>
                  <MenuItem value={"name:desc"}>By Name (Z-A)</MenuItem>
                  <MenuItem value={"breed:asc"}>By Breed (A-Z)</MenuItem>
                  <MenuItem value={"breed:desc"}>By Breed (Z-A)</MenuItem>
                  <MenuItem value={"age:asc"}>By Age (Asc)</MenuItem>
                  <MenuItem value={"age:desc"}>By Age (Desc)</MenuItem>
                </Select>
              </FormControl>
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
            <Pagination count={pageCount} page={page} onChange={handlePageChange} color="primary" className={classes.pagination} />
          </div>
        }
      </StyledMain>
    </div>
  );
}
