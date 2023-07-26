// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { analyticsState } from '../../recoil/atoms/analyticsAtom'

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'

// System Components -%- ////

// Components -%- ////
import AnalyticTableComponentItem from './items/AnalyticTableComponentItem'

// Middleware & Integrations -%- ////
import { getAnalytics } from '../../functions/analytics'

const row = [
    {
        id: 1,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/',
        timestamp: '2023-07-25T02:38:26.529Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 2,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/analytics',
        timestamp: '2023-07-25T02:38:55.427Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 3,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/privacy',
        timestamp: '2023-07-25T02:39:13.442Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 4,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/',
        timestamp: '2023-07-25T02:39:44.979Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 5,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/privacy',
        timestamp: '2023-07-25T02:39:49.418Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 6,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/',
        timestamp: '2023-07-25T02:41:23.056Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 7,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/',
        timestamp: '2023-07-25T02:57:29.881Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 8,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/privacy',
        timestamp: '2023-07-25T02:57:31.925Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 9,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/',
        timestamp: '2023-07-26T00:13:25.928Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
    {
        id: 10,
        url: 'https://main.dh06uvvwsg3un.amplifyapp.com/analytics',
        timestamp: '2023-07-26T00:14:11.603Z',
        language: 'en-US',
        userAgent: null,
        geoLocation: null,
    },
]

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AnalyticViewComponent() {
    // State Hook
    const [analytics, setAnalytics] = useRecoilState(analyticsState)

    // State Refresher Hook
    React.useEffect(() => {
        if (!analytics?.length) {
            getAnalytics().then((data) => {
                if (data) {
                    setAnalytics(data)
                } else {
                    setAnalytics([])
                }
            })
        }
        return () => {
            true
        }
    }, [])

    // State Condenser Hook
    const analyticsList = useRecoilValue(analyticsState)

    return (
        <Container
            maxWidth="xl"
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                flexWrap: 'wrap',
                flexFlow: { xs: 'column wrap', sm: 'row wrap' },
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                height: 'auto',
                width: '100%',
                maxWidth: '90%',
                margin: { xs: '3vh auto', md: '3vh auto' },
                padding: '0 !important',
                gap: '1.5em',
            }}
        >
            {analyticsList?.length > 1 ? (
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '1',
                        flexBasis: '100%',
                        flex: '1',
                        alignSelf: 'center',
                        height: 'auto',
                        width: { xs: '100%', md: '50%' },
                        margin: { xs: '1.5vh 3vw 3vh 3vw', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            height: 'auto',
                            width: '100%',
                            margin: { xs: '9vh 9vw', md: '15vh 15vw' },
                            padding: '0',
                            textAlign: 'center',
                            color: '#9E9E9E',
                        }}
                    >
                        Analytics are unavailable at this time
                    </Typography>
                </Box>
            ) : (
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '1',
                        flexBasis: '100%',
                        flex: '1',
                        alignSelf: 'center',
                        height: 'auto',
                        width: { xs: '100%', md: '50%' },
                        margin: { xs: '1.5vh 3vw 3vh 3vw', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    {/* <Typography
                        variant="h5"
                        gutterBottom
                        sx={{
                            height: 'auto',
                            width: '100%',
                            margin: { xs: '9vh 9vw', md: '15vh 15vw' },
                            padding: '0',
                            textAlign: 'center',
                            color: '#9E9E9E',
                        }}
                    >
                        Analytics are unavailable at this time

                    </Typography> */}
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Page</TableCell>
                                    <TableCell align="left">
                                        Timestamp
                                    </TableCell>
                                    <TableCell align="left">Language</TableCell>
                                    <TableCell align="left">
                                        User Agent
                                    </TableCell>
                                    <TableCell align="left">
                                        Geolocation
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {row.map((data) => (
                                    <AnalyticTableComponentItem
                                        key={data?.['id']}
                                        url={data?.['url']}
                                        timestamp={data?.['timestamp']}
                                        language={data?.['language']}
                                        userAgent={data?.['userAgent']}
                                        geoLocation={data?.['geoLocation']}
                                    />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            )}
        </Container>
    )
}

// System -%- ////
