import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { animated, useSpring } from '@react-spring/web'
import React from 'react'

import { IconCheck } from '@/components/icon'
import { formatNumberDE } from '@/utils/helpers'

export default function Banner() {
  const viewAnimated = useSpring({
    num: 1123256,
    from: { num: 0 },
  })
  const totalMemberAnimate = useSpring({
    num: 23256,
    from: { num: 0 },
  })
  const publicationReportAnimate = useSpring({
    num: 23256,
    from: { num: 0 },
  })
  const opacityAnimate = useSpring({
    from: {
      opacity: 0,
      x: 500,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  })
  const AnimatedTypography = animated(Typography)
  return (
    <Box
      className="banner-wrapper"
      sx={{
        position: 'relative',
        py: {
          xs: 6,
          lg: 12,
        },
        overflow: 'hidden',
      }}
      minHeight={'calc(100vh - var(--header-height))'}
    >
      <Container maxWidth={false}>
        <Grid
          container
          columnSpacing={2}
          rowGap={4}
          alignItems={'center'}
          justifyContent={'center'}
        >
          <Grid item xs={12} md={7} lg={6}>
            <Box display={'flex'} flexDirection={'column'} rowGap={'20px'}>
              <Typography sx={{ fontWeight: 500, fontSize: '1.375rem' }}>
                Trải nghiệm Ngành Khoa Học Những Con Số cùng
              </Typography>
              <Typography
                sx={{
                  marginTop: '-10px',
                }}
                className="name-teacher-heading"
              >
                Mr. Hoàng Đông
              </Typography>
              <Box display={'flex'} flexDirection={'column'} rowGap={1}>
                <Box display={'flex'} columnGap={1.5} alignItems={'center'}>
                  <IconCheck />
                  <Typography fontSize={14}>
                    Nhà Sáng Lập Hệ Thống Định Vị Cá Nhân P.P.S
                  </Typography>
                </Box>
                <Box display={'flex'} columnGap={1.5} alignItems={'center'}>
                  <IconCheck />
                  <Typography fontSize={14}>
                    Chuyên Gia & Nhà nghiên cứu ngành Khoa Học Dự Báo
                  </Typography>
                </Box>
              </Box>
              <Box
                display={'flex'}
                sx={{
                  columnGap: {
                    lg: 5,
                    xs: 2,
                  },
                }}
              >
                <Box display={'flex'} flexDirection={'column'} width={1 / 3}>
                  <AnimatedTypography
                    // component={'span'}
                    sx={{
                      fontFamily: 'var(--font-philosopher)',
                      fontSize: '2rem',
                    }}
                    color="primary"
                  >
                    {totalMemberAnimate.num.to(
                      (val) => `${formatNumberDE(val)} +`
                    )}
                  </AnimatedTypography>
                  <Typography
                    component={'span'}
                    sx={{
                      fontSize: '1.375rem',
                    }}
                  >
                    Học viên qua các khóa học
                  </Typography>
                </Box>

                <Box display={'flex'} flexDirection={'column'} width={1 / 3}>
                  <AnimatedTypography
                    // component={'span'}
                    sx={{
                      fontFamily: 'var(--font-philosopher)',
                      fontSize: '2rem',
                    }}
                    color="primary"
                  >
                    {viewAnimated.num.to((val) => formatNumberDE(val))}
                  </AnimatedTypography>
                  <Typography
                    component={'span'}
                    sx={{
                      fontSize: '1.375rem',
                    }}
                  >
                    Lượt tra cứu
                  </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'column'} width={1 / 3}>
                  <AnimatedTypography
                    // component={'span'}
                    sx={{
                      fontFamily: 'var(--font-philosopher)',
                      fontSize: '2rem',
                    }}
                    color="primary"
                  >
                    {publicationReportAnimate.num.to(
                      (val) => `${formatNumberDE(val)} +`
                    )}
                  </AnimatedTypography>
                  <Typography
                    component={'span'}
                    sx={{
                      fontSize: '1.375rem',
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
                component="a"
                href="#tra-cuu"
              >
                Tra cứu các chỉ số của bạn ngay
              </Button>
              <Typography
                fontSize={16}
                fontWeight={500}
                textAlign={'justify'}
                lineHeight={1.5}
              >
                Chúng tôi,{' '}
                <Typography
                  component={'span'}
                  fontWeight={700}
                  fontStyle={'italic'}
                >
                  Trái tim Việt
                </Typography>{' '}
                nguyện ước bằng tất cả tình yêu và nguồn lực của mình xin phép
                được làm{' '}
                <Typography
                  component={'span'}
                  fontWeight={700}
                  fontStyle={'italic'}
                >
                  “Phương tiện chuyên chở”
                </Typography>{' '}
                tất cả mọi người đến với{' '}
                <Typography
                  component={'span'}
                  fontWeight={700}
                  fontStyle={'italic'}
                >
                  Ước Mơ của riêng mình và tỏa sáng như những vì sao lấp lánh
                </Typography>{' '}
                trên bầu trời Trái tim Việt
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <Box
              sx={{
                textAlign: 'center',
                maxWidth: {
                  xs: '550px',
                  lg: '90%',
                },
                margin: '0 auto',
                mr: {
                  lg: -8,
                },
                ml: {
                  lg: 10,
                },
              }}
            >
              <animated.img
                src="./assets/images/banner_hoang_dong.png"
                style={opacityAnimate}
                alt="Banner image"
                width={'100%'}
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
          zIndex: 1,
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
