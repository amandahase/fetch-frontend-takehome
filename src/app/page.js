'use client';
import styles from "./page.module.css";
import { useState } from "react"
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

export default function Home() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
 
  const handleLoginButton = async () => {
    // alert(`Login to app yo! ${name}, ${email}`)
 
    // - We'll want to create a POST to login endpoint ("/auth/login")
    // - In that POST, we'll want to send the name and email values given
    // - We'll also want to try to have some sort of validation, 
    // or at least make sure they've entered both values before submitting
    const endpointUrl = "https://frontend-take-home-service.fetch.com/auth/login";
    const fetchObject = {
      method: "POST",
      body: JSON.stringify({
        name: name, 
        email: email
      }),
      credentials: "include" // This isn't working because of SameSite error on response cookie...
    }
 
    try {
      const response = await fetch(endpointUrl, fetchObject);

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
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
