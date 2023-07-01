// https://mui.com/material-ui/react-progress/
// https://recoiljs.org/docs/introduction/getting-started

// React -%- ////
import React from 'react'

// Packages -%- ////
import {
  useRecoilValue
} from 'recoil';
import { startingState } from '../../recoil/atoms/startingAtom';

// Components -%- ////
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Menu from '../../components/menu/MenuComponent'
import CircularProgressGeneralComponent from '../../components/general/CircularProgressGeneralComponent'
import StartedComponent from '../../components/utility/StartedComponent';

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function DefaultView() {
    const started = useRecoilValue(startingState);

    if(started){
        return (
            <>
                <Menu />
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
            </>
        )
    } else {
        return (
            <>
                <Menu />
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
                <StartedComponent />
            </>
        )
    }
}

// System -%- ////
