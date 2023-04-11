import 'swiper/css'

import { Box, Button, Container } from '@mui/material'
import * as React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

import { ButtonMoveSlice } from '@/components/button'
import { IconNextSlice, IconPrevSlice } from '@/components/icon'

import { BlogNumerologyCard, TittlePage } from './parts'

export default function BlogNumerology() {
  return (
    <Box className="blog-numerology-wrapper">
      <Box sx={{ position: 'absolute', left: 560, top: 80 }}>
        <TittlePage>Blog tra cứu thần số học </TittlePage>
      </Box>
      <Container maxWidth={false}>
        <Box marginLeft={{ lg: '120px' }} position={'relative'}>
          <Swiper
            spaceBetween={20}
            slidesPerView={3.6}
            className="mySwiper"
            watchOverflow={true}
          >
            {[1, 2, 3, 4, 5].map((item) => {
              return (
                <SwiperSlide key={item}>
                  <BlogNumerologyCard imgUrl="https://images.unsplash.com/photo-1680778411090-82ba288e1830?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Button
            variant="outlined"
            sx={{ position: 'absolute', top: 'calc(100% + 32px)', right: 0 }}
          >
            Xem tất cả
          </Button>
          <Box
            sx={{ position: 'absolute', top: 'calc(100% + 62px)', left: 130 }}
          >
            <ButtonMoveSlice
              variant="outlined"
              sx={{ transform: 'translate(20%,-80%) rotate(45deg)' }}
            >
              <Box sx={{ transform: 'rotate(-45deg)' }}>
                <IconPrevSlice />
              </Box>
            </ButtonMoveSlice>
            <ButtonMoveSlice
              variant="contained"
              sx={{ transform: 'rotate(45deg)' }}
            >
              <Box sx={{ transform: 'rotate(-45deg)' }}>
                <IconNextSlice />
              </Box>
            </ButtonMoveSlice>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
