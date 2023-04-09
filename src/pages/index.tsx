import { Box } from '@mui/material'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import { Banner, LookUpNumerology } from '@/modules/home'

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Banner />
      <LookUpNumerology />
    </Box>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main meta={<Meta title="Thần số học" description="Thần số học" />}>
      {page}
    </Main>
  )
}

export default Home
