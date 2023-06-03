// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Link } from 'react-router-dom'

// Types -%- ////
import { ArticleSwipesT, ArticleSwipeT } from '../../../types/interactive'

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
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../../assets/styles/Swiper.css'

// Application -%- ////
export default function SwiperArticleComponentItem({ swipes }: ArticleSwipesT) {
    const progressCircle = React.useRef(null)
    const progressContent = React.useRef(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress)
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
    return (
        <Swiper
            slidesPerView={1}
            spaceBetween={0}
            breakpoints={{
                '@0.00': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                '@0.75': {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                '@1.00': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                '@1.50': {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }}
            loop={true}
            autoplay={{
                delay: !isNaN(parseInt(process.env.REACT_APP_SLIDER_DELAY))
                    ? parseInt(process.env.REACT_APP_SLIDER_DELAY)
                    : 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="article-swiper"
        >
            {swipes?.map(
                ({
                    article_id,
                    article_slug,
                    article_cover,
                    article_title,
                    article_topic,
                    article_caption,
                }: ArticleSwipeT) => (
                    <SwiperSlide key={article_id}>
                        <Card
                            sx={{
                                order: { article_id },
                                height: 'auto',
                                width: '100%',
                                padding: '0',
                                margin: '3vh auto 0 auto',
                                borderStyle: 'solid',
                                borderWidth: '0.5px',
                                borderColor: '#BDBDBD',
                                borderRadius: '3px',
                                boxShadow: 'none !important',
                                textAlign: 'left',
                            }}
                        >
                            <Link
                                to={
                                    process.env.REACT_APP_URL +
                                    '/articles/' +
                                    article_slug
                                }
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
                                        <Typography
                                            gutterBottom
                                            variant="h6"
                                            component="div"
                                        >
                                            {article_title}
                                        </Typography>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            component="div"
                                        >
                                            {article_topic}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            {article_caption}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Link>
                        </Card>
                    </SwiperSlide>
                )
            )}
            <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
            </div>
        </Swiper>
    )
}

// System -%- ////
