import HistoryIcon from '@mui/icons-material/History'
import { Box, Divider, Grid, Tooltip, Typography } from '@mui/material'
import * as React from 'react'

import { ButtonBank } from '@/components/button'
import { ModalInfo } from '@/components/modal'
import { useToggle } from '@/hooks'
import { convertToVND } from '@/utils/helpers'

import { TextCopy, TitleItem } from './parts'

export default function BankInfo() {
  const [isOpenQR, toggleModalQR] = useToggle(false)
  return (
    <Box
      sx={{
        p: {
          xs: 3,
          sm: 4,
        },
        bgcolor: '#F6F7FB',
        borderRadius: 5,
        boxShadow: '0 15px 25px -5px rgba(211, 211, 211, 0.25)',
      }}
    >
      <Box display="flex" alignItems="center">
        <HistoryIcon sx={{ width: 32, height: 32 }} color="primary" />
        <Typography
          component={'h3'}
          color="primary"
          variant="h3"
          sx={{ ml: 1 }}
        >
          Vui lòng thanh toán để hoàn tất
        </Typography>
      </Box>

      {/* bank info */}

      <Box mt={2}>
        <Typography variant="h4" fontWeight="500" color="text.secondary" mb={2}>
          Chọn ngân hàng để hiển thị số tài khoản tương ứng:
        </Typography>
        <ButtonBank>
          <img src="https://kt.city/static/logo-vcb-text.svg" alt="" />
        </ButtonBank>
      </Box>
      <Box mt={2} bgcolor="common.white" borderRadius={2} p={2.5}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TitleItem>SỐ TIỀN CẦN THANH TOÁN</TitleItem>
            <TextCopy
              title={convertToVND(999000)}
              sx={{ fontWeight: 600, fontSize: 24, color: '#23C27F' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TitleItem>NỘI DUNG CHUYỂN KHOẢN</TitleItem>
            <TextCopy
              title="PAYKTIRL"
              sx={{
                fontWeight: 600,
                fontSize: 24,
                color: 'error.main',
              }}
            />
          </Grid>
          <Grid xs={12} item mt={1}>
            <Box
              sx={{
                py: 1.25,
                px: 2,
                bgcolor: 'grey.100',
                fontWeight: 500,
                borderRadius: 2,
              }}
              color="text.secondary"
            >
              Chuyển đúng số tiền & nội dung giúp đơn hàng được kích hoạt tự
              động !!!
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>Mã QR</TitleItem>
          <Tooltip title="Click để xem mã QR">
            <Box
              sx={{
                mt: 1.25,
                height: 144,
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={toggleModalQR}
            >
              <Box
                component="img"
                src="https://cafetaichinh.com/wp-content/uploads/2021/06/CAFETAICHINH-QR-PIC.jpg"
                alt="Ma QR"
                sx={{
                  height: '100%',
                  borderRadius: '6px',
                  transition: 'all ease 0.2s',
                  boxShadow: 1,
                  '&:hover': {
                    filter: 'brightness(.95)',
                  },
                }}
              />
            </Box>
          </Tooltip>
        </Box>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>SỐ TÀI KHOẢN</TitleItem>
          <TextCopy
            title="033222323"
            sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
          />
        </Box>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>TÊN TÀI KHOẢN</TitleItem>
          <TextCopy
            title="VU HUU DONG"
            sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
          />
        </Box>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>CHI NHÁNH</TitleItem>
          <TextCopy
            title="Thành phố Hồ Chí Minh"
            sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
          />
        </Box>
      </Box>
      <ModalInfo open={isOpenQR} handleClose={toggleModalQR}>
        <Box
          component={'img'}
          src="https://cafetaichinh.com/wp-content/uploads/2021/06/CAFETAICHINH-QR-PIC.jpg"
          width={'100%'}
        />
      </ModalInfo>
    </Box>
  )
}
