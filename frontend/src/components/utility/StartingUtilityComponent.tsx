// React -%- ////
import * as React from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { startState } from '../../recoil/atoms/startAtom'

// Types -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function StartingUtilityComponent() {
    const [starting, setStarting] = useRecoilState(startState)
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
