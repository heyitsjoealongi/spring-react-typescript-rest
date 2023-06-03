// React -%- ////
import * as React from 'react'
import ReactDOM from 'react-dom/client'

// Packages -%- ////
import { Amplify } from 'aws-amplify'
import * as Sentry from '@sentry/react'
import reportWebVitals from './reportWebVitals'
import awsconfig from './aws-exports'
import { RecoilRoot } from 'recoil'

// Types -%- ////

// Components -%- ////
import App from './App'

// Middleware & Integrations -%- ////
Amplify.configure(awsconfig)
Sentry.init({
    dsn: 'https://11e48bcec0b54c81a38319fca65bebab@o536418.ingest.sentry.io/4505298496454656',
    integrations: [
        new Sentry.BrowserTracing({
            // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
            tracePropagationTargets: [
                'localhost',
                /^https:\/\/yourserver\.io\/api/,
            ],
        }),
        new Sentry.Replay(),
    ],
    // Performance Monitoring
    tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
    // Session Replay
    replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
    replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </React.StrictMode>
)

// System -%- ////

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
