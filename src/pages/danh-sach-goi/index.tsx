import { Box, Container, Grid, Typography } from '@mui/material'
import { type ReactElement } from 'react'

import { PackageCard } from '@/components/card'
import { ModalPayment } from '@/components/modal'
import { useToggle } from '@/hooks'
import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'

const PackageList: NextPageWithLayout = () => {
  const [isOpenModal, toggleModal] = useToggle()
  return (
    <Box className="bg-account-page" py={8}>
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
          <Grid item xs={12} md={3}>
            <PackageCard onSubmit={toggleModal} />
          </Grid>
          <Grid item xs={12} md={3}>
            <PackageCard onSubmit={toggleModal} />
          </Grid>
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
