// React -%- ////
import * as React from 'react'

// Packages -%- ////
import dayjs from 'dayjs'

// Types -%- ////
import { Analytic, Page, Date } from '../../../types/analytic'

// MUI -%- ////
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
const page = (analytic_url: string) => {
    const clean: Page = { page: '', app_url: '' }
    clean.page = analytic_url?.toString()
    clean.app_url = process.env.REACT_APP_URL
    clean.page = clean?.page?.replaceAll('http://', '')
    clean.app_url = clean?.app_url?.replaceAll('http://', '')
    clean.page = clean?.page?.replaceAll('https://', '')
    clean.app_url = clean?.app_url?.replaceAll('https://', '')
    clean.page = clean?.page?.replaceAll('www.', '')
    clean.app_url = clean?.app_url?.replaceAll('www.', '')
    clean.page = clean?.page?.replaceAll(clean?.['app_url'], '')
    return clean?.page
}
const date = (timestamp: string) => {
    const clean: Date = { date: '' }
    clean.date = dayjs(timestamp)?.format('MM/DD/YYYY')
    return clean?.date
}
export default function AnalyticTableComponentItem(props: Analytic) {
    return (
        <TableRow
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                {page(props?.['analytic_url'])
                    ? page(props?.['analytic_url'])
                    : props?.['analytic_url']}
            </TableCell>
            <TableCell align="left">
                {date(props?.['analytic_timestamp'])
                    ? date(props?.['analytic_timestamp'])
                    : props?.['analytic_timestamp']}
            </TableCell>
            <TableCell align="left">{props?.['analytic_language']}</TableCell>
            <TableCell align="left"></TableCell>
            <TableCell align="left"></TableCell>
        </TableRow>
    )
}

// System -%- ////
