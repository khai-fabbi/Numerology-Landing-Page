import { Box, Container } from '@mui/material'
import React from 'react'

export default function Banner() {
  return (
    <Box bgcolor={'#05324C'} minHeight={'calc(100vh - var(--header-height))'}>
      <Container></Container>
    </Box>
  )
}
