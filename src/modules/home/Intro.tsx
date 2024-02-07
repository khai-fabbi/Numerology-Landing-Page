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
                Bạn biết đấy
              </Typography>
              <Typography mt={3} lineHeight={'26px'}>
                Vạn vật tồn tại trên đời đều có giá trị ở một góc nhìn nào đó.
                Con người chúng ta cũng vậy, ngay từ khi bắt đầu sự sống, mỗi
                người chúng ta đã là “
                <strong>
                  <i>Người Chiến Thắng</i>
                </strong>
                ”. Chúng ta đã vượt qua một chặng đường hàng ngàn km, vượt qua
                hơn bốn mươi triệu “
                <strong>
                  <i>người anh em</i>
                </strong>
                ” khác để có mặt trên cuộc đời này. Như một sự thật hiển nhiên,
                Đấng Tạo Hóa đã trao cho mỗi người chúng ta một “
                <strong>
                  <i>sứ mệnh thiêng liêng</i>
                </strong>
                ” được ẩn chứa bên trong “
                <strong>
                  <i>
                    mỗi kiểu Gen, Khối óc, Tên gọi và cái thời khắc chúng ta cất
                    tiếng khóc chào đời
                  </i>
                </strong>
                ” , không ai giống ai. Mỗi người chúng ta đều là những kiệt tác
                tuyệt vời của Đấng Tạo Hóa, “
                <strong>
                  <i>Độc đáo, Khác biệt và Duy nhất</i>
                </strong>
                ”. Do vậy, Bạn chính là{' '}
                <strong>
                  <i>
                    Điều Tuyệt Vời Nhất{' '}
                    <Typography
                      component={'span'}
                      color={'#00A5FD'}
                      fontWeight={700}
                    >
                      The <span style={{ color: '#FF0000' }}>B</span>est{' '}
                      <span style={{ color: '#FF0000' }}>K</span>ing
                    </Typography>
                  </i>
                </strong>{' '}
                mà Đấng Tạo Hóa đã tạo ra.
              </Typography>
              <Typography mt={3} lineHeight={'26px'}>
                Cũng vì lý do ấy, chúng tôi,{' '}
                <strong>
                  <i>Trái Tim Việt</i>
                </strong>{' '}
                bằng tất cả tình yêu và nguồn lực của mình, nguyện được làm “{' '}
                <strong>
                  <i> phương tiện chuyên chở</i>
                </strong>
                ” mọi người đến với{' '}
                <strong>
                  <i>Ước Mơ của Riêng mình</i>
                </strong>
                , góp phần xây dựng cộng đồng sống tỉnh thức và yêu thương. Với
                một khát vọng, Một ngày nào đó, hàng triệu “{' '}
                <strong style={{ color: '#B743F9' }}>
                  <i> Viên Kim Cương</i>
                </strong>
                ” được phát hiện, vun bồi Ba Nền Tảng Cốt Lõi:{' '}
                <strong style={{ color: '#FF0000' }}>
                  <i>Đức Tin – Trí Tuệ -Nghị Lực</i>
                </strong>{' '}
                để
                <strong>
                  <i> thành công</i>
                </strong>
                và{' '}
                <strong>
                  <i>tỏa sáng lấp lánh</i>
                </strong>{' '}
                trên bầu trời Trái Tim Việt. Mọi người dân Việt Nam được ấm no,
                hạnh phúc. Đất nước Việt Nam hùng cường, sánh vai với các cường
                quốc năm châu. Và Bạn chính là{' '}
                <strong style={{ color: '#B743F9' }}>
                  <i>Một</i>
                </strong>{' '}
                trong hàng triệu “
                <strong style={{ color: '#B743F9' }}>
                  <i>Viên Kim Cương</i>
                </strong>
                ” sáng lấp lánh trên bầu trời Trái Tim Việt.
              </Typography>
              <Typography mt={3} fontStyle={'italic'} lineHeight={'26px'}>
                Biết ơn Bạn đã chọn chúng tôi là người{' '}
                <strong>bạn đồng hành</strong> trên con đường thành công của
                bạn.
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
