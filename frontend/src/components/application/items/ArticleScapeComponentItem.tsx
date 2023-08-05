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

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type ArticleScapeComponentItemProps = {
    article_id: number
    article_slug: string
    article_cover: string
    article_title: string
    article_topic: string
    article_caption: string
}
export default function ArticleScapeComponentItem(
    props: ArticleScapeComponentItemProps
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
                <CardMedia
                    component="img"
                    height="100px"
                    image={props?.['article_cover']}
                    alt={props?.['article_title']}
                    loading="lazy"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {props?.['article_title']}
                    </Typography>
                    <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                    >
                        {props?.['article_topic']}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props?.['article_caption']}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

// System -%- ////
