// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Link } from 'react-router-dom'

// Types -%- ////
import { ArticleT } from '../../../types/article'

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
export default function ArticleScapeComponentItem({
    article_id,
    article_slug,
    article_cover,
    article_title,
    article_topic,
    article_caption,
}: ArticleT) {
    return (
        <Card
            sx={{
                display: 'inline-flex',
                order: { article_id },
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
            <Link
                to={process.env.REACT_APP_URL + '/articles/' + article_slug}
                target="_self"
                aria-label="card-link"
                type="link"
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100px"
                        image={article_cover}
                        alt={article_title}
                        loading="lazy"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {article_title}
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                        >
                            {article_topic}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {article_caption}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Link>
        </Card>
    )
}

// System -%- ////
