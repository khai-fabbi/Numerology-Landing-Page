import { Box, Typography } from '@mui/material'
import * as React from 'react'

import { IconTwoRhombus } from '@/components/icon'

export default function CommentForNumerology() {
  return (
    <Box className="reader-comment-wrapper" height={'820px'}>
      <IconTwoRhombus />
      <Typography
        sx={{
          fontFamily: 'var(--philosopher-font)',
          fontSize: 32,
          lineHeight: '36px',
        }}
        component={'h3'}
      >
        Góc chia sẻ
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          marginTop: 2,
          maxWidth: '560px',
        }}
      >
        Chia sẻ từ những cá nhân đã tìm thấy sự đột phá cuộc đời nhờ Nhân số học
      </Typography>
    </Box>
  )
}
