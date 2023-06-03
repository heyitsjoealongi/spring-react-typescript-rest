// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'
import { useRecoilState } from 'recoil'
import { authenticatedState } from '../../recoil/atoms/authenticatedAtom'
import { useNavigate } from 'react-router-dom'

// Types -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { removeUserData } from '../../functions/account'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
async function signOut() {
    try {
        return await Auth.signOut()
    } catch (error) {
        console.log('error signing out:', error)
        return error
    }
}
const validationSchema = yup.object({})
export default function SignOutAccountComponent() {
    const [authenticated, setAuthenticated] = useRecoilState(authenticatedState)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {},
        validationSchema: validationSchema,
        onSubmit: async () => {
            try {
                await signOut()
                removeUserData()
                await setAuthenticated(false)
                navigate('/')
                return authenticated
            } catch (error) {
                console.log('error signing out:', error)
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
                        Sign out
                    </Typography>
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
                        Sign out
                    </Button>
                </Box>
            </form>
        </React.Fragment>
    )
}
