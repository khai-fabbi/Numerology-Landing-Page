import { Box, Container, Grid, IconButton, Typography } from '@mui/material'
import Image from 'next/image'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import * as React from 'react'

import {
  IconEmail,
  IconFacebook,
  IconHome,
  IconInstagram,
  IconPhone,
  IconTiktok,
  IconTwitter,
  IconYoutube,
} from '@/components/icon'

const LIST_SOCIAL = [
  {
    id: 1,
    icon: <IconFacebook />,
    to: '#',
  },
  {
    id: 2,
    icon: <IconTwitter />,
    to: '#',
  },
  {
    id: 3,
    icon: <IconInstagram />,
    to: '#',
  },
  {
    id: 4,
    icon: <IconTiktok />,
    to: '#',
  },
  {
    id: 5,
    icon: <IconYoutube />,
    to: '#',
  },
]
export default function Footer() {
  const router = useRouter()
  return (
    <Box component={'footer'}>
      <Box bgcolor={'var(--bg-secondary)'} paddingTop={5.5} paddingBottom={7.5}>
        <Container maxWidth={false}>
          <Grid container columnSpacing={3}>
            <Grid item xs={12} sm={6} lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 1 }}>
                {/* <Box>
                  <img src="/favicon.svg" alt="Logo" />
                </Box> */}
                <NextLink href={'/'} passHref legacyBehavior>
                  <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    sx={{
                      my: 0.5,
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        filter: 'brightness(0.75)',
                        transition: 'all ease 0.2s',
                      },
                    }}
                  >
                    <Image
                      width={65}
                      height={65}
                      src={`${router.basePath}/logo_footer.png`}
                      alt="Logo Footer"
                    />
                    <Image
                      width={230}
                      height={40}
                      src={`${router.basePath}/khoa-hoc-con-so.png`}
                      alt="khoa hoc con so"
                    />
                  </Typography>
                </NextLink>
                <Typography variant="body2" textAlign={'justify'}>
                  Chúng tôi,{' '}
                  <Typography color={'#F00'} component={'span'}>
                    Trái Tim Việt
                  </Typography>{' '}
                  nguyện ước bằng tất cả tình yêu và nguồn lực của mình xin phép
                  được làm{' '}
                  <Typography
                    component={'span'}
                    fontWeight={'600'}
                    fontStyle={'italic'}
                  >
                    “
                    <span className="text-color-orange">
                      {' '}
                      phương tiện chuyên chở
                    </span>
                    ”
                  </Typography>{' '}
                  tất cả mọi người đến với Ước Mơ của Riêng mình và tỏa sáng như
                  những vì sao lấp lánh trên bầu trời Trái Tim Việt.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  {LIST_SOCIAL.map(({ id, icon, to }) => (
                    <Box key={id} component={'a'} href={to}>
                      <IconButton
                        sx={{
                          p: 1.5,
                          '&:hover': {
                            transform: 'scale(1.3)',
                            transition: 'all ease 0.3s',
                            filter: 'brightness(0.6)',
                          },
                        }}
                      >
                        {icon}
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} lg={2}>
              <Box mt={2.5}>
                <Typography variant="h4" component="h4">
                  Thông tin chung
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    rowGap: '10px',
                    mt: 2.5,
                  }}
                >
                  <Typography
                    variant="body2"
                    component="a"
                    color={'inherit'}
                    width={'fit-content'}
                    href="#"
                    sx={{
                      '&:hover': {
                        color: 'var(--text-main)',
                        transition: 'all ease 0.2s',
                      },
                    }}
                  >
                    Chính sách bảo mật
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    color={'inherit'}
                    width={'fit-content'}
                    href="#"
                    sx={{
                      '&:hover': {
                        color: 'var(--text-main)',
                        transition: 'all ease 0.2s',
                      },
                    }}
                  >
                    Điều khoản sử dụng
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    color={'inherit'}
                    width={'fit-content'}
                    href="#"
                    sx={{
                      '&:hover': {
                        color: 'var(--text-main)',
                        transition: 'all ease 0.2s',
                      },
                    }}
                  >
                    Kiến thức
                  </Typography>
                  <Typography
                    variant="body2"
                    component="a"
                    color={'inherit'}
                    width={'fit-content'}
                    href="#"
                    sx={{
                      '&:hover': {
                        color: 'var(--text-main)',
                        transition: 'all ease 0.2s',
                      },
                    }}
                  >
                    Liên hệ
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box mt={2.5}>
                <Typography variant="h4" component="h4">
                  Liên hệ với chúng tôi
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    rowGap: 2.5,
                    mt: 2.5,
                    alignItems: 'center',
                    columnGap: 0.5,
                    flexWrap: {
                      xs: 'wrap',
                      sm: 'nowrap',
                      lg: 'nowrap',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: {
                        xs: '100%',
                        lg: 'auto',
                      },
                    }}
                  >
                    <Box
                      component={'iframe'}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.898505976811!2d106.70360969834397!3d10.819078648029398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528ecc0a09fa9%3A0xbb907c9cd7f1781a!2zQ2jDuWEgUGjDoXAgUXVhbmcgKFBo4bqtdCBnacOhbyBOZ3V5w6puIHRodeG7tyBUaGVyYXZhZGEp!5e0!3m2!1svi!2s!4v1705593328693!5m2!1svi!2s"
                      width={'100%'}
                      minWidth={'250px'}
                      height={'100%'}
                      borderRadius={'5px'}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></Box>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: 1,
                      width: {
                        xs: '100%',
                        lg: '50%',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <IconButton>
                        <IconHome />
                      </IconButton>

                      <Typography variant="body2">
                        Địa chỉ: : 215/26 Nguyễn Xí P.13 Bình Thạnh, TP. HCM
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <IconButton>
                        <IconPhone />
                      </IconButton>

                      <Typography variant="body2">
                        Điện thoại: 0938.451.893
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <IconButton>
                        <IconEmail />
                      </IconButton>

                      <Typography variant="body2">
                        Email: info@vietheart.com.vn
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Typography
        variant="body2"
        sx={{
          textAlign: 'center',
          paddingTop: 3,
          paddingBottom: 2.5,
        }}
      >
        ©© 2023 hoangdong.com | All rights reserved.| DMCA protected.
      </Typography>
    </Box>
  )
}
