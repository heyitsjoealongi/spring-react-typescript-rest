// https://mui.com/material-ui/react-typography/
// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/material-icons/?query=login
// https://mui.com/material-ui/react-button/

// React -%- ////
import * as React from 'react';


// Packages -%- ////
// import styled from "@emotion/styled";

// Components -%- ////
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import LoginIcon from '@mui/icons-material/Login';
import Button from '@mui/material/Button';

// Integrations -%- ////


// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function AccessAccount() {
  return (
    <>
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
        width: '33.33%',
        margin: '3em auto',
        padding: '3em 1.5em',
        gap: '1.5em',
        background: 'none',
        borderStyle:'solid',
        borderWidth: "3px",
        borderColor:'#BDBDBD',
        borderRadius: '3px',
      }}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h4" gutterBottom>
        Access account
      </Typography>
      <TextField 
      sx={{
        order:1,
        flex: "none",
        alignSelf: "flexStart",
        height: "auto",
        width: "100%",
        margin: "0 auto",
        padding: 0,
        background: 'none',
        border: 'none',
        '&:hover': {
      borderColor: '#9E9E9E',
    },
    }} id="outlined-basic" label="User Name" variant="outlined" required={true} />
      <TextField fullWidth sx={{
        order:2,
        flex: "none",
        alignSelf: "flexStart",
        margin: "0 auto",
        padding: 0,
        background: 'none',
        border: 'none',
        '&:hover': {
       borderColor: '#9E9E9E',
    },
    }} id="outlined-basic" label="Password" type="password" variant="outlined" required={true}/>
 <Button fullWidth sx={{
        order:2,
        flex: "none",
        alignSelf: "flexStart",
        margin: "0 auto",
        padding: '0.5em 1.5em',
        color: "#212121",
        background: '#CDDC39',
        boxShadow: 'none',
        '&:hover': {
       background: '#9E9E9E',
    },
    }} startIcon={<LoginIcon />} variant="contained" size="large">Access account</Button>
    </Box>
    </>
  );
}

// System -%- ////
