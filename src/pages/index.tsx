import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import {
  Banner,
  BlogNumerology,
  LookUpNumerology,
  NumerologyInfo,
  TrainAndApplication,
} from '@/modules/home'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Banner />
      <LookUpNumerology />
      <NumerologyInfo />
      <BlogNumerology />
      {/* <TeacherInfo /> */}
      <TrainAndApplication />
    </>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main meta={<Meta title="Khoa học con số" description="Khoa học con số" />}>
      {page}
    </Main>
  )
}

export default Home
