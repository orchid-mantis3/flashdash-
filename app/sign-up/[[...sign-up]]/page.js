import { SignUp } from "@clerk/nextjs";
import { AppBar, Toolbar, Typography, Container, Button, Box } from "@mui/material";
import Link from "next/link"
import { Quicksand } from "next/font/google";
export default function SignUpPage(){
    return <Container maxWidth="100vw">
        <AppBar position="static" sx={{backgroundColor:"#7c5aa4"}}>
            <Toolbar>
                <Typography variant="h6" sx={{
                    flexGrow: 1
                }}>Flashcard SaaS</Typography>
                <Button color="inherit" sx={{fontFamily: 'Quicksand'}}>
                    <Link href="/sign-in" passHref>
                        Login
                    </Link>
                </Button>
                <Button color="inherit" sx={{fontFamily: 'Quicksand'}}>
                    <Link href="/sign-up" passHref>
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
            <Typography variant="h4" sx={{fontFamily: 'Quicksand'}}>Sign Up</Typography>
            <SignUp />
        </Box>
    </Container>
}