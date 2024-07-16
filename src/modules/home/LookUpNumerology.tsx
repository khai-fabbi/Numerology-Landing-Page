import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import dayjs from 'dayjs'
import { useSession } from 'next-auth/react'
import { Controller, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

import { SearchNumerologyForm } from '@/components/form'
import { Loading } from '@/components/loading'
import numerologyApi from '@/pages/api/numerologyApi'
import type { NumberParam } from '@/pages/api/type'
import { useStore } from '@/store/useStore'
import { searchSchema } from '@/utils/schema'

import { FingerprintBiometricsForm, TittlePage } from './parts'
import { InputSearch } from './parts/FingerprintBiometricsForm'

export type FormSearch = NumberParam
const initialFormValue: FormSearch = {
  birth_day: '',
  sex: '1',
  phone: '',
  full_name: '',
  // birth_time: '',
  job: '',
  l: '',
  r: '',
  r1_1: '',
  r1_2: '',
  r2_1: '',
  r2_2: '',
  r3_1: '',
  r3_2: '',
  r4_1: '',
  r4_2: '',
  r5_1: '',
  r5_2: '',
  l1_1: '',
  l1_2: '',
  l2_1: '',
  l2_2: '',
  l3_1: '',
  l3_2: '',
  l4_1: '',
  l4_2: '',
  l5_1: '',
  l5_2: '',
  eq: '',
  iq: '',
  aq: '',
  cq: '',
  type_iq_1: '',
  type_iq_2: '',
  type_iq_3: '',
  type_iq_4: '',
  type_iq_5: '',
  type_iq_6: '',
  type_iq_7: '',
  type_iq_8: '',
  v: '',
  a: '',
  k: '',
}

export default function LookUpNumerology() {
  const { data: session } = useSession()
  // modal login
  const openModalLogin = useStore((state) => state.openLoginModal)
  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = useForm<FormSearch>({
    resolver: yupResolver(searchSchema),
    defaultValues: initialFormValue,
  })

  const handleSubmitFree = handleSubmit(async (formData: FormSearch) => {
    const formSend = {
      ...formData,
      birth_day: dayjs(formData.birth_day).format('DDMMYYYY'),
    }
    try {
      const response = await numerologyApi.getNumberFreePDF(formSend)
      const blob = new Blob([response], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(blob)
      // window.open(fileURL)
      const link = document.createElement('a')
      link.href = fileURL
      link.setAttribute(
        'download',
        `${formData.full_name.split(' ').join('_')}.pdf`
      )
      document.body.appendChild(link)
      link.click()
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    }
  })
  const handleSubmitDeep = handleSubmit(async (formData: FormSearch) => {
    if (!session?.user) {
      openModalLogin()
      return
    }

    const formSend = {
      ...formData,
      birth_day: dayjs(formData.birth_day).format('DDMMYYYY'),
    }
    try {
      const response = await numerologyApi.getNumberFeePDF(formSend)
      const blob = new Blob([response], { type: 'application/pdf' })
      const fileURL = URL.createObjectURL(blob)
      // window.open(fileURL)
      const link = document.createElement('a')
      link.href = fileURL
      link.setAttribute(
        'download',
        `${formData.full_name.split(' ').join('_')}.pdf`
      )
      document.body.appendChild(link)
      link.click()
    } catch (error: any) {
      let parsedJson: any
      try {
        parsedJson = JSON.parse(
          new TextDecoder().decode(error.response.data as ArrayBuffer)
        )
      } catch (e) {
        parsedJson = {}
      }
      if (parsedJson.detail) {
        toast.error(parsedJson.detail)
        return
      }

      toast.error('Đã có lỗi nhỏ xảy ra ! Vui lòng thử lại.')
    }
  })

  return (
    <Box className="lookup-numerology" id="tra-cuu" py={4}>
      <Loading isOpen={isSubmitting} />
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
                  <Controller
                    control={control}
                    name="v"
                    render={({ field: { ref, ...fieldProps } }) => (
                      <InputSearch
                        placeholder="V"
                        inputRef={ref}
                        {...fieldProps}
                      />
                    )}
                  />

                  {/* a */}
                  <Controller
                    control={control}
                    name="a"
                    render={({ field: { ref, ...fieldProps } }) => (
                      <InputSearch
                        placeholder="A"
                        inputRef={ref}
                        {...fieldProps}
                      />
                    )}
                  />

                  {/* k */}
                  <Controller
                    control={control}
                    name="k"
                    render={({ field: { ref, ...fieldProps } }) => (
                      <InputSearch
                        placeholder="K"
                        inputRef={ref}
                        {...fieldProps}
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} lg={7}>
            <FingerprintBiometricsForm control={control} />
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
              <SearchNumerologyForm
                title="Mr. Hoàng Đông"
                control={control}
                onSubmitFree={handleSubmitFree}
                onSubmitDeep={handleSubmitDeep}
              />
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
