import {
  styled,
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material'
import * as React from 'react'

import { convertToVND } from '@/utils/helpers'

const StyledTableCell = styled(TableCell)(() => ({
  borderBottomColor: 'transparent',
  borderWidth: 2,
  borderColor: 'transparent',
  borderRight: '2px solid #031D31',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#215261',
    color: 'white',
    fontWeight: '700',
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
}))

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#031D31',
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#01283D',
  },
}))

enum StatusRecharge {
  Pending = 1,
  Complete,
  Fail,
}
const LABEL_STATUS = {
  1: 'Chờ duyệt',
  2: 'Hoàn thành',
  3: 'Thất bại',
}

const getColorStatus = (stt: number) => {
  switch (stt) {
    case StatusRecharge.Pending:
      return '#ffcc00'
    case StatusRecharge.Complete:
      return '#0BC9BD'
    case StatusRecharge.Fail:
      return '#FF4259'
    default:
      return ''
  }
}

function createData(
  date: string,
  packageName: string,
  amount: number,
  status: StatusRecharge
) {
  return { date, packageName, amount, status }
}
type RowType = ReturnType<typeof createData>

export default function HistoryTable() {
  const rowsData: RowType[] = React.useMemo(() => {
    return [
      {
        date: new Date().toDateString(),
        packageName: 'Chiến Binh BK2',
        amount: 500000,
        status: 2,
      },
      {
        date: new Date().toDateString(),
        packageName: 'Chiến Binh BK2',
        amount: 800000,
        status: 1,
      },
      {
        date: new Date().toDateString(),
        packageName: 'Chiến Binh BK2',
        amount: 800000,
        status: 3,
      },
      {
        date: new Date().toDateString(),
        packageName: 'Chiến Binh BK2',
        amount: 700000,
        status: 2,
      },
    ]
  }, [])
  return (
    <TableContainer>
      <Table sx={{ minWidth: 700 }} aria-label="table recharge">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Thời gian</StyledTableCell>
            <StyledTableCell align="center">Tên gói</StyledTableCell>
            <StyledTableCell align="center">Số tiền</StyledTableCell>
            <StyledTableCell align="center">Trạng thái</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsData.map((row, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row" align="center">
                {new Date(row.date).toLocaleDateString('en-GB')}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.packageName}
              </StyledTableCell>
              <StyledTableCell align="center">
                {convertToVND(row.amount)}
              </StyledTableCell>
              <StyledTableCell align="center">
                <Typography
                  component={'span'}
                  color={getColorStatus(row.status)}
                >
                  {LABEL_STATUS[row.status]}
                </Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
