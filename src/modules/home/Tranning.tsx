import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

import { TittlePage } from './parts'

export default function Tranning() {
  return (
    <Box py={6} className="tranning-wrapper">
      <Container maxWidth={false}>
        <TittlePage isCenter>
          HÀNH TRÌNH GIẢI MÃ THÔNG ĐIỆP “
          <Typography
            className="text-heading"
            component={'span'}
            color={'#F96A2D'}
          >
            TIỂU VŨ TRỤ
          </Typography>
          ”
        </TittlePage>
        <Box
          sx={{
            display: 'flex',
            mt: 8,
            flexWrap: 'wrap',
          }}
        >
          <Box flex={1} textAlign={'center'}>
            <Image
              src={'/assets/images/phat-hien-circle.png'}
              alt="phat-hien"
              width={420}
              height={420}
            />
          </Box>
          <Box flex={1} textAlign={'center'}>
            <Image
              src={'/assets/images/dong-hanh-10000.png'}
              alt="phat-hien"
              width={420}
              height={420}
            />
          </Box>
        </Box>
        <Box
          className="text-heading"
          sx={{
            mt: 6,
            mx: 'auto',
            px: 6,
            py: 1.5,
            backgroundColor: 'rgba(255, 255, 255,0.09)',
            borderRadius: 2.5,
            textTransform: 'capitalize',
          }}
        >
          Thiết kế & kiến tạo cuộc đời bình an
        </Box>
      </Container>
    </Box>
  )
}
