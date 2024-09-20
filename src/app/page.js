'use client';
import styles from "./page.module.css";
import { useState } from "react"

import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

const axios = require('axios');

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
 
  const handleLoginButton = async () => {
    // This is finally getting a good response for the request
    // Now I need to figure out how to redirect the url to the
    // search page (/search) after getting the response back.

    // There might be something in the next.js/react docs for this that
    // I haven't been able to find yet/get to work right.

    const requestBody = {
      name: name,
      email: email
    }

    axios.post('https://frontend-take-home-service.fetch.com/auth/login', requestBody, { withCredentials: true })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Card>
          <CardContent>
            <Typography>Login</Typography>
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
            <Button variant="contained" onClick={handleLoginButton}>Login</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
