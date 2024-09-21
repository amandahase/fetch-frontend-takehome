'use client';
import { useState } from "react";
import { useRouter } from 'next/navigation';

import { TextField, Button } from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';

import { classes, Root } from "./pageStyles";

const axios = require('axios');

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();
 
  const handleLoginButton = () => {
    const requestBody = {
      name: name,
      email: email
    };

    axios.post('https://frontend-take-home-service.fetch.com/auth/login', requestBody, { withCredentials: true })
    .then((response) => {
      console.log(response); // TODO: Remove/replace this
    })
    .catch((error) => {
      console.log(error); // TODO: Remove/replace this
    });
  };

  return (
    <Root className={classes.pageContainer}>
      <main className={classes.main}>
        <section className={classes.card}>
          <PetsIcon className={classes.icon} />
          <TextField
            variant="outlined"
            label="Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            variant="outlined"
            label="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <Button 
            variant="contained"
            onClick={() => {
              handleLoginButton()
              router.push('/search')
            }}
            className={classes.button}
          >
            Login
          </Button>
        </section>
      </main>
    </Root>
  );
};
