'use client'
import Image from "next/image";
import getStripe from "@/utils/get-stripe";
import {SignedIn,SignedOut, UserButton} from '@clerk/nextjs'
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid} from "@mui/material";
import Head from 'next/head'
import Link from "next/link"
import { Quicksand } from "next/font/google";
export default function Home() {
  const handleSubmit= async ()=>{
    const checkoutSession= await fetch ('/api/checkout_session',{
      method:'POST',
      headers:{
        origin: "http://local:3000",
      },
    })
    const checkoutSessionJson= await checkoutSession.json()
    if(checkoutSession.statusCode=500){
      console.error(checkoutSession.message)
      return
    }
    const stripe= await getStripe()
    const{error}=await stripe.redirectToCheckout({
      sessionId: checkoutSessionJson.id,
    })
    if(error){
      console.warn(error.message)
    }
  }
  return (
    <Container maxWidth='l00vw'>
      <Head>
        <title>Flashcard SaaS</title>
        <meta name="description" content="create flash from your text"/>
      </Head>
      <AppBar position="static" style={{backgroundColor:"#7c5aa4"}}>
        <Toolbar>
          <Typography variant="h6" style={{flexGrow:1, fontWeight: '700', fontFamily: 'Quicksand'}}>FlashDash</Typography>
          <SignedOut>
            <Button color='inherit' href="/sign-in">Login</Button>
            <Button color='inherit'href="sign-up">Sign Up</Button>
          </SignedOut>
          <SignedIn>
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>
      <Box sx={{textAlign: "center", my:4,}}>
        <Typography variant="h2" gutterBottom sx={{fontWeight: 'bold', fontFamily: 'Quicksand'}}>Welcome to FlashDash</Typography>
        <Typography variant="h5" gutterBottom sx={{fontFamily: 'Quicksand', fontWeight: '500'}}>{' '}The easiest way to make flashcards from your text {" "}</Typography>
        <Button variant="contained" color="primary" href="sign-up" sx={{mt:2, backgroundColor:"#7c5aa4", fontFamily: 'Quicksand'}}>Get Started</Button>
      </Box>
      <Box sx={{my:6, textAlign:"center", fontFamily: 'Quicksand'}}>
        <Typography variant="h4"sx={{fontFamily: 'Quicksand', fontWeight:'600'}}gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6"gutterBottom sx={{fontFamily: 'Quicksand'}}>Easy Text Input</Typography>
            <Typography sx={{fontFamily: 'Quicksand'}}>{' '}Simply input your text and let our software do the rest. Creating flashcards has never been easier.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6"sx={{fontFamily: 'Quicksand'}} gutterBottom>Smart Flashcards</Typography>
            <Typography sx={{fontFamily: 'Quicksand'}}>{' '}Our AI intelligently breaks down your text into concise flashcards perfect for studying.</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6"gutterBottom sx={{fontFamily: 'Quicksand'}}>Acessible Anywhere</Typography>
            <Typography sx={{fontFamily: 'Quicksand'}}>{' '}Access your flashcards from any device, at any time. Study on the go with ease. </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{my:6, textAlign:"center", fontFamily: 'Quicksand'}} >
        <Typography variant="h4"gutterBottom sx={{fontFamily: 'Quicksand', fontWeight:'600'}}>Pricing</Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{p:3,border:'1px solid', borderColor:'grey.300', borderRadius:2, backgroundColor:"#a38bbf"}}>
            <Typography variant="h5" gutterBottom sx={{fontFamily: 'Quicksand'}}>Basic</Typography>
            <Typography variant="h6" sx={{fontFamily: 'Quicksand'}} gutterBottom>$0 / month</Typography>
            <Typography sx={{fontFamily: 'Quicksand'}}>{' '}Access to basic flashcard features and limited storage</Typography>
            <Button variant="contained" color="primary" href="sign-up" sx={{mt:2, backgroundColor:"#7c5aa4", fontFamily: 'Quicksand'}}>Choose Basic</Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{p:3,border:'1px solid', borderColor:'grey.300', borderRadius:2, backgroundColor:"#a38bbf"}}>
            <Typography variant="h5" gutterBottom sx={{fontFamily: 'Quicksand'}}>Pro</Typography>
            <Typography variant="h6" gutterBottom sx={{fontFamily: 'Quicksand'}}>$1 / one time payment</Typography>
            <Typography sx={{fontFamily: 'Quicksand'}}>{' '}Unlimited flashcards and storage, with priority support.</Typography>
            <Button variant="contained" color="primary" sx={{mt:2, backgroundColor:"#7c5aa4", fontFamily: 'Quicksand'}}onClick={handleSubmit}>Choose Pro</Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
