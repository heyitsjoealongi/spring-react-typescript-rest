// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

// Types -%- ////
import { ImageSwipesT, ImageSwipeT } from '../../../types/interactive'

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '../../../assets/styles/Swiper.css'

// Application -%- ////
export default function SwiperImageComponentItem({ swipes }: ImageSwipesT) {
    const progressCircle = React.useRef(null)
    const progressContent = React.useRef(null)
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress)
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }
    return (
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoHeight={true}
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
            className="image-swiper"
        >
            {swipes?.map(
                ({
                    image_id,
                    image_source,
                    image_description,
                }: ImageSwipeT) => (
                    <SwiperSlide key={image_id}>
                        <img
                            src={image_source}
                            alt={image_description}
                            loading="lazy"
                        />
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
