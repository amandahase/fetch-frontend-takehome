'use client';
import { useRouter } from 'next/navigation';

import { IconButton, Button } from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';

import { classes, StyledNav } from "./navStyles";

const axios = require('axios');

export default function Nav(props) {
  const router = useRouter();

  const handleLogout = () => {
    axios.post('https://frontend-take-home-service.fetch.com/auth/logout', { withCredentials: true })
    .then((response) => {
      console.log(response); // TODO: Remove/replace this
    })
    .catch((error) => {
      console.log(error); // TODO: Remove/replace this
    });
  };

  return (
    <StyledNav className={classes.nav}>
      <PetsIcon className={classes.icon} />
      <div>
        {!props.foundDogMatch &&
          <Button
            variant="contained"
            onClick={props.handleDogMatching}
            className={classes.button}
            disabled={!props.favoriteDogsList.length}
          >
            Find My Dog Match
          </Button>
        }
        <IconButton
          className={classes.iconButton}
          aria-label="logout"
          onClick={() => {
            handleLogout()
            router.push('/')
          }}
        >
          <LogoutIcon />
        </IconButton>
      </div>
    </StyledNav>
  );
};