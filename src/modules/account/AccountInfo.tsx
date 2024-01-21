import {
  CalendarMonthOutlined,
  MailOutline,
  Person,
  PlaceRounded,
} from '@mui/icons-material'
import { Box, Grid, Typography } from '@mui/material'
import * as React from 'react'

import { AccountItemCard } from './components'

export default function AccountInfo() {
  const accountInfo = [
    {
      label: 'Họ và tên',
      content: 'Hoàng Thành Trung',
      icon: <Person fontSize="large" color="primary" />,
    },
    {
      label: 'Ngày tháng sinh',
      content: '12/10/1999',
      icon: <CalendarMonthOutlined fontSize="large" color="primary" />,
    },
    {
      label: 'Email',
      content: 'hoangtrung@gmail.com',
      icon: <MailOutline fontSize="large" color="primary" />,
    },
    {
      label: 'Địa chỉ',
      content: '123-Hai bà Trưng - Hà Nội',
      icon: <PlaceRounded fontSize="large" color="primary" />,
    },
  ]
  return (
    <Box component={'section'}>
      <Typography component={'h3'} fontSize={'1.75rem'} fontWeight={600}>
        Thông tin tài khoản
      </Typography>
      <Typography mt={1.5}>
        Quản lý thông tin tài khoản cá nhân của bạn, Hãy kiểm tra và cập nhật
        chính xác thông tin tài khoản của bạn.
      </Typography>
      <Grid container spacing={2} mt={3}>
        {accountInfo.map((item, idx) => (
          <Grid key={idx} item xs={6} md={4}>
            <AccountItemCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
