import { Box, Button, Container, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import * as React from 'react'

export default function NotFound404() {
  const router = useRouter()
  return (
    <Container
      component={'section'}
      maxWidth={false}
      sx={{
        py: 5,
      }}
    >
      <Typography
        component={'h2'}
        variant="h2"
        color="primary"
        fontWeight={600}
      >
        Oops! Trang không tồn tại...
      </Typography>
      <Box mt={4}>
        <Button variant="contained" onClick={() => router.push('/')}>
          Trang Chủ
        </Button>
        <Button variant="outlined" onClick={() => router.back()} sx={{ ml: 2 }}>
          Quay Lại
        </Button>
      </Box>
    </Container>
  )
}
