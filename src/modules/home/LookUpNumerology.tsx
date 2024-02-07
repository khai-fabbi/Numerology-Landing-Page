import { Box, Container, Grid, Typography } from '@mui/material'

import { SearchNumerologyForm } from '@/components/form'

import { CommentForNumerology } from './parts'

export default function LookUpNumerology() {
  return (
    <Box className="lookup-numerology" id="tra-cuu" py={4}>
      <Container maxWidth={false}>
        <Grid
          container
          rowGap={4}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Grid item xs={12} md={7} lg={6}>
            <Box
              sx={{
                marginTop: 1,
                marginLeft: {
                  md: 8,
                },
              }}
            >
              <SearchNumerologyForm
                title="Mr. Hoàng Đông"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5} lg={6}>
            <Box
              maxWidth={'490px'}
              margin={'0 auto'}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <img width={'100%'} src="/assets/images/banner_hoang_dong_1.png" alt="" />
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
                  bạn sẽ có bị chi phối bởi cả hai bộ số P.P.<span className="text-color-red">n</span>.S. Bạn nên tra
                  cứu cả 2 để biết thêm chi tiết, và liên hệ với Chuyên Viên tư
                  vấn P.P.<span className="text-color-red">n</span>.S của chúng tôi để được hiểu rõ hơn về 2 trường năng
                  lượng sẽ ảnh hưởng lên cuộc sống của mình.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} mt={4}>
            <CommentForNumerology />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
