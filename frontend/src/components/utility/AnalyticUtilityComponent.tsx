// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////

// MUI -%- ////

// System Components -%- ////

// Components -%- ////

// Middleware & Integrations -%- ////
import { saveAnalytic } from '../../functions/analytics'

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AnalyticUtilityComponent() {
    React.useEffect(() => {
        saveAnalytic()
        return () => {
            true
        }
    }, [])
    return true
}

// System -%- ////
