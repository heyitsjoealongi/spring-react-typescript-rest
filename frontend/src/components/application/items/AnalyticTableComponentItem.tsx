// React -%- ////
import * as React from 'react'

// Packages -%- ////
import dayjs from 'dayjs'

// MUI -%- ////
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
type Page = {
    page: string
    app_url: string
}
const page = (url: string) => {
    const clean: Page = { page: '', app_url: '' }
    clean.page = url.toString()
    clean.app_url = process.env.REACT_APP_URL
    clean.page = clean.page.replaceAll('http://', '')
    clean.app_url = clean.app_url.replaceAll('http://', '')
    clean.page = clean.page.replaceAll('https://', '')
    clean.app_url = clean.app_url.replaceAll('https://', '')
    clean.page = clean.page.replaceAll('www.', '')
    clean.app_url = clean.app_url.replaceAll('www.', '')
    clean.page = clean.page.replaceAll(clean?.['app_url'], '')
    return clean.page
}
type Date = {
    date: string
}
const date = (timestamp: string) => {
    const clean: Date = { date: '' }
    clean.date = dayjs(timestamp).format('MM/DD/YYYY')
    return clean.date
}
type AnalyticTableComponentItemProps = {
    url: string
    timestamp: string
    language: string
    userAgent: string
    geoLocation: string
}
export default function AnalyticTableComponentItem(
    props: AnalyticTableComponentItemProps
) {
    return (
        <TableRow
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                {page(props?.['url']) ? page(props?.['url']) : props?.['url']}
            </TableCell>
            <TableCell align="left">
                {date(props?.['timestamp'])
                    ? date(props?.['timestamp'])
                    : props?.['timestamp']}
            </TableCell>
            <TableCell align="left">{props?.['language']}</TableCell>
            <TableCell align="left">{props?.['userAgent']}</TableCell>
            <TableCell align="left">{props?.['geoLocation']}</TableCell>
        </TableRow>
    )
}

// System -%- ////
