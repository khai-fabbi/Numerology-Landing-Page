import { Box, Container, Typography } from '@mui/material'
import * as React from 'react'

import { IconListItem } from '@/components/icon'

import { TittlePage } from './parts'

export default function TeacherInfo() {
  const TEACHER_DESCRIPTION = [
    {
      id: 1,
      content:
        'CEO Tra cứu thần số học Aladanh Thành – Nhà nghiên cứu thần số học',
    },
    {
      id: 2,
      content: 'Nhà sáng lập hệ thống Tra cứu thần số học hàng đầu Việt Nam',
    },
    {
      id: 3,
      content: 'Hơn 7 năm nghiên cứu và ứng dụng Nhân số học vào đời sống',
    },
    {
      id: 4,
      content: 'Hơn 100 khóa đào tạo thần số học cho đại chúng Việt Nam',
    },
    {
      id: 5,
      content:
        'Cố vấn định hướng cho hơn 50 doanh nghiệp lớn nhỏ trong kỷ nguyên chuyển đổi số',
    },
  ]
  return (
    <Box className="teacher-info-wrapper">
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            gap: 8,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <TittlePage>Nhà nghiên cứu thần số học Pitago</TittlePage>
            <Typography
              mt={2.5}
              sx={{
                fontFamily: 'var(--philosopher-font)',
                fontSize: 68,
                lineHeight: '70px',
              }}
            >
              <Typography
                display={'inline'}
                color="primary"
                component={'span'}
                sx={{
                  fontFamily: 'var(--philosopher-font)',
                  fontSize: 32,
                  lineHeight: '70px',
                }}
              >
                Thầy{' '}
              </Typography>
              Aladanh Thành
            </Typography>
            <Box
              mt={4}
              ml={2}
              display={'flex'}
              flexDirection={'column'}
              rowGap={2}
            >
              {TEACHER_DESCRIPTION.map(({ id, content }) => {
                return (
                  <Box
                    key={id}
                    sx={{ display: 'flex', columnGap: 2, alignItems: 'center' }}
                  >
                    <IconListItem />
                    <Typography>{content}</Typography>
                  </Box>
                )
              })}
            </Box>
          </Box>
          <Box>
            <img
              width={'100%'}
              src="/assets/images/bg-teacher.png"
              alt="Teacher"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
