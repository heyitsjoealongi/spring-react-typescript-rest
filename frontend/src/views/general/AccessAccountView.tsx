// React -%- ////
import React from "react";

// Packages -%- ////

// Components -%- ////
import Box from '@mui/material/Box';
import Menu from "../../components/menu/Menu";
import AccessAccount from "../../components/account/AccessAccount"

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function AccessAccountView() {
  return (
    <>
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

        <AccessAccount />
        </Box>
    </>
  );
}

// System -%- ////
