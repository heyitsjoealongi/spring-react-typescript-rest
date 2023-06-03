// React -%- ////
import * as React from 'react'

// Packages -%- ////

// Types -%- ////
import { AnalyticT } from '../../../types/analytic'

// MUI -%- ////
import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'

// Components -%- ////

// Middleware & Integrations -%- ////

// Cascading Style Sheets (CSS) -%- ////

// Application -%- ////
export default function AnalyticTableComponentItem({
    analytic_page,
    analytic_date,
    analytic_language,
    analytic_useragent,
}: AnalyticT) {
    return (
        <TableRow
            sx={{
                '&:last-child td, &:last-child th': {
                    border: 0,
                },
            }}
        >
            <TableCell component="th" scope="row">
                {analytic_page}
            </TableCell>
            <TableCell align="left">{analytic_date}</TableCell>
            <TableCell align="left">{analytic_language}</TableCell>
            <TableCell align="left">{analytic_useragent}</TableCell>
            <TableCell align="left"></TableCell>
        </TableRow>
    )
}

// System -%- ////
