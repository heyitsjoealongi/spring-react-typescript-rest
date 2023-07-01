// https://mui.com/material-ui/react-typography/
// https://mui.com/material-ui/react-text-field/
// https://mui.com/material-ui/material-icons/?query=login
// https://mui.com/material-ui/react-button/
// https://formik.org/docs/examples/with-material-ui
// https://docs.amplify.aws/lib/auth/emailpassword/q/platform/js/#re-send-sign-up-confirmation-code

// React -%- ////
import React from 'react'

// Packages -%- ////
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Auth } from 'aws-amplify'

// Components -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

// Integrations -%- ////
type ResendVerificationCodeAccountComponentProps = {
    username: string
}

async function resendConfirmationCode(
    values: ResendVerificationCodeAccountComponentProps
) {
    try {
        const { username } = values
        await Auth.resendSignUp(username)
        console.log('code resent successfully')
    } catch (err) {
        console.log('error resending code: ', err)
    }
}

const validationSchema = yup.object({
    username: yup.string().min(8).required(),
})

export default function ResendVerificationCodeAccountComponent() {
    const formik = useFormik({
        initialValues: {
            username: '',
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            // alert(JSON.stringify(values, null, 2))
            return await resendConfirmationCode(values)
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
                        Resend verification code
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
                    <Button
                        color="primary"
                        variant="contained"
                        fullWidth
                        type="submit"
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
                    >
                        Resend verification code
                    </Button>
                </Box>
            </form>
        </>
    )
}
