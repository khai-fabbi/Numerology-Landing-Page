import { Box, Button, Paper, Stack, styled, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'

import { IconPDF } from '@/components/icon'

const StackItem = styled(Paper)(({ theme }) => ({
  width: 'fit-content',
  backgroundColor: '#012745',
  padding: theme.spacing(1),
  color: 'white',
}))
export interface IAccountItemCardProps {
  style?: React.CSSProperties
}

export default function PackageAccountCard({ style }: IAccountItemCardProps) {
  const router = useRouter()
  return (
    <Box
      style={style}
      sx={{
        display: 'flex',
        gap: 1,
        padding: 2.5,
        borderRadius: 1.25,
        border: '1px solid #215261',
        backgroundColor: '#031D2E',
        boxShadow: '0px 4px 20px 0px rgba(1, 8, 12, 0.17)',
      }}
    >
      <Box flex={1} display={'flex'} flexDirection={'column'} gap={1}>
        <Box flex={1}>
          <Typography component={'h5'}>Gói đang sử dụng</Typography>
          <Typography
            component={'span'}
            fontSize={'1.625rem'}
            fontWeight={'600'}
            color={'#00ADDD'}
            mt={0.5}
          >
            Chiến Binh BK28
          </Typography>
          <Typography color={'#F0F8FD'} mt={0.5}>
            <Typography
              component={'span'}
              fontSize={'1.25rem'}
              fontWeight={'500'}
            >
              800.000
            </Typography>
            / 1 gói
          </Typography>
        </Box>
        <Box>
          <Button
            variant="contained"
            onClick={() => router.push('/danh-sach-goi')}
          >
            Mua thêm gói
          </Button>
        </Box>
      </Box>
      <Box flex={1}>
        <Typography component={'h4'} fontSize={'1.25rem'} fontWeight={'600'}>
          Ưu đãi của gói
        </Typography>

        <Stack spacing={1} mt={1.25}>
          <StackItem>
            Được tặng khi gia nhập{' '}
            <Typography component={'span'} color={'#00ADDD'}>
              BK 28
            </Typography>
          </StackItem>
          <StackItem>
            Số lượt tải còn lại:{' '}
            <Typography component={'span'} color={'#00ADDD'}>
              3 lượt
            </Typography>
          </StackItem>
        </Stack>
      </Box>
      <Box flex={1}>
        <Typography component={'h4'} fontSize={'1.25rem'} fontWeight={'600'}>
          Lịch sử lượt tải của gói
        </Typography>
        <Box
          mt={1.25}
          sx={{ display: 'flex', flexDirection: 'column', rowGap: 1.25 }}
        >
          <Box display={'flex'} gap={1.25}>
            <IconPDF />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '2px' }}
            >
              <Typography>File báo cáo thần số học</Typography>
              <Typography
                component={'span'}
                fontSize={'0.75rem'}
                color={'#8E9BAE'}
              >
                12/10/2023
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} gap={1.25}>
            <IconPDF />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '2px' }}
            >
              <Typography>File báo cáo thần số học</Typography>
              <Typography
                component={'span'}
                fontSize={'0.75rem'}
                color={'#8E9BAE'}
              >
                12/10/2023
              </Typography>
            </Box>
          </Box>
          <Box display={'flex'} gap={1.25}>
            <IconPDF />
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '2px' }}
            >
              <Typography>File báo cáo thần số học</Typography>
              <Typography
                component={'span'}
                fontSize={'0.75rem'}
                color={'#8E9BAE'}
              >
                12/10/2023
              </Typography>
            </Box>
          </Box>
        </Box>

        <Typography
          component={'a'}
          sx={{
            display: 'block',
            color: (theme) => theme.palette.primary.main,
            '&:hover': {
              textDecoration: 'underline',
              textUnderlineOffset: 3,
            },
          }}
          href="#"
          mt={2.5}
        >
          Xem tất cả lịch sử tải
        </Typography>
      </Box>
    </Box>
  )
}
