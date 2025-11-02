import { Box, Container, Typography } from '@mui/material'
import * as React from 'react'

import { TittlePage } from './parts'

export default function Intro() {
  return (
    <Box py={8}>
      <Container maxWidth={false}>
        <TittlePage>Về chúng tôi</TittlePage>
        <Box
          mt={4}
          sx={{ display: 'flex', alignItems: 'center', columnGap: 5 }}
        >
          <Box
            flex={1}
            p={2}
            sx={{ backgroundColor: '#002B42', borderRadius: 1 }}
          >
            <Box
              sx={{
                p: 3.5,
                borderRadius: 1,
                backgroundColor: '#031D2E',
                textAlign: 'justify',
                lineHeight: '26px',
                boxShadow: '0px 0px 21px 5px rgba(0,0,0,0.2)',
              }}
            >
              <Typography
                sx={{
                  textTransform: 'capitalize',
                  fontSize: '26px',
                  fontStyle: 'italic',
                }}
                className="font-philosopher"
              >
                Bạn biết đấy!
              </Typography>
              <Typography mt={3} lineHeight={'26px'}>
                Vạn vật tồn tại trên đời đều có giá trị ở một góc nhìn nào đó.
                Con người chúng ta cũng vậy, ngay từ khi bắt đầu sự sống, mỗi
                người chúng ta đã là &ldquo;Người Chiến Thắng&rdquo;. Chúng ta
                đã vượt qua một chặng đường &ldquo;hàng ngàn km&rdquo;, vượt qua
                hơn bốn mươi triệu &ldquo;người anh em&rdquo; khác để có mặt
                trên cuộc đời này. Như một sự thật hiển nhiên, Đấng Tạo Hóa đã
                trao cho mỗi người chúng ta một &ldquo;sứ mệnh thiêng
                liêng&rdquo; được ẩn chứa bên trong &ldquo;mỗi kiểu Gen, Khối
                óc, Tên gọi và cái thời khắc chúng ta cất tiếng khóc chào
                đời&rdquo;, không ai giống ai. Mỗi người chúng ta đều là những
                kiệt tác tuyệt vời của Đấng Tạo Hóa, &ldquo;Độc Đáo, Khác Biệt
                và Duy Nhất&rdquo;.
              </Typography>
              <Typography mt={3} lineHeight={'26px'}>
                Do vậy, Bạn chính là &ldquo;Điều Tuyệt Vời Nhất&rdquo; mà Đấng
                Tạo Hóa đã tạo ra.
              </Typography>
              <Typography mt={3} lineHeight={'26px'}>
                Mục Tiêu của chúng tôi: &ldquo;Đến năm 2068, The BK28 đồng hành
                cùng Một triệu thành viên thay đổi cuộc sống, trong đó có ít
                nhất là 2.468 Viên Kim Cương trở thành Đa Triệu Phú&rdquo;. Và
                Bạn chính là Một trong 2.468 &ldquo;Viên Kim Cương&rdquo; tỏa
                sáng lấp lánh trên bầu trời Trái Tim Việt.
              </Typography>
              <Typography mt={3} lineHeight={'26px'}>
                Biết ơn Bạn đã chọn chúng tôi – The BK28 là người bạn đồng hành
                trên con đường thành công của bạn.
              </Typography>
              <Typography mt={3} fontStyle={'italic'} lineHeight={'26px'}>
                Chào thân ái và tràn đầy tình yêu thương!
              </Typography>
            </Box>
          </Box>
          <Box flex={1}>
            <Box
              component={'img'}
              src="/assets/images/ikigai.png"
              sx={{ width: '100%', objectFit: 'contain' }}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
