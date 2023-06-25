// https://mui.com/material-ui/react-typography/
// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/material-icons/?query=login
// https://mui.com/material-ui/react-button/
// https://formik.org/docs/examples/with-material-ui

// React -%- ////
import React from 'react'

// Packages -%- ////
import { useFormik } from 'formik'
import * as yup from 'yup'
// import { Auth } from 'aws-amplify'

// Components -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// Integrations -%- ////
const validationSchema = yup.object({
    name: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Email is required'),
    username: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Email is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
})

export default function CreateAccount() {
    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <>
            <Box
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
            >
                <Typography variant="h4" gutterBottom>
                    Create account
                </Typography>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.name && Boolean(formik.errors.name)
                        }
                        helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                        fullWidth
                        id="username"
                        name="username"
                        label="Username"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.username &&
                            Boolean(formik.errors.username)
                        }
                        helperText={
                            formik.touched.username && formik.errors.username
                        }
                    />
                    <TextField
                        fullWidth
                        id="email"
                        name="email"
                        label="Email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.email && Boolean(formik.errors.email)
                        }
                        helperText={formik.touched.email && formik.errors.email}
                    />
                    <TextField
                        fullWidth
                        id="password"
                        name="password"
                        label="Password"
                        type="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.password &&
                            Boolean(formik.errors.password)
                        }
                        helperText={
                            formik.touched.password && formik.errors.password
                        }
                    />
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </>
    )
}
