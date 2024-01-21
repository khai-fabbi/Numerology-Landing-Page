import { Box, Typography } from '@mui/material'
import * as React from 'react'

export interface IAccountItemCardProps {
  label: string
  content: string
  icon?: React.ReactNode
  style?: React.CSSProperties
}

export default function AccountItemCard({
  label,
  content,
  icon,
  style,
}: IAccountItemCardProps) {
  return (
    <Box
      style={style}
      sx={{
        minHeight: '9rem',
        padding: 2.5,
        borderRadius: 1.25,
        border: '1px solid #215261',
        backgroundColor: '#031D2E',
        boxShadow: 2,
      }}
    >
      <Box display={'flex'} gap={1} alignItems={'center'}>
        <Typography
          fontSize={'1.25rem'}
          fontWeight={'600'}
          component={'span'}
          flex={1}
        >
          {label}
        </Typography>
        {icon}
      </Box>
      <Typography mt={1}>{content}</Typography>
    </Box>
  )
}
