import { yupResolver } from '@hookform/resolvers/yup'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchIcon from '@mui/icons-material/Search'
import {
  Autocomplete,
  Box,
  Button,
  Container,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'
import type { Dayjs } from 'dayjs'
import dayjs from 'dayjs'
import { useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import { IconCalendar, IconTwoRhombus } from '@/components/icon'
import type { CountryType } from '@/models'
import { countries, SEX_LABEL } from '@/utils/constant'
import { searchSchema } from '@/utils/schema'

import { CommentForNumerology } from './parts'

interface FormValue {
  name: string
  sex: string
  birthDay: Dayjs | null | undefined
  phoneNumber: string
}
export default function LookUpNumerology() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValue>({
    resolver: yupResolver(searchSchema),
    defaultValues: {
      name: '',
      sex: 'M',
      birthDay: undefined,
      phoneNumber: '',
    },
    mode: 'onChange',
  })
  const [countryCode, setCountryCode] = useState<CountryType>(
    countries[238] as CountryType
  )
  // eslint-disable-next-line no-console
  const submitForm = (data: FormValue) => console.log(data)

  return (
    <Box className="lookup-numerology" id="tra-cuu" py={4}>
      <Container maxWidth={false}>
        <Grid
          container
          rowGap={4}
          justifyContent={'center'}
          alignItems={'center'}
        >
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
              <img width={'100%'} src="/assets/images/satellite.png" alt="" />
            </Box>
          </Grid>
          <Grid item xs={12} md={7} lg={6}>
            <Box
              mt={1}
              sx={{
                marginLeft: {
                  md: 8,
                },
              }}
            >
              <IconTwoRhombus />
              <Box>
                <Typography className="text-heading">
                  Xem thần số học online
                </Typography>
                <Typography className="text-heading">Aladanh Thành</Typography>
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
                component={'form'}
                mt={3.75}
                maxWidth={'458px'}
                display={'flex'}
                flexDirection={'column'}
                rowGap={2}
                onSubmit={handleSubmit(submitForm)}
              >
                <Controller
                  name="name"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { invalid },
                  }) => (
                    <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                      <InputLabel htmlFor="name-id">
                        Họ tên khai sinh (nên nhập không dấu)
                      </InputLabel>
                      <TextField
                        placeholder="Nhập họ tên"
                        onChange={onChange}
                        value={value}
                        id="name-id"
                        error={invalid}
                        helperText={
                          errors.name
                            ? (errors.name?.message as unknown as string)
                            : ''
                        }
                      />
                    </Box>
                  )}
                />
                <Controller
                  name="sex"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { invalid },
                  }) => (
                    <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                      <InputLabel htmlFor="sex-id">Giới tính</InputLabel>
                      <Select
                        id="sex-id"
                        placeholder="Giới tính"
                        value={value}
                        fullWidth
                        error={invalid}
                        onChange={onChange}
                        MenuProps={{
                          disableScrollLock: true,
                        }}
                      >
                        {SEX_LABEL.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </Box>
                  )}
                />
                <Controller
                  name="birthDay"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { invalid },
                  }) => (
                    <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                      <InputLabel htmlFor="date-birthday-id">
                        Ngày/tháng/năm sinh dương lịch
                      </InputLabel>
                      <DatePicker
                        format="DD/MM/YYYY"
                        slots={{
                          openPickerIcon: IconCalendar,
                        }}
                        maxDate={dayjs(new Date('2050-01-01'))}
                        minDate={dayjs(new Date('1900-01-01'))}
                        onChange={onChange}
                        value={value || ''}
                        componentsProps={{
                          openPickerIcon: IconCalendar,
                          textField: {
                            id: 'date-birthday-id',
                            error: invalid,
                            helperText: errors.birthDay
                              ? (errors.birthDay?.message as unknown as string)
                              : '',
                          },
                        }}
                      />
                    </Box>
                  )}
                />

                <Controller
                  name="phoneNumber"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { invalid },
                  }) => (
                    <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
                      <InputLabel htmlFor="phone-id">
                        Nhập số điện thoại
                      </InputLabel>
                      <TextField
                        id="phone-id"
                        inputMode="numeric"
                        type="number"
                        value={value}
                        onChange={onChange}
                        placeholder="Nhập số điện thoại"
                        error={invalid}
                        helperText={
                          errors.phoneNumber
                            ? (errors.phoneNumber?.message as unknown as string)
                            : ''
                        }
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <Autocomplete
                                id="country-select"
                                sx={{
                                  width: {
                                    xs: 150,
                                    md: 215,
                                  },
                                }}
                                options={countries}
                                value={countryCode}
                                onChange={(_: any, newValue: CountryType) => {
                                  setCountryCode(newValue)
                                }}
                                autoHighlight
                                disableClearable
                                getOptionLabel={(option) => option.label}
                                popupIcon={
                                  <KeyboardArrowDownIcon
                                    sx={{ color: '#fff' }}
                                  />
                                }
                                renderOption={(props, option) => (
                                  <Box
                                    component="li"
                                    sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                                    {...props}
                                  >
                                    <img
                                      loading="lazy"
                                      width="20"
                                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                                      alt=""
                                    />
                                    {option.label} ({option.code}) +
                                    {option.phone}
                                  </Box>
                                )}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    className="select-code-phone"
                                    inputProps={{
                                      ...params.inputProps,
                                      autoComplete: 'new-password', // disable autocomplete and autofill
                                    }}
                                  />
                                )}
                              />
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Box>
                  )}
                />

                <Button
                  sx={{ mt: 2 }}
                  type="submit"
                  size="large"
                  color="primary"
                  variant="contained"
                  startIcon={<SearchIcon />}
                >
                  Tra Cứu Ngay
                </Button>
              </Box>
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
          <Grid item xs={12} mt={4}>
            <CommentForNumerology />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
