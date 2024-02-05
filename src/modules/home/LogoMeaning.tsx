import { Box, Container, Typography } from '@mui/material'
import Image from 'next/image'
import * as React from 'react'

import { TittlePage } from './parts'

interface MeanItemProps {
  title: string
  content: React.ReactNode
  direction?: 'row' | 'column'
}
const MeanItem = ({ title, content, direction = 'row' }: MeanItemProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        columnGap: 1,
        gap: 1,
      }}
    >
      <svg
        width="31"
        height="31"
        viewBox="0 0 31 31"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <rect
          x="15.5"
          y="1.72721"
          width="19.4777"
          height="19.4777"
          transform="rotate(45 15.5 1.72721)"
          fill="white"
          fill-opacity="0.11"
          stroke="#F96A2D"
          stroke-width="1.8"
        />
      </svg>
      <Box sx={{ display: 'flex', columnGap: 1.25, flexDirection: direction }}>
        <Typography color={'primary'} fontWeight={'600'} flexShrink={0}>
          {title}
        </Typography>
        {React.isValidElement(content) ? (
          content
        ) : (
          <Typography>{content}</Typography>
        )}
      </Box>
    </Box>
  )
}

export default function LogoMeaning() {
  return (
    <Box className="mean-logo-wrapper">
      <Container maxWidth={false}>
        <Box
          sx={{
            py: 8,
            display: 'flex',
            gap: 4,
          }}
        >
          <Box flex={1} sx={{ textAlign: 'center' }}>
            <Image
              src={'/assets/images/logo-viet-heart.png'}
              alt="logo viet heart"
              width={345}
              height={489}
            />
          </Box>
          <Box flex={1}>
            <TittlePage>Ý nghĩa logo</TittlePage>
            <Typography mt={3.5}>
              <Typography
                component={'span'}
                sx={{
                  color: '#00A5FD',
                  fontWeight: '900',
                  letterSpacing: '0.9px',
                  fontSize: '1.125rem',
                }}
              >
                TRÁI TIM VIỆT
              </Typography>{' '}
              – Nơi tình yêu bắt đầu
            </Typography>
            <Box
              sx={{ mt: 2.5, display: 'flex', flexDirection: 'column', gap: 3 }}
              component={'ul'}
            >
              <MeanItem
                title="Hình tròn"
                content={
                  'Tượng trưng cho Trái Đất – Mẹ Thiên Nhiên - Đấng Tạo Hóa bao trùm lấy vạn vật'
                }
              />
              <MeanItem
                title="Đôi bàn tay hình cánh chim bồ câu ôm lấy trái tim"
                direction="column"
                content={
                  'Tượng trưng cho sự lao động hăng say vì tình yêu thương con người trong hòa bình dưới sự linh hướng của Đấng Tạo Hóa'
                }
              />
              <MeanItem
                title="Nhịp tim"
                content={
                  <Box>
                    <Typography>
                      Tượng trưng cho sự sống với một thông điệp mạnh mẽ:
                    </Typography>
                    <Typography>
                      Tất cả chúng ta còn “
                      <Typography
                        component={'span'}
                        color={'primary'}
                        fontStyle={'italic'}
                        fontWeight={'600'}
                      >
                        được sống, được có mặt trên cuộc đời
                      </Typography>
                      ” đã là điều tuyệt vời và kỳ diệu mà Đấng Tạo Hóa đã
                      thương ban
                    </Typography>
                  </Box>
                }
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
