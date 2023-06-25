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
    username: yup
        .string()
        .min(8)
        .required(),
    password: yup
        .string()
        .min(8)
        .required(),
})

export default function AccessAccount() {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2))
        },
    })

    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexWrap: 'nowrap',
                        flexFlow: 'column nowrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignContent: 'center',
                        height: 'auto',
                        width: '30vw',
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
                        Access account
                    </Typography>
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
                </Box>
            </form>
        </>
    )
}
