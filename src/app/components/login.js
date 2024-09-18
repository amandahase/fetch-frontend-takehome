'use client';
import { useState } from "react"
import { Card, CardContent, TextField, Button, Typography } from '@mui/material';

export default function Login() {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")

 const handleLoginButton = () => {
   alert(`Login to app yo! ${name}, ${email}`)

   // - We'll want to create a POST to login endpoint ("/auth/login")
   // - In that POST, we'll want to send the name and email values given
   // - We'll also want to try to have some sort of validation, 
   // or at least make sure they've entered both values before submitting
 }

 return (
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
 );
}
