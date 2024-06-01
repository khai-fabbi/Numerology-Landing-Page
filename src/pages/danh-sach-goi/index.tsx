import { Box, Container, Grid, Typography } from '@mui/material'
import { type ReactElement } from 'react'
import useSWR from 'swr'

import { PackageCard } from '@/components/card'
import { Loading } from '@/components/loading'
import { ModalPayment } from '@/components/modal'
import { useToggle } from '@/hooks'
import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'

import numerologyApi from '../api/numerologyApi'

const PackageList: NextPageWithLayout = () => {
  const [isOpenModal, toggleModal] = useToggle()
  const { data: packageList, isLoading } = useSWR('/api/profile', () =>
    numerologyApi.getPackages()
  )
  console.log(packageList)
  return (
    <Box className="bg-account-page" py={8}>
      <Loading isOpen={isLoading} />
      <Container maxWidth={false}>
        <Typography
          component={'h2'}
          fontSize={'3rem'}
          fontWeight={700}
          textAlign={'center'}
          fontFamily={'var(--font-philosopher)'}
        >
          Chọn gói mà bạn muốn mua
        </Typography>
        <Typography textAlign={'center'} mt={1} fontSize={'1.375rem'}>
          Chọn gói bên dưới nhé!
        </Typography>
        <Grid container spacing={2.5} mt={2}>
          {packageList?.data.map((packageItem) => {
            return (
              <Grid key={packageItem.id} item xs={12} sm={6} md={4} lg={3}>
                <PackageCard packageInfo={packageItem} onSubmit={toggleModal} />
              </Grid>
            )
          })}
        </Grid>
      </Container>
      <ModalPayment open={isOpenModal} handleClose={toggleModal} />
    </Box>
  )
}
PackageList.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main meta={<Meta title="Danh sách gói" description="Danh sách gói" />}>
      {page}
    </Main>
  )
}

export default PackageList
