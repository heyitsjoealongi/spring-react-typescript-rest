// https://mui.com/material-ui/react-progress/

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type TopicBlocksComponentItemProps = {
    article_id: number
    article_topic: string
}
export default function TopicBlocksComponentItem(
    props: TopicBlocksComponentItemProps
) {
    return (
        <Card
            sx={{
                display: 'inline-flex',
                order: props?.['article_id'],
                flexBasis: '100%',
                flex: 'auto',
                alignSelf: 'center',
                height: 'auto',
                width: '100%',
                minWidth: { xs: '100%', md: '30%' },
                maxWidth: { xs: '100%', md: '30%' },
                padding: '0',
                margin: '0',
                borderStyle: 'solid',
                borderWidth: '0.5px',
                borderColor: '#BDBDBD',
                borderRadius: '3px',
                boxShadow: 'none !important',
            }}
        >
            <CardActionArea>
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="div"
                        sx={{
                            alignSelf: 'center',
                            height: 'auto',
                            width: '100%',
                            margin: '3vh auto',
                            padding: '0 !important',
                            textAlign: 'center',
                        }}
                    >
                        {props?.['article_topic']}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

// System -%- ////
