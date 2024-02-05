import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

import { IconTwoRhombus } from '@/components/icon'

export interface TittlePageProps {
  children: ReactNode
  isCenter?: boolean
}

export default function TittlePage({
  children,
  isCenter = false,
}: TittlePageProps) {
  return (
    <Box sx={{ textAlign: isCenter ? 'center' : 'left', width: 'fit-content' }}>
      <IconTwoRhombus />
      <Typography className="text-heading" component={'h3'}>
        {children}
      </Typography>
    </Box>
  )
}
