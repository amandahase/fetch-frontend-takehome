'use client';
import styles from "./page.module.css";
import { useState } from "react"
import { useRouter } from 'next/navigation'

import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

const axios = require('axios');

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const router = useRouter()
 
  const handleLoginButton = async () => {
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
            <Button 
              variant="contained"
              onClick={() => {
                handleLoginButton()
                router.push('/search')
              }}
            >
              Login
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
