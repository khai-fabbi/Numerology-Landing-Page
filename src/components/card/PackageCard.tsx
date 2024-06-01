import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import { Box, Button, Divider, Typography } from '@mui/material'
import * as React from 'react'

import type { Package } from '@/pages/api/type'
import { philosopher } from '@/styles/fonts'
import { convertToVND } from '@/utils/helpers'

// const StackItem = styled(Paper)(({ theme }) => ({
//   width: 'fit-content',
//   backgroundColor: '#012745',
//   padding: theme.spacing(1),
//   color: 'white',
//   boxShadow: 'none',
// }))
export interface IPackageCardProps {
  packageInfo: Package
  onSubmit?: () => void
}

export default function PackageCard({
  packageInfo,
  onSubmit,
}: IPackageCardProps) {
  return (
    <Box
      sx={{
        borderRadius: 1.25,
        backgroundColor: '#022233',
        padding: 1,
        boxShadow: '0px 4px 20px 0px rgba(1, 8, 12, 0.17)',
        height: '100%',
      }}
    >
      <Box
        sx={{
          border: '1px solid #9D6A4E',
          padding: 2.5,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* <StackItem sx={{ mt: 1.5 }}>
          Gói chiến binh{' '}
          <Typography component={'span'} color={'#00ADDD'}>
            BK 28
          </Typography>
        </StackItem> */}
        {/* <Box>{packageInfo.name}</Box> */}
        <div dangerouslySetInnerHTML={{ __html: packageInfo.name }} />

        <Box mt={2.5} sx={{ display: 'flex', gap: 1, alignItems: 'flex-end' }}>
          <Typography
            sx={{
              fontSize: '2rem',
              fontWeight: '700',
              color: (theme) => theme.palette.primary.main,
              fontFamily: philosopher.style,
            }}
          >
            {convertToVND(packageInfo.price_sale || packageInfo.price)}
          </Typography>
          <Typography
            sx={{
              textDecorationLine: 'line-through',
              mb: 0.5,
            }}
          >
            {packageInfo.price_sale && convertToVND(packageInfo.price)}
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
              {`${packageInfo.number_download} lượt`}
            </Typography>
          </Typography>
        </Box>
        {/* <Typography
          my={5}
          textAlign={'center'}
          color={'rgba(255, 255, 255, 0.40)'}
          minHeight={'50px'}
        >
          {packageInfo.content}
        </Typography> */}
        <div
          style={{ margin: '40px 0', flexGrow: 1 }}
          className="line-clamp-3"
          dangerouslySetInnerHTML={{ __html: packageInfo.content }}
        />
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
