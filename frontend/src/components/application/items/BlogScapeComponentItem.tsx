// https://mui.com/material-ui/react-progress/

// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

// System Components -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type BlogScapeComponentItemProps = {
    id: number
    slug: string
    cover: string
    title: string
    topic: string
    caption: string
}
export default function BlogScapeComponentItem(
    props: BlogScapeComponentItemProps
) {
    return (
        <Card
            sx={{
                display: 'inline-flex',
                order: props?.['id'],
                flexBasis: '100%',
                flex: 'auto',
                alignSelf: 'center',
                height: 'auto',
                width: '100%',
                minWidth: { xs: '100%', md: '30%' },
                maxWidth: { xs: '100%', md: '30%' },
                padding: '0',
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100px"
                    image={props?.['cover']}
                    alt={props?.['title']}
                    loading="lazy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props?.['title']}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                    >
                        {props?.['topic']}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props?.['caption']}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

// System -%- ////
