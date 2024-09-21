'use client';
import styles from "./nav.module.css";

import {
  IconButton
} from '@mui/material';

import PetsIcon from '@mui/icons-material/Pets';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <PetsIcon />
      <IconButton>
        <LogoutIcon />
      </IconButton>
    </nav>
  );
}
