// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Box from '@mui/material/Box'

// System Components -%- ////
import MenuComponent from '../../components/menu/MenuComponent'
import FooterMenuComponent from '../../components/menu/FooterMenuComponent'
import CircularProgressGeneralComponent from '../../components/system/CircularProgressGeneralComponent'

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function ErrorView() {
    return (
        <React.Fragment>
            <MenuComponent />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'nowrap',
                    flexFlow: 'column nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    height: '75vh',
                    width: '100%',
                    margin: '0 auto',
                    padding: '0',
                    gap: '0',
                }}
            >
                <CircularProgressGeneralComponent />
            </Box>
            <FooterMenuComponent />
        </React.Fragment>
    )
}

// System -%- ////
