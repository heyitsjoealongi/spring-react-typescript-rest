// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState, useRecoilValue } from 'recoil'
import { topicsState } from '../../recoil/atoms/topicsAtom'

// MUI -%- ////
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

// System Components -%- ////

// Components -%- ////
import TopicBlocksComponentItem from './items/TopicBlocksComponentItem'

// Integrations -%- ////
import { fetchTopics } from '../../functions/articles'

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function TopicBlocksComponent() {
    // State Hook
    const [topics, setTopics] = useRecoilState(topicsState)

    // State Refresher Hook
    React.useEffect(() => {
        if (!topics?.length) {
            fetchTopics().then((data) => {
                if (data) {
                    setTopics(data)
                } else {
                    setTopics([])
                }
            })
        }
        return () => {
            true
        }
    }, [])

    // State Condenser Hook
    const topicList = useRecoilValue(topicsState)

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
                margin: '3vh auto',
                padding: '0 !important',
                gap: '1.5em',
            }}
        >
            {topicList?.length > 1 ? (
                topicList?.map((data, index) => (
                    <TopicBlocksComponentItem
                        key={index}
                        id={index}
                        topic={data?.['topic']}
                    />
                ))
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
                        Topics are unavailable at this time
                    </Typography>
                </Box>
            )}
        </Container>
    )
}

// System -%- ////
