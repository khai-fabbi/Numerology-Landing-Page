import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

import { IconTwoRhombus } from '@/components/icon'

export interface TittlePageProps {
  children: ReactNode
}

export default function TittlePage({ children }: TittlePageProps) {
  return (
    <Box>
      <IconTwoRhombus />
      <Typography
        sx={{
          fontFamily: 'var(--philosopher-font)',
          fontSize: 32,
          lineHeight: '36px',
        }}
        component={'h3'}
      >
        {children}
      </Typography>
    </Box>
  )
}
