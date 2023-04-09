import {
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  TextField,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

import { IconCalendar, IconTwoRhombus } from '@/components/icon'

import CommentForNumerology from './parts/CommentForNumerology'

const SEX_LABEL = [
  {
    value: 'M',
    label: 'Male',
  },
  {
    value: 'F',
    label: 'Female',
  },
]
export default function LookUpNumerology() {
  return (
    <Box className="lookup-numerology" py={4}>
      <Container maxWidth={false}>
        <Grid container rowGap={4}>
          <Grid item xs={12} lg={6}>
            <Box sx={{ textAlign: 'center' }}>
              <img src="/assets/images/satellite.png" alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Box
              mt={1}
              sx={{
                marginLeft: {
                  lg: 8,
                },
              }}
            >
              <IconTwoRhombus />
              <Box>
                <Typography
                  sx={{
                    fontFamily: 'var(--philosopher-font)',
                    fontSize: 32,
                    lineHeight: '36px',
                  }}
                >
                  Xem thần số học online
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'var(--philosopher-font)',
                    fontSize: 32,
                    lineHeight: '36px',
                  }}
                >
                  Aladanh Thành
                </Typography>
                <Box mt={2}>
                  <Typography fontSize={14}>
                    - Tính toán hàng chục nghìn phép tính thần số phức tạp cực
                    nhanh chỉ sau 1 giây để cho ra các tổ hợp chỉ số mà không hề
                    sai sót như tính tay.
                  </Typography>
                  <Typography fontSize={14} mt={0.5}>
                    - Luận giải kết quả tra cứu được cá nhân hóa dựa vào nghiên
                    cứu chuyên sâu của các chuyên gia Thần số học.
                  </Typography>
                </Box>
              </Box>
              <Box
                mt={3.75}
                maxWidth={'458px'}
                display={'flex'}
                flexDirection={'column'}
                rowGap={2}
              >
                <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                  <InputLabel htmlFor="name-id">
                    Họ tên khai sinh (nên nhập không dấu)
                  </InputLabel>
                  <TextField placeholder="Nhập họ tên" id="name-id" />
                </Box>
                <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                  <InputLabel htmlFor="sex-id">Giới tính</InputLabel>
                  <TextField
                    id="sex-id"
                    select
                    placeholder="Giới tính"
                    defaultValue={'M'}
                    fullWidth
                  >
                    {SEX_LABEL.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                  <InputLabel htmlFor="date-birthday-id">
                    Ngày/tháng/năm sinh dương lịch
                  </InputLabel>
                  <DatePicker
                    format="DD/MM/YYYY"
                    disableFuture
                    slots={{
                      openPickerIcon: IconCalendar,
                    }}
                    slotProps={{
                      field: {
                        id: 'date-birthday-id',
                      },
                    }}
                  />
                </Box>
                <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                  <InputLabel htmlFor="phone-id">Nhập số điện thoại</InputLabel>
                  <TextField
                    id="phone-id"
                    inputMode="numeric"
                    type="number"
                    placeholder="Nhập số điện thoại"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ fontSize: 30 }}>
                          <Typography color={'#fff'}>+84 |</Typography>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                <Button
                  type="submit"
                  size="large"
                  color="primary"
                  variant="contained"
                >
                  Tra Cứu Ngay
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box
              maxWidth={'1084px'}
              mx={'auto'}
              p={4}
              border={'1px solid #222F36'}
              borderRadius={'5px'}
            >
              <Typography
                sx={{
                  fontFamily: 'var(--philosopher-font)',
                  fontSize: 32,
                  lineHeight: '36px',
                }}
                component={'h3'}
              >
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
                  bạn sẽ có sự xáo trộn từ cả 2 ngày sinh này. Bạn nên tra cứu
                  cả 2 để biết thêm chi tiết, tuy nhiên kết quả sẽ thiên về ngày
                  sinh dương lịch thật!
                </Typography>
                <Typography>
                  Tên thường dùng là tên mà mọi người thường gọi bạn hoặc một
                  danh xưng bạn thường dùng, tên này sẽ bù trừ vào biểu đồ ngày
                  sinh của bạn. Nếu bạn không có tên thường dùng, hệ thống sẽ tự
                  lấy họ tên khai sinh của bạn để tính toán trong biểu đồ tổng
                  hợp.
                </Typography>
                <Typography>
                  Số chủ đạo tuy rất quan trọng nhưng không thể hiện hết thông
                  tin thần số học của bạn. Để xem kết quả tra cứu chính xác, hãy
                  kết hợp tất cả các chỉ số mà chúng tôi tính toán!
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} mt={'60px'}>
            <CommentForNumerology />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
