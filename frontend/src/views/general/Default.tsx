// React -%- ////
import React from "react";

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components -%- ////
import Box from '@mui/material/Box';
import Menu from "../../components/menu/Menu";
import Login from "../../components/login/Login"

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

const theme = createTheme({
  typography: {
    fontFamily: [
      'Overpass',
    ].join(','),
  },
});

// Application -%- ////
export default function Default() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <main>
                <Menu />
            <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        flexFlow: 'column wrap',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        height: 'auto',
        width: '100%',
        margin: '25vh auto',
        padding: '0',
        gap: '0',
        background: 'none',
        border: 'none',
      }}
      noValidate
      autoComplete="off"
    >

        <Login />
        </Box>
      </main>
      </ThemeProvider>
    </>
  );
}

// System -%- ////
