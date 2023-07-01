// https://mui.com/material-ui/react-progress/

// React -%- ////
import React from 'react'

// Packages -%- ////

// MUI -%- ////
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

// Components -%- ////
import { ReactComponent as SpringReactTypeScriptREST } from '../../../assets/svg/spring-react-typescript-rest.svg'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
type BrandMenuComponentItemProps = {
    app_title: string
}

export default function BrandMenuComponentItemComponent(
    props: BrandMenuComponentItemProps
) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',
                    flexFlow: 'row nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 'auto',
                    width: '100%',
                    margin: '0 !important',
                    padding: '0 !important',
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        alignSelf: 'center',
                        height: 'auto',
                        width: '100%',
                        maxWidth: '40px',
                        margin: '0 !important',
                        padding: '0 !important',
                    }}
                >
                    <SpringReactTypeScriptREST />
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        flex: 1,
                        alignSelf: 'center',
                        height: 'auto',
                        width: '100%',
                        margin: '0 !important',
                        padding: '0 !important',
                        color: '#212121',
                    }}
                >
                    {props?.app_title
                        ? props?.app_title
                        : process.env.REACT_APP_DEFAULT_APP_TITLE}
                </Typography>
            </Box>
        </>
    )
}

// System -%- ////
