import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'

import { IconArrowRight } from '@/components/icon'

export interface BlogNumerologyCardProps {
  imgUrl: string
}

export default function BlogNumerologyCard({
  imgUrl,
}: BlogNumerologyCardProps) {
  return (
    <Card
      sx={{
        maxWidth: 295,
        borderRadius: '5px',
        position: 'relative',
        backgroundColor: 'rgba(2, 39, 59, 0.8)',
      }}
    >
      <CardActionArea>
        <CardMedia component="img" alt="image" height="422" image={imgUrl} />
        <CardContent
          sx={{
            position: 'absolute',
            bottom: 0,
            backgroundColor: 'rgba(2, 39, 59, 0.8)',
            borderRadius: '5px',
            padding: '15px 10px 20px 10px',
            color: '#fff',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              columnGap: 3,
              alignItems: 'start',
            }}
          >
            <Typography
              component="h4"
              variant="h4"
              sx={{
                fontFamily: 'var(--philosopher-font)',
                lineHeight: '20px',
              }}
            >
              Cách tính Thần số Học chuẩn Pythagoras
            </Typography>
            <Box
              sx={{
                cursor: 'pointer',
                display: 'flex',
                flexShrink: 0,
                columnGap: 1,
                alignItems: 'center',
                '&:hover': {
                  filter: 'brightness(0.7)',
                },
              }}
            >
              <Typography variant="body2" fontWeight={500} lineHeight={'20px'}>
                Chi tiết
              </Typography>
              <IconArrowRight />
            </Box>
          </Box>

          <Typography variant="body2" mt={1}>
            Bài viết hướng dẫn chi tiết nhất cách tính thần số học, nhân số học
            từ ngày tháng năm sinh và họ tên, kèm luận giải cho riêng bạn…
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}