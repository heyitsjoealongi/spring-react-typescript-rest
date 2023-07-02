// React -%- ////
import { useEffect } from 'react'

// Packages -%- ////
import { useRecoilState } from 'recoil'
import { startState } from '../../recoil/atoms/startAtom'

// MUI -%- ////

// Components -%- ////

// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function StartedComponent() {
    const startTime = process.env.REACT_APP_START_TIME
    const [start, setStart] = useRecoilState(startState)

    useEffect(() => {
        if (startTime) {
            setTimeout(() => {
                setStart(true)
            }, parseInt(startTime))
        }
        return () => {
            start
        }
    }, [startTime])

    return start
}

// System -%- ////
