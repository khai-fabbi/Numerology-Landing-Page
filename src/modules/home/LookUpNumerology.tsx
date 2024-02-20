import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material'

import { SearchNumerologyForm } from '@/components/form'

import { FingerprintBiometricsForm, TittlePage } from './parts'

export default function LookUpNumerology() {
  return (
    <Box className="lookup-numerology" id="tra-cuu" py={4}>
      <Container maxWidth={false}>
        <TittlePage isCenter>
          Nhập Chỉ Số Sinh Trắc Vân Tay (Vmit) Của Bạn <br /> Để Liên Kết Với
          P.P.n.S
        </TittlePage>
        <Grid
          container
          mt={2}
          rowGap={4}
          columnSpacing={6}
          justifyContent={'center'}
          // alignItems={'center'}
        >
          <Grid item xs={12} lg={5}>
            <Box mt={10}>
              <Box
                // maxWidth={'490px'}
                margin={'0 auto'}
                sx={{
                  display: {
                    xs: 'none',
                    md: 'flex',
                  },
                  padding: '100px 0 202px 0',
                }}
              >
                <img width={'100%'} src="/assets/images/fly.png" alt="" />
              </Box>
              <Box textAlign={'center'}>
                <Button variant="contained" sx={{ width: '268px' }}>
                  Lưu
                </Button>
              </Box>
              <Box mt={4}>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontSize: '26px',
                    fontWeight: '700',
                  }}
                >
                  Tiếp nhận thông tin VAK
                </Typography>
                <Box display={'flex'} mt={3} columnGap={3}>
                  <TextField
                    sx={{ flex: 1 }}
                    placeholder="V"
                    InputProps={{
                      inputProps: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                    }}
                  />
                  <TextField
                    sx={{ flex: 1 }}
                    placeholder="A"
                    InputProps={{
                      inputProps: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                    }}
                  />
                  <TextField
                    sx={{ flex: 1 }}
                    placeholder="K"
                    InputProps={{
                      inputProps: {
                        style: {
                          textAlign: 'center',
                        },
                      },
                    }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <FingerprintBiometricsForm />
          </Grid>

          <Grid item xs={12} md={7} lg={6}>
            <Box
              sx={{
                marginTop: 1,
                // marginLeft: {
                //   md: 8,
                // },
              }}
            >
              <SearchNumerologyForm title="Mr. Hoàng Đông" />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} lg={6} alignSelf={'center'}>
            <Box
              // maxWidth={'490px'}
              margin={'0 auto'}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <img
                width={'100%'}
                src="/assets/images/banner_hoang_dong_1.png"
                alt=""
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              maxWidth={'1110px'}
              mx={'auto'}
              sx={{
                p: {
                  xs: 2,
                  lg: 4,
                },
              }}
              border={'1px solid #222F36'}
              borderRadius={'5px'}
            >
              <Typography className="text-heading" component={'h3'}>
                Chú thích
              </Typography>
              <Box
                display={'flex'}
                flexDirection={'column'}
                rowGap={2.5}
                mt={2}
              >
                <Typography>
                  Nếu ngày sinh trên giấy tờ (chứng minh thư, bằng lái, khai
                  sinh…) của bạn khác với ngày sinh dương lịch thật thì cuộc đời
                  bạn sẽ có bị chi phối bởi cả hai bộ số P.P.
                  <span className="text-color-red">n</span>.S. Bạn nên tra cứu
                  cả 2 để biết thêm chi tiết, và liên hệ với Chuyên Viên tư vấn
                  P.P.<span className="text-color-red">n</span>.S của chúng tôi
                  để được hiểu rõ hơn về 2 trường năng lượng sẽ ảnh hưởng lên
                  cuộc sống của mình.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
