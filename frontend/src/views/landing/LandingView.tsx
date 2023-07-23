// React -%- ////
import * as React from 'react'

// Packages -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////
import HeroSwiperComponent from '../../components/interactive/HeroSwiperComponent'
import SponsorBannerComponent from '../../components/interactive/SponsorBannerComponent'

// Integrations -%- ////
const hero_swipper = [
    {
        id: 0,
        description: 'Slide one',
        source: `${process.env.REACT_APP_URL + '/assets/jpg/example.jpg'}`,
    },
    {
        id: 1,
        description: 'Slide two',
        source: `${process.env.REACT_APP_URL + '/assets/jpg/example.jpg'}`,
    },
    {
        id: 2,
        description: 'Slide three',
        source: `${process.env.REACT_APP_URL + '/assets/jpg/example.jpg'}`,
    },
]

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function LandingView() {
    return (
        <React.Fragment>
            <HeroSwiperComponent hero_swipper={hero_swipper} />
            <SponsorBannerComponent />
        </React.Fragment>
    )
}

// System -%- ////
