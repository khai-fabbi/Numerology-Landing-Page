import { yupResolver } from '@hookform/resolvers/yup'
import SearchIcon from '@mui/icons-material/Search'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  InputLabel,
  MenuItem,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { type ReactElement, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import * as yup from 'yup'

import { IconCalendar, IconClock } from '@/components/icon'
import { Loading } from '@/components/loading'
import { ModalShowImageTuVi } from '@/components/modal'
import { useToggle } from '@/hooks'
import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import { SEX_LABEL } from '@/utils/constant'

import numerologyApi from '../api/numerologyApi'

const schema = yup.object().shape({
  full_name: yup.string().required('Vui lòng nhập tên'),
  sex: yup.string().required('Vui lòng chọn giới tính'),
  birth_day: yup
    .date()
    .required('Vui lòng chọn ngày sinh')
    .nullable()
    .typeError('Sai định dạng ngày sinh')
    .min(
      dayjs(new Date('1900-01-01')),
      'Ngày sinh lớn hơn 1900 và nhỏ hơn 2050'
    )
    .max(
      dayjs(new Date('2050-01-01')),
      'Ngày sinh lớn hơn 1900 và nhỏ hơn 2050'
    ),
  birth_time: yup.string().required('Vui lòng chọn giờ sinh'),
})

interface FormValue {
  birth_day: string
  sex?: '1' | '2'
  full_name: string
  birth_time?: string
}
const initialFormValue: FormValue = {
  birth_day: '',
  full_name: '',
  birth_time: '',
}
const Page: NextPageWithLayout = () => {
  const [open, toggleModal] = useToggle(false)
  const [horoscopes, setHoroscopes] = useState<string>()
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormValue>({
    resolver: yupResolver(schema),
    defaultValues: initialFormValue,
  })
  const submitForm = async (formValue: FormValue) => {
    const formDataSend = {
      ...formValue,
      birth_day: dayjs(formValue.birth_day).format('DDMMYYYY'),
      // birth_time: dayjs(formValue.birth_time).format('HH:mm'),
    }
    try {
      const response = await numerologyApi.getLaso(formDataSend)
      setHoroscopes(response.data.horoscopes)
    } catch (error) {
      toast.error('Đã có lỗi nhỏ xảy ra ! Vui lòng thử lại.')
    }
  }

  return (
    <>
      <Box className="bg-account-page" py={8}>
        <Loading isOpen={isSubmitting} />
        <Container maxWidth={false}>
          <Typography
            component={'h2'}
            fontSize={'3rem'}
            fontWeight={700}
            textAlign={'center'}
            fontFamily={'var(--font-philosopher)'}
          >
            Tra cứu tử vi
          </Typography>
          <Grid container spacing={4} mt={2}>
            <Grid item xs={12} md={5}>
              <Box component={'form'} onSubmit={handleSubmit(submitForm)}>
                <Box display={'flex'} flexDirection={'column'} rowGap={2}>
                  <Controller
                    name="full_name"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        rowGap={0.5}
                      >
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
                            error?.message
                            // errors.full_name
                            //   ? (errors.full_name?.message as unknown as string)
                            //   : ''
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
                      fieldState: { invalid, error },
                    }) => (
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        rowGap={0.5}
                      >
                        <InputLabel htmlFor="sex-id">Giới tính</InputLabel>
                        <TextField
                          id="sex-id"
                          placeholder="Giới tính"
                          select
                          onChange={onChange}
                          value={value || ''}
                          error={invalid}
                          helperText={error?.message}
                          SelectProps={{
                            MenuProps: {
                              disableScrollLock: true,
                            },
                            displayEmpty: true,
                            renderValue: (selected) => {
                              if (!selected) {
                                return (
                                  <span
                                    style={{ color: '#66768E', opacity: 0.5 }}
                                  >
                                    Giới tính
                                  </span>
                                )
                              }
                              return SEX_LABEL.find((x) => x.value === selected)
                                ?.label
                            },
                          }}
                        >
                          {SEX_LABEL.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                      </Box>
                    )}
                  />
                  <Controller
                    name="birth_day"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        rowGap={0.5}
                      >
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
                          value={value || null}
                          componentsProps={{
                            openPickerIcon: IconCalendar,
                            textField: {
                              id: 'date-birthday-id',
                              error: invalid,
                              helperText: error?.message,
                            },
                          }}
                        />
                      </Box>
                    )}
                  />
                  <Controller
                    name="birth_time"
                    control={control}
                    render={({
                      field: { onChange, value },
                      fieldState: { invalid, error },
                    }) => (
                      <Box
                        display={'flex'}
                        flexDirection={'column'}
                        rowGap={0.5}
                      >
                        <InputLabel htmlFor="birth_time-id">
                          Giờ sinh
                        </InputLabel>
                        <TimePicker
                          value={value || null}
                          slots={{
                            openPickerIcon: IconClock,
                          }}
                          // slotProps={{
                          //   actionBar: {
                          //     actions: ['clear'],
                          //   },
                          //   field: {
                          //     clearable: true,
                          //   },
                          // }}
                          // defaultValue={dayjs(new Date())}
                          views={['hours', 'minutes']}
                          format="HH:mm"
                          ampm={false}
                          onChange={onChange}
                          componentsProps={{
                            textField: {
                              id: 'birth_time-id',
                              placeholder: 'hh:mm',
                              error: invalid,
                              helperText: error?.message,
                            },
                          }}
                        />
                      </Box>
                    )}
                  />

                  <Button
                    sx={{ flex: 1, maxWidth: 458, mt: 1 }}
                    type="submit"
                    size="large"
                    color="primary"
                    variant="contained"
                    startIcon={<SearchIcon />}
                  >
                    Tra Cứu Tử Vi
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={7}>
              {horoscopes ? (
                <Tooltip title="Click để xem chi tiết" placement="top">
                  <Card onClick={toggleModal}>
                    <CardActionArea>
                      <CardMedia component="img" src={horoscopes} alt="la so" />
                      <CardContent>
                        <Typography gutterBottom variant="h5">
                          Click để xem chi tiết
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </Tooltip>
              ) : (
                <Typography>Vui lòng nhập thông tin để tra cứu.</Typography>
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
      <ModalShowImageTuVi
        open={open}
        handleClose={toggleModal}
        src={horoscopes}
      />
    </>
  )
}
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main meta={<Meta title="Tra cứu tử vi" description="Tra cứu tử vi" />}>
      {page}
    </Main>
  )
}

export default Page
