// https://mui.com/material-ui/react-progress/
// https://recoiljs.org/docs/introduction/getting-started

// React -%- ////
import { useEffect } from 'react'

// Packages -%- ////
import {
  useRecoilState,
} from 'recoil';
import { startingState } from '../../recoil/atoms/startingAtom';

// Components -%- ////


// Integrations -%- ////

// Middleware -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Styled Components -%- ////

// Application -%- ////
export default function StartedComponent() {
    const startTime = process.env.REACT_APP_START_TIME
    const [started, setStarted] = useRecoilState(startingState);

    useEffect(() => {
        if(startTime){
            setTimeout(() => {
                setStarted(true)
            }, parseInt(startTime));
        }
        return () => {
            started
        }
    }, [startTime])

    return started
}

// System -%- ////
