// https://mui.com/material-ui/react-typography/
// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/material-icons/?query=login
// https://mui.com/material-ui/react-button/

// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useFormik } from 'formik'
import * as yup from 'yup'
// import { Auth } from 'aws-amplify'

// Components -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import LoginIcon from '@mui/icons-material/Login'
import Button from '@mui/material/Button'

// Integrations -%- ////
const validationSchema = yup.object({
    username: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    confirmPassword: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
})

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////

type CreateAccountProps = {
    username: string;
    password: string;
    confirmPassword: string;
}

export default function CreateAccount() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values: CreateAccountProps) => {
            console.log('---values', JSON.stringify(values, null, 2))
        },
    })

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
                    borderStyle: 'solid',
                    borderWidth: '3px',
                    borderColor: '#BDBDBD',
                    borderRadius: '3px',
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik?.handleSubmit}
            >
           
                    <Typography variant="h4" gutterBottom>
                        Create account
                    </Typography>
                    <TextField
                        sx={{
                            order: 1,
                            flex: 'none',
                            alignSelf: 'flexStart',
                            height: 'auto',
                            width: '100%',
                            margin: '0 auto',
                            padding: 0,
                            background: 'none',
                            border: 'none',
                            '&:hover': {
                                borderColor: '#9E9E9E',
                            },
                        }}
                        id="username"
                        name="username"
                        label="User Name"
                        variant="outlined"
                        required={true}
                        value={formik?.values?.username}
                        onChange={formik?.handleChange}
                        error={
                            formik?.touched?.username &&
                            Boolean(formik?.errors?.username)
                        }
                        helperText={
                            formik?.touched?.username &&
                            formik?.errors?.username
                        }
                    />
                    <TextField
                        fullWidth
                        sx={{
                            order: 2,
                            flex: 'none',
                            alignSelf: 'flexStart',
                            margin: '0 auto',
                            padding: 0,
                            background: 'none',
                            border: 'none',
                            '&:hover': {
                                borderColor: '#9E9E9E',
                            },
                        }}
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        variant="outlined"
                        required={true}
                        value={formik?.values?.password}
                        onChange={formik?.handleChange}
                        error={
                            formik?.touched?.password &&
                            Boolean(formik?.errors?.password)
                        }
                        helperText={
                            formik?.touched?.password &&
                            formik?.errors?.password
                        }
                    />
                    <TextField
                        fullWidth
                        sx={{
                            order: 2,
                            flex: 'none',
                            alignSelf: 'flexStart',
                            margin: '0 auto',
                            padding: 0,
                            background: 'none',
                            border: 'none',
                            '&:hover': {
                                borderColor: '#9E9E9E',
                            },
                        }}
                        id="confirmPassword"
                        name="confirmPassword"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        required={true}
                        value={formik?.values?.confirmPassword}
                        onChange={formik?.handleChange}
                        error={
                            formik?.touched?.confirmPassword &&
                            Boolean(formik?.errors?.confirmPassword)
                        }
                        helperText={
                            formik?.touched?.confirmPassword &&
                            formik?.errors?.confirmPassword
                        }
                    />
                    <Button
                        fullWidth
                        sx={{
                            order: 2,
                            flex: 'none',
                            alignSelf: 'flexStart',
                            margin: '0 auto',
                            padding: '0.5em 1.5em',
                            color: '#212121',
                            background: '#CDDC39',
                            boxShadow: 'none',
                            '&:hover': {
                                background: '#9E9E9E',
                            },
                        }}
                        startIcon={<LoginIcon />}
                        type="submit"
                        variant="contained"
                        size="large"
                    >
                        Create account
                    </Button>
            </Box>
        </>
    )
}

// System -%- ////
