import { Box, Container, Typography } from '@mui/material'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import {
  Banner,
  BlogNumerology,
  Intro,
  LogoMeaning,
  LookUpNumerology,
  NumerologyInfo,
  TrainAndApplication,
  Tranning,
} from '@/modules/home'
import { TittlePage } from '@/modules/home/parts'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Banner />
      <Tranning />
      <Intro />
      <LogoMeaning />
      <Box
        sx={{
          textAlign: 'center',
          backgroundColor: '#270F66',
          height: '800px',
        }}
      >
        <Box
          component={'img'}
          src={'/assets/images/top-ppns-1.png'}
          alt="top-ppns-1"
          // height={800}
          // width={1000}
          sx={{ aspectRatio: '1.294', height: '100%' }}
        ></Box>
      </Box>
      <Box sx={{ backgroundColor: '#F1F1F1' }}>
        <Container maxWidth={false}>
          <Box
            component={'img'}
            src={'/assets/images/top-ppns-2.png'}
            alt="top-ppns-2"
            sx={{ width: '100%' }}
          ></Box>
        </Container>
      </Box>

      <Box
        sx={{ backgroundColor: '#F1F1F1', paddingTop: 8, paddingBottom: 16 }}
      >
        <Container maxWidth={false}>
          <Box
            component={'img'}
            src={'/assets/images/top-ppns-3.png'}
            alt="top-ppns-2"
            sx={{ width: '100%' }}
          ></Box>
        </Container>
      </Box>
      <Box sx={{ pt: 6, pb: 10 }} className="development-journey-wrapper">
        <Container maxWidth={false}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <TittlePage isCenter>
              Hành trình phát triển - Biệt đội kim cương{' '}
              <Typography
                className="text-heading"
                component={'span'}
                color={'#00A5FD'}
              >
                BK28
              </Typography>
            </TittlePage>
          </Box>
          <Box sx={{ mt: 8, textAlign: 'center' }}>
            <Box
              component={'img'}
              src={'/assets/images/top-ppns-4.png'}
              alt="top-ppns-4"
              sx={{ width: '80%', margin: 'auto' }}
            ></Box>
          </Box>
        </Container>
      </Box>
      <LookUpNumerology />

      <Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <TittlePage isCenter>Con Thuyền P.P.n.S</TittlePage>
        </Box>
        <Box
          component={'img'}
          src={'/assets/images/top-ppns-5.png'}
          alt="top-ppns-5"
          sx={{ width: '100%', objectFit: 'cover' }}
        ></Box>
      </Box>
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
