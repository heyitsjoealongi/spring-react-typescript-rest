// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { startingState } from '../../recoil/atoms/startingAtom'

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function StartingUtilityComponent() {
    const [starting, setStarting] = useRecoilState(startingState)
    const delay = process.env.REACT_APP_DELAY
    React.useEffect(() => {
        if (delay) {
            setTimeout(() => {
                setStarting(true)
            }, parseInt(delay))
        }
        return () => {
            starting
        }
    }, [delay])
    return starting
}

// System -%- ////
