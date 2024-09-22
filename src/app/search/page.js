'use client';
import { useState, useEffect } from "react";
import DogCard from "../components/dogCard";
import Nav from "../components/nav";
import { StyledMain, classes } from "./pageStyles";

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
  Typography,
  IconButton,
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
  const [foundDogMatch, setFoundDogMatch] = useState(false);
  const [sort, setSort] = useState("breed:asc");
  const [isChangingPage, setIsChangingPage] = useState(false);
  const [isSorting, setIsSorting] = useState(false);

  useEffect(() => {
    getDogBreeds();
    handleGetDogsList();
  }, []);

  useEffect(() => {
    if (isChangingPage || isSorting) {
      handleGetDogsList();
      setIsChangingPage(false);
      setIsSorting(false);
    }
  }, [isChangingPage, isSorting]);

  const handleGetDogsList = async () => {
    const fromValue = page * 25;
    let resultDogIds;
    const params = {
      breeds: dogBreedFilter,
      from: fromValue,
      sort: sort,
    };

    await axios.get('https://frontend-take-home-service.fetch.com/dogs/search', { params: params, withCredentials: true, })
    .then((response) => {
      resultDogIds = response.data.resultIds;
      if (pageCount === 0) {
        setPageCount(Math.ceil(response.data.total/25));
      }
    })
    .catch((error) => {
      console.log(error);
    });

    await axios.post('https://frontend-take-home-service.fetch.com/dogs', resultDogIds , { withCredentials: true })
    .then((response) => {
      setDogsList(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const getDogBreeds = () => {
    axios.get('https://frontend-take-home-service.fetch.com/dogs/breeds', { withCredentials: true })
    .then((response) => {
      setDogBreeds(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  const handleChangeDogBreedFilter = (event) => {
    const {
      target: { value },
    } = event;
    setDogBreedFilter (
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleDogMatching = async () => {
    let dogMatchId;
    if (!favoriteDogsList.length) {
      alert("You don't have any favorite dogs yet!");
    } else {
      await axios.post('https://frontend-take-home-service.fetch.com/dogs/match', favoriteDogsList, { withCredentials: true })
      .then((response) => {
        dogMatchId = [response.data.match];
      })
      .catch((error) => {
        console.log(error);
      });

      await axios.post('https://frontend-take-home-service.fetch.com/dogs', dogMatchId , { withCredentials: true })
      .then((response) => {
        setFoundDogMatch(true);
        setDogsList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }
  };

  const handleFavoriteClick = (dog) => {
    if (!favoriteDogsList.includes(dog.id)) {
      setFavoriteDogsList(oldArray => [...oldArray, dog.id]);
    } else {
      setFavoriteDogsList(oldArray => oldArray.filter((d) => d !== dog.id));
    }
  };

  const displayFavoriteIcons = (dog) => {
    if (!foundDogMatch) {
      if (favoriteDogsList.includes(dog.id)) {
        return (
          <IconButton
            className={classes.iconButton}
            onClick={() => handleFavoriteClick(dog)}
            aria-label={`Remove ${dog.name}, ${dog.age} year old ${dog.breed} from your favorite list`}
          >
            <FavoriteIcon />
          </IconButton>
        )
      } else {
        return (
          <IconButton
            className={classes.iconButton}
            onClick={() => handleFavoriteClick(dog)}
            aria-label={`Add ${dog.name}, ${dog.age} year old ${dog.breed} to your favorite list`}
          >
            <FavoriteBorderIcon />
          </IconButton>
        )
      }
    } else {
      return <FavoriteIcon className={classes.icon} />
    }
  };

  const handlePageChange = (event, value) => {
    setPage(value);
    setIsChangingPage(true);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
    setIsSorting(true);
  };

  return (
    <div>
      <Nav 
        handleDogMatching={handleDogMatching}
        foundDogMatch={foundDogMatch}
        favoriteDogsList={favoriteDogsList}
      />
      <StyledMain className={classes.main}>
        {foundDogMatch ? 
          <div className={classes.matchSection}>
            <Typography
              variant="h1"
              className={classes.matchHeading}
            >
              Your dog match is...
            </Typography>
            {dogsList?.map((dog) => (
              <Grid size={{ mobile: 12, tablet: 6, laptop: 4 }} key={dog.id}>
                <DogCard
                  dog={dog}
                  // handleFavoriteClick={handleFavoriteClick}
                  displayFavoriteIcons={displayFavoriteIcons}
                />
              </Grid>
            ))}
          </div>
        :
          <div>
            <div className={classes.filterSection}>
              <div className={classes.filterSectionWrap}>
                <FormControl className={classes.filterSelect}>
                  <InputLabel id="filter-by-breed-label">Filter By Breed</InputLabel>
                  <Select
                    labelId="filter-by-breed-label"
                    id="filter-by-breed"
                    multiple
                    value={dogBreedFilter}
                    onChange={handleChangeDogBreedFilter}
                    input={<OutlinedInput id="filter-by-breed" label="Filter By Breed" />}
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
                </div>
              </div>
              <div className={classes.sortSelectWrap}>
                <FormControl className={classes.sortSelect}>
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
            </div>
            <Grid container spacing={3}>
              {dogsList.length ? 
                dogsList?.map((dog) => (
                  <Grid size={{ mobile: 12, tablet: 6, laptop: 4 }} key={dog.id}>
                    <DogCard
                      dog={dog}
                      // handleFavoriteClick={handleFavoriteClick}
                      displayFavoriteIcons={displayFavoriteIcons}
                    />
                  </Grid>
                ))
              :
                <Typography>No search results</Typography>
              }
            </Grid>
            <Pagination
              count={pageCount}
              page={page}
              onChange={handlePageChange}
              color="primary"
              className={classes.pagination}
            />
          </div>
        }
      </StyledMain>
    </div>
  );
};
