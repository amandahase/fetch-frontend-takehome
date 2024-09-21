'use client';
// import styles from "./nav.module.css";

import {
  IconButton
} from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';

import { classes, StyledNav } from "./navStyles"

export default function Nav() {
  return (
    <StyledNav className={classes.nav}>
      <PetsIcon className={classes.icon} />
      <IconButton className={classes.iconButton}>
        <LogoutIcon />
      </IconButton>
    </StyledNav>
  );
}
