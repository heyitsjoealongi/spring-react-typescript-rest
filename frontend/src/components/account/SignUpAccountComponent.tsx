// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import { useRecoilState } from 'recoil'
import { confirmingState } from '../../recoil/atoms/confirmingAtom'
import { useNavigate } from 'react-router-dom'

// Types -%- ////
import { SignUpT } from '../../types/account'

// MUI -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { setUserDataKey } from '../../functions/account'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
async function signUp(values: SignUpT) {
    try {
        const { username, password, email, name } = values
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                email,
                name,
            },
            autoSignIn: {
                enabled: true,
            },
        })
        return user
    } catch (error) {
        console.log('error signing up:', error)
    }
}
const validationSchema = yup.object({
    name: yup.string().min(8).required(),
    username: yup.string().min(8).required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
})
export default function SignUpAccountComponent() {
    const [confirming, setConfirming] = useRecoilState(confirmingState)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const user = await signUp(values)
                if (user?.['userDataKey']) {
                    setUserDataKey(user?.['userDataKey'])
                    await setConfirming(true)
                    navigate('/confirm-sign-up')
                    return confirming
                }
            } catch (error) {
                console.log('error signing up:', error)
            }
        },
    })
    return (
        <React.Fragment>
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
                        width: { xs: '90vw', md: '60vw', lg: '30vw' },
                        margin: 'auto',
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
                        Sign up
                    </Typography>
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
                        sx={{
                            display: 'inline-flex',
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
                    >
                        Sign up
                    </Button>
                </Box>
            </form>
        </React.Fragment>
    )
}
