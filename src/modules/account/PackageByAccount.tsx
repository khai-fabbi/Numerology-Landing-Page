import { Box, Typography } from '@mui/material'
import * as React from 'react'

import type { PackageHistory } from '@/pages/api/type'

import { PackageAccountCard } from './components'
import HistoryTable from './components/HistoryTable'

interface Props {
  packageHistory?: PackageHistory
}
export default function PackageByAccount({ packageHistory }: Props) {
  return (
    <Box component={'section'}>
      <Box>
        <Typography component={'h3'} fontSize={'1.75rem'} fontWeight={600}>
          Gói đang sử dụng
        </Typography>
        <Typography mt={1.5}>
          Thông tin gói đang sử dụng và số lượt tải còn lại
        </Typography>
        <Box mt={4}>
          <PackageAccountCard
            userPackage={packageHistory?.user_package}
            userDownload={packageHistory?.user_download}
          />
        </Box>
      </Box>

      <Box mt={6}>
        <Typography component={'h3'} fontSize={'1.75rem'} fontWeight={600}>
          Lịch sử mua gói
        </Typography>
        <Box mt={2}>
          <HistoryTable userPaymentList={packageHistory?.user_payment} />
        </Box>
      </Box>
    </Box>
  )
}
