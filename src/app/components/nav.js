'use client';

import {
  IconButton,
  Button
} from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';

import { classes, StyledNav } from "./navStyles"

export default function Nav(props) {
  return (
    <StyledNav className={classes.nav}>
      <PetsIcon className={classes.icon} />
      <div>
        <Button
          variant="contained"
          onClick={props.handleDogMatching}
          className={classes.button}
        >
          Find My Dog Match
        </Button>
        <IconButton className={classes.iconButton} aria-label="logout">
          <LogoutIcon />
        </IconButton>
      </div>
    </StyledNav>
  );
}
