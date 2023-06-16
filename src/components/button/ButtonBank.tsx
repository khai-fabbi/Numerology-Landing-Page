import { Box } from '@mui/material'
import type { ReactNode } from 'react'

interface ButtonBankProps {
  children: ReactNode
}

export default function ButtonBank({ children }: ButtonBankProps) {
  return (
    <Box
      sx={{
        p: 1,
        bgcolor: 'common.white',
        border: '1px solid #2979FF',
        borderRadius: 2,
        maxWidth: 180,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>{children}</p>
    </Box>
  )
}
