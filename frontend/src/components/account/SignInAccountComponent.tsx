// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import { useRecoilState } from 'recoil'
import { authenticatedState } from '../../recoil/atoms/authenticatedAtom'
import { confirmingState } from '../../recoil/atoms/confirmingAtom'
import { useNavigate } from 'react-router-dom'

// Types -%- ////
import { SignInT } from '../../types/account'

// MUI -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { setUserDataKey } from '../../functions/account'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
async function signIn(values: SignInT) {
    try {
        const { username, password } = values
        return await Auth.signIn(username, password)
    } catch (error) {
        if (
            error?.toString() ===
            'UserNotConfirmedException: User is not confirmed.'
        ) {
            return { confirming: true }
        } else {
            console.log('error confirming sign up', error)
        }
    }
}
const validationSchema = yup.object({
    username: yup.string().min(8).required(),
    password: yup.string().min(8).required(),
})
export default function SignInAccountComponent() {
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState)
    const [confirming, setConfirming] = useRecoilState(confirmingState)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const user = await signIn(values)
                if (user?.['userDataKey']) {
                    setUserDataKey(user?.['userDataKey'])
                    await setAuthenticated(true)
                    navigate('/welcome')
                    return { authenticated, confirming }
                } else if (user?.['confirming']) {
                    await setConfirming(true)
                    navigate('/confirm-sign-up')
                    return { authenticated, confirming }
                }
            } catch (error) {
                console.log('error signing in:', error)
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
                        Sign in
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
                        Sign in
                    </Button>
                </Box>
            </form>
        </React.Fragment>
    )
}
