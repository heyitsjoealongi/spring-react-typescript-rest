// React -%- ////
import React from 'react'

// Packages -%- ////
import { useRecoilValue } from 'recoil'
import { startState } from '../../recoil/atoms/startAtom'

// MUI -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// Components -%- ////
import MenuComponent from '../../components/menu/MenuComponent'
import FooterMenuComponent from '../../components/menu/FooterMenuComponent'
import CircularProgressGeneralComponent from '../../components/general/CircularProgressGeneralComponent'
import NotificationUtilityComponent from '../../components/utility/NotificationUtilityComponent'
import StartedUtilityComponent from '../../components/utility/StartedUtilityComponent'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function DefaultView() {
    const start = useRecoilValue(startState)

    if (start) {
        return (
            <>
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
                        margin: { xs: '0 3vw', md: '0 auto' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        Spring React TypeScript REST
                    </Typography>
                </Box>
                <FooterMenuComponent />
                <NotificationUtilityComponent />
            </>
        )
    } else {
        return (
            <>
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
                        margin: { xs: '0 3vw', md: '0 auto' },
                        padding: '0',
                        gap: '0',
                    }}
                >
                    <CircularProgressGeneralComponent />
                </Box>
                <FooterMenuComponent />
                <NotificationUtilityComponent />
                <StartedUtilityComponent />
            </>
        )
    }
}

// System -%- ////
