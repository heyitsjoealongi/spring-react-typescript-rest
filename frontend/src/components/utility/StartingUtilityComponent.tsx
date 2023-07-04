// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { startingState } from '../../recoil/atoms/startingAtom'

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function StartingUtilityComponent() {
    const [starting, setStarting] = useRecoilState(startingState)
    React.useEffect(() => {
        setTimeout(
            () => {
                setStarting(true)
            },
            !isNaN(parseInt(process.env.REACT_APP_DELAY))
                ? parseInt(process.env.REACT_APP_DELAY)
                : 1000
        )
        return () => {
            starting
        }
    }, [])
    return starting
}

// System -%- ////
