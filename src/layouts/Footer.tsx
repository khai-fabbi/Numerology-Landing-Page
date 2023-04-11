import { Box, Container, Grid, IconButton, Typography } from '@mui/material'

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
  return (
    <Box component={'footer'}>
      <Box bgcolor={'var(--bg-secondary)'} paddingTop={5.5} paddingBottom={7.5}>
        <Container maxWidth={false}>
          <Grid container columnSpacing={3}>
            <Grid item xs={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 3 }}>
                <Box>
                  <img src="/numerology_logo.svg" alt="Logo" />
                </Box>
                <Typography variant="body2">
                  Công cụ được tùy chỉnh theo ngày sinh và tên chính xác của bạn
                  … Vì vậy, hãy lưu ý: thông tin bạn sắp nhận được có thể khiến
                  bạn bị sốc.
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: -1.5,
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
            <Grid item xs={2}>
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
                    Chương trình Affiliate
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
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
                  }}
                >
                  <Box width={'50%'}>
                    <Box
                      component={'iframe'}
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10631.852165994946!2d105.85775363263471!3d21.02202322369023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abebf87e0011%3A0x647af200da508d2b!2zTmjDoCBow6F0IEzhu5tuIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1681199970435!5m2!1svi!2s"
                      width={'100%'}
                      height={'100%'}
                      borderRadius={'5px'}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></Box>
                  </Box>
                  <Box
                    width={'50%'}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      rowGap: 1,
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
                        Địa chỉ: 123 Hai Bà Trưng, Hà Nội
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
                        Điện thoại: 123 456 789
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
                        Liên hệ hợp tác: admin@gmail.com
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
        ©© 2023 aladanhthanh.com | All rights reserved.| DMCA protected.
      </Typography>
    </Box>
  )
}
