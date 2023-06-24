// React -%- ////
import React from "react";

// Packages -%- ////
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Components -%- ////
import Menu from "../../components/menu/Menu";

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
      </main>
      </ThemeProvider>
    </>
  );
}

// System -%- ////
