// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Link } from 'react-router-dom'

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////
import { ReactComponent as ReactLogo } from './../../assets/svg/ReactLogo.svg'
import { ReactComponent as TypeScriptLogo } from './../../assets/svg/TypeScriptLogo.svg'
import { ReactComponent as MaterialUILogo } from './../../assets/svg/MaterialUILogo.svg'
import { ReactComponent as RecoilLogo } from './../../assets/svg/RecoilLogo.svg'
import { ReactComponent as AmplifyLogo } from './../../assets/svg/AmplifyLogo.svg'
import { ReactComponent as AWSLogo } from './../../assets/svg/AWSLogo.svg'
import { ReactComponent as SpringBootLogo } from './../../assets/svg/SpringBootLogo.svg'
import { ReactComponent as MySQLLogo } from './../../assets/svg/MySQLLogo.svg'

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function PreFooterFrameworksMenuComponent() {
    return (
        <React.Fragment>
            <Container
                maxWidth="xl"
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: { xs: 'wrap', md: 'nowrap' },
                    flexFlow: { xs: 'row wrap', md: 'row nowrap' },
                    justifyContent: { xs: 'space-evenly', md: 'center' },
                    alignItems: 'center',
                    alignContent: 'center',
                    height: 'auto',
                    width: '100%',
                    maxWidth: '90%',
                    margin: { xs: '3vh 3vw', md: '3vh auto' },
                    padding: '0 !important',
                    gap: '1.5vw',
                    textAlign: { xs: 'center', md: 'left' },
                }}
            >
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '0',
                        flexBasis: { xs: '100%', md: 'auto' },
                        flex: '3',
                        alignSelf: 'center',
                        height: 'auto',
                        width: '100%',
                        margin: '3vh auto',
                        padding: '0',
                    }}
                >
                    <Typography
                        sx={{
                            color: '#212121',
                        }}
                        variant="subtitle2"
                        gutterBottom
                    >
                        Built with extensible technologies + typed frameworks,
                        for continuous development, in an agile workflow
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '1',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://react.dev/'}
                        target="_blank"
                        aria-label="react-logo-link"
                        type="link"
                    >
                        <ReactLogo />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '2',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://mui.com/'}
                        target="_blank"
                        aria-label="material-ui-logo-link"
                        type="link"
                    >
                        <MaterialUILogo />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '3',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://www.typescriptlang.org/'}
                        target="_blank"
                        aria-label="typescript-logo-link"
                        type="link"
                    >
                        <TypeScriptLogo />
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '4',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://recoiljs.org/'}
                        target="_blank"
                        aria-label="recoil-logo-link"
                        type="link"
                    >
                        <RecoilLogo />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '5',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://aws.amazon.com/amplify/'}
                        target="_blank"
                        aria-label="amplify-logo-link"
                        type="link"
                    >
                        <AmplifyLogo />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '6',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://aws.amazon.com/'}
                        target="_blank"
                        aria-label="aws-logo-link"
                        type="link"
                    >
                        <AWSLogo />
                    </Link>
                </Box>

                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '7',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://spring.io/'}
                        target="_blank"
                        aria-label="spring-logo-link"
                        type="link"
                    >
                        <SpringBootLogo />
                    </Link>
                </Box>
                <Box
                    sx={{
                        display: 'inline-flex',
                        order: '8',
                        flex: '0',
                        flexBasis: 'auto',
                        alignSelf: { xs: 'flex-start', md: 'center' },
                        height: 'auto',
                        width: 'auto',
                        margin: { xs: '0', md: '0 auto' },
                        padding: '0',
                    }}
                >
                    <Link
                        to={'https://www.mysql.com/'}
                        target="_blank"
                        aria-label="mysql-logo-link"
                        type="link"
                    >
                        <MySQLLogo />
                    </Link>
                </Box>
            </Container>
        </React.Fragment>
    )
}

// System -%- ////
