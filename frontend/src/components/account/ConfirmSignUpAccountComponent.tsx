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
import { ConfirmT } from '../../types/account'

// MUI -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
async function confirmSignUp(values: ConfirmT) {
    try {
        const { username, code } = values
        return await Auth.confirmSignUp(username, code)
    } catch (error) {
        if (
            error?.toString() ===
            'NotAuthorizedException: User cannot be confirmed. Current status is CONFIRMED'
        ) {
            return { confirmed: true }
        } else {
            console.log('error confirming sign up:', error)
        }
    }
}
const validationSchema = yup.object({
    username: yup.string().min(8).required(),
    code: yup.string().min(6).required(),
})
export default function ConfirmSignUpAccountComponent() {
    const [confirming, setConfirming] = useRecoilState(confirmingState)
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            username: '',
            code: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                const user = await confirmSignUp(values)
                if (user?.['userDataKey'] || user?.['confirmed']) {
                    await setConfirming(false)
                    navigate('/sign-in')
                    return confirming
                }
            } catch (error) {
                console.log('error confirming sign up:', error)
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
                        Confirm sign up
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
                        id="code"
                        name="code"
                        label="Code"
                        value={formik.values.code}
                        onChange={formik.handleChange}
                        error={
                            formik.touched.code && Boolean(formik.errors.code)
                        }
                        helperText={formik.touched.code && formik.errors.code}
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
                        Confirm sign up
                    </Button>
                </Box>
            </form>
        </React.Fragment>
    )
}
