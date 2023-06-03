// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { analyticsState } from '../../recoil/atoms/analyticsAtom'

// Types -%- ////

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

    // State Cache Hook
    const analyticsListCache = React.useMemo(() => analyticsList, [analytics])

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
            {analyticsListCache?.length > 0 ? (
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
                    <TableContainer
                        sx={{
                            backgroundColor: '#fff',
                            borderStyle: 'solid',
                            borderWidth: '0.5px',
                            borderColor: '#BDBDBD',
                            borderRadius: '3px',
                        }}
                    >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow
                                    sx={{
                                        color: '#F5F5F5',
                                        backgroundColor: '#212121',
                                    }}
                                >
                                    <TableCell
                                        sx={{
                                            color: '#F5F5F5',
                                        }}
                                    >
                                        Page
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            color: '#F5F5F5',
                                        }}
                                    >
                                        Date
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            color: '#F5F5F5',
                                        }}
                                    >
                                        Language
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            color: '#F5F5F5',
                                        }}
                                    >
                                        Browser
                                    </TableCell>
                                    <TableCell
                                        align="left"
                                        sx={{
                                            color: '#F5F5F5',
                                        }}
                                    >
                                        Country
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {analyticsListCache.map(
                                    ({
                                        analytic_id,
                                        analytic_page,
                                        analytic_date,
                                        analytic_language,
                                        analytic_useragent,
                                        analytic_geolocation,
                                    }) => (
                                        <React.Fragment key={analytic_id}>
                                            <AnalyticTableComponentItem
                                                analytic_id={analytic_id}
                                                analytic_page={analytic_page}
                                                analytic_date={analytic_date}
                                                analytic_language={
                                                    analytic_language
                                                }
                                                analytic_useragent={
                                                    analytic_useragent
                                                }
                                                analytic_geolocation={
                                                    analytic_geolocation
                                                }
                                            />
                                        </React.Fragment>
                                    )
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
            )}
        </Container>
    )
}

// System -%- ////
