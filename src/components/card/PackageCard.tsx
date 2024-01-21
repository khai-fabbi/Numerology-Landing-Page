import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { Box, Button, Divider, Paper, styled, Typography } from '@mui/material'
import * as React from 'react'

import { philosopher } from '@/styles/fonts'
import { formatNumberDE } from '@/utils/helpers'

const StackItem = styled(Paper)(({ theme }) => ({
  width: 'fit-content',
  backgroundColor: '#012745',
  padding: theme.spacing(1),
  color: 'white',
  boxShadow: 'none',
}))
export interface IPackageCardProps {
  onSubmit?: () => void
}

export default function PackageCard({ onSubmit }: IPackageCardProps) {
  return (
    <Box
      sx={{
        borderRadius: 1.25,
        backgroundColor: '#022233',
        padding: 1,
        boxShadow: '0px 4px 20px 0px rgba(1, 8, 12, 0.17)',
      }}
    >
      <Box
        sx={{
          border: '1px solid #9D6A4E',
          padding: 2.5,
        }}
      >
        <StackItem sx={{ mt: 1.5 }}>
          Gói chiến binh{' '}
          <Typography component={'span'} color={'#00ADDD'}>
            BK 28
          </Typography>
        </StackItem>

        <Box mt={2.5} sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: '700',
              color: (theme) => theme.palette.primary.main,
              fontFamily: philosopher.style,
            }}
          >
            {formatNumberDE(800000)}
          </Typography>
          <Typography
            sx={{
              textDecorationLine: 'line-through',
              mb: 0.5,
            }}
          >
            {formatNumberDE(2400000)}
          </Typography>
        </Box>
        <Divider
          sx={{
            height: 2,
            my: 2.5,
            background:
              'linear-gradient(270deg, rgba(246, 116, 10, 0.00) 0%, #F96A2D 49.48%, rgba(209, 128, 62, 0.00) 100%)',
            borderBottom: 'none',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.25 }}>
          <FileDownloadOutlinedIcon
            fontSize="large"
            sx={{ color: '#00ADDD' }}
          />
          <Typography component={'span'} color={'rgba(255, 255, 255, 0.40)'}>
            Số lượt tải{' '}
            <Typography component={'span'} ml={0.5} color="white">
              3 lượt
            </Typography>
          </Typography>
        </Box>
        <Typography
          my={5}
          textAlign={'center'}
          color={'rgba(255, 255, 255, 0.40)'}
          minHeight={'50px'}
        >
          Được tặng khi được kết nạp chính thức biệt đội BK28
        </Typography>
        <Box textAlign={'center'} mb={4}>
          <Button
            variant="outlined"
            sx={{ minWidth: '10rem' }}
            onClick={() => onSubmit?.()}
          >
            Mua gói
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
