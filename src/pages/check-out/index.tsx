import { Box, Container, Grid, Typography } from '@mui/material'
import { type ReactElement, useRef, useState } from 'react'
import toast from 'react-hot-toast'

import NotFound404 from '@/components/common/NotFound404'
import { Loading } from '@/components/loading'
import type { Bank } from '@/hooks/useBanks'
import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import { BankInfo, TotalBill } from '@/modules/checkout'
import { useStore } from '@/store/useStore'

import numerologyApi from '../api/numerologyApi'
import type { IPostPayment } from '../api/type'

export interface IPostPayment1 {
  package: number
  price: number
  transaction_code: string
  account_number: string
  account_holder: string
  bank: string
}
interface ReturnValue {
  codeQR: string
  bankSelected: Bank | null
}

const CheckoutPage: NextPageWithLayout = () => {
  const packageSelected = useStore((state) => state.packageSelected)
  const [loading, setLoading] = useState(false)

  const bankInfoRef = useRef<ReturnValue>(null)

  // submit create payment
  const submitPayment = async () => {
    if (!packageSelected || !bankInfoRef.current) return

    setLoading(true)
    const { codeQR, bankSelected } = bankInfoRef.current

    if (!bankSelected || !codeQR) return

    const formValueSend: IPostPayment = {
      package_id: packageSelected?.id,
      price: packageSelected.price_sale || packageSelected.price,
      transaction_code: codeQR,
      account_holder: bankSelected.account_holder,
      account_number: bankSelected.account_number,
      bank: bankSelected.bank,
    }

    try {
      await numerologyApi.createPayment(formValueSend)
      toast.success('Bạn đã gửi thành công ! Vui lòng chờ xác nhận.', {
        duration: 5000,
      })
    } catch (error) {
      toast.error('Đã có lỗi nhỏ xảy ra ! Vui lòng thử lại.')
    } finally {
      setLoading(false)
    }
  }

  if (!packageSelected) return <NotFound404 />
  return (
    <Container maxWidth={false}>
      <Loading isOpen={loading} />
      <Box component={'h1'} my={4}>
        Hướng dẫn thanh toán cho đơn hàng{' '}
        <span
          dangerouslySetInnerHTML={{ __html: packageSelected?.name || '' }}
        ></span>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={7}>
          <BankInfo ref={bankInfoRef} packageSelected={packageSelected} />
        </Grid>
        <Grid item xs={12} md={5}>
          <TotalBill
            packageSelected={packageSelected}
            onSubmitPayment={submitPayment}
          />
        </Grid>
      </Grid>
      <Typography mt={3} mb={8} fontWeight={500}>
        Bạn có thắc mắc ? Liên hệ ngay:{' '}
        <Typography component="span" color="primary" fontWeight={600}>
          0339387373
        </Typography>
      </Typography>
    </Container>
  )
}
CheckoutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main
      meta={
        <Meta title="Thông tin thanh toán" description="Thông tin thanh toán" />
      }
    >
      {page}
    </Main>
  )
}

export default CheckoutPage
