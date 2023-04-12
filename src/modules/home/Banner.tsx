import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'

import { IconCheck } from '@/components/icon'

export default function Banner() {
  return (
    <Box
      className="banner-wrapper"
      sx={{ position: 'relative' }}
      minHeight={'calc(100vh - var(--header-height))'}
      py={'95px'}
    >
      <Container maxWidth={false}>
        <Grid container columnSpacing={1} rowGap={4}>
          <Grid item xs={12} lg={6}>
            <Box display={'flex'} flexDirection={'column'} rowGap={'20px'}>
              <Typography sx={{ fontWeight: 500, fontSize: '1.375rem' }}>
                Tra Cứu Thần Số Học Cùng Thầy
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'var(--philosopher-font)',
                  fontSize: '68px',
                  lineHeight: '70px',
                  marginTop: '-10px',
                }}
              >
                Aladanh Thành
              </Typography>
              <Box display={'flex'} flexDirection={'column'} rowGap={1}>
                <Box display={'flex'} columnGap={1.5} alignItems={'center'}>
                  <IconCheck />
                  <Typography fontSize={14}>
                    Nhà sáng lập hệ thống thần số học được ứng dụng phổ biến tại
                    Việt Nam
                  </Typography>
                </Box>
                <Box display={'flex'} columnGap={1.5} alignItems={'center'}>
                  <IconCheck />
                  <Typography fontSize={14}>
                    Luận giải chi tiết – chính xác – tin cậy
                  </Typography>
                </Box>
              </Box>
              <Box display={'flex'} columnGap={5}>
                <Box display={'flex'} flexDirection={'column'} width={1 / 3}>
                  <Typography
                    component={'span'}
                    sx={{
                      fontFamily: 'var(--philosopher-font)',
                      fontSize: 32,
                    }}
                    color="primary"
                  >
                    23.256 +
                  </Typography>
                  <Typography
                    component={'span'}
                    sx={{
                      fontSize: 22,
                    }}
                  >
                    Học viên qua các khóa học
                  </Typography>
                </Box>

                <Box display={'flex'} flexDirection={'column'} width={1 / 3}>
                  <Typography
                    component={'span'}
                    sx={{
                      fontFamily: 'var(--philosopher-font)',
                      fontSize: 32,
                    }}
                    color="primary"
                  >
                    1.123.256
                  </Typography>
                  <Typography
                    component={'span'}
                    sx={{
                      fontSize: 22,
                    }}
                  >
                    Lượt tra cứu
                  </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} width={1 / 3}>
                  <Typography
                    component={'span'}
                    sx={{
                      fontFamily: 'var(--philosopher-font)',
                      fontSize: 32,
                    }}
                    color="primary"
                  >
                    23.256 +
                  </Typography>
                  <Typography
                    component={'span'}
                    sx={{
                      fontSize: 22,
                    }}
                  >
                    Báo cáo xuất bản
                  </Typography>
                </Box>
              </Box>
              <Button
                variant="contained"
                color="primary"
                size="large"
                sx={{ width: 'fit-content' }}
                endIcon={<ArrowForwardIcon fontSize="large" />}
              >
                Tra cứu các chỉ số của bạn ngay
              </Button>
              <Typography fontSize={14} textAlign={'justify'}>
                Những nghiên cứu về Thần số học của Thầy Aladanh Thành đang mang
                đến một làn sóng tích cực trong đại chúng Việt Nam. Không chỉ là
                các phân tích để giúp mỗi người tìm ra những tiềm năng thực sự
                và trả lời được câu hỏi mình là ai trong cuộc đời này, những
                nghiên cứu sâu và rộng khắp các lĩnh vực của thầy còn giúp hàng
                triệu người lựa chọn được con đường đi đúng đắn, giúp cho những
                người làm kinh doanh tìm ra định hướng phù hợp trong chiến lược
                và trong quản trị doanh nghiệp, quan hệ khách hàng.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box sx={{ textAlign: 'center', ml: 12 }}>
              <img
                src="./assets/images/adalash_banner.png"
                alt="Banner image"
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: 'absolute',
          right: 0,
          top: '100%',
          transform: 'translateY(-50%)',
          opacity: {
            xs: 0.6,
            lg: 1,
          },
        }}
      >
        <img src="/assets/images/zodiac.png" alt="" />
      </Box>
    </Box>
  )
}
