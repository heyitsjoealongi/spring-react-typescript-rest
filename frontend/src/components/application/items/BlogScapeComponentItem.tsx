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
                order: '1',
                flexBasis: '100%',
                flex: '1',
                alignSelf: 'center',
                height: 'auto',
                width: { xs: '100%', md: '33.33%' },
                margin: { xs: '1.5vh 3vw 3vh 3vw', md: '0 auto' },
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
