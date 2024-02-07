import { Box, Container, Grid, Typography } from '@mui/material'
import * as React from 'react'
import { useState } from 'react'

import { AccordionCustom } from '@/components/accordion'

import { TittlePage } from './parts'

const NUMEROLOGY_INTERESTING = [
  {
    id: 1,
    title: 'Con số chủ đạo (Chỉ đường đời)',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 2,
    title: 'Biểu đồ ngày sinh',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 3,
    title: 'Con số linh hồn',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 4,
    title: '4 đỉnh cao đời người',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
]

const mainNumber = [
  {
    title: 1,
    description:
      'Người mang năng lượng con số 1 là hiện thân của sự độc lập, quyết đoán và là người làm ra kết quả. Hãy phấn đấu để trở thành người xuất sắc trong tổ chức mình, trở thành 1 nhà lãnh đạo và tạo ra nhiều nhà lãnh đạo khác cho xã hội.',
  },
  {
    title: 2,
    description:
      'Người mang năng lượng con số 2 là người biết lắng nghe, thấu hiểu, đồng cảm và chia sẻ với người khác. Hãy phấn đấu để trở thành người hòa giải, kết nối các mối quan hệ và tạo ra cộng đồng có tình yêu thương chia sẻ. Bạn hãy dùng trí thức và tình yêu thương để chữa lành người khác.',
  },
  {
    title: 3,
    description:
      'Người mang năng lượng con số 3 là có khả năng sử dụng ngôn từ và mang năng lượng tích cực vào cuộc sống. Hãy phấn đấu để trở thành người truyền động lực, cảm hứng cho người khác và trở thành nhà đào tạo xuất chúng.',
  },
  {
    title: 4,
    description:
      'Người mang năng lượng con số 4 là người có thiên chức để trở thành chuyên gia trong một lĩnh vực nào đó. Hãy phấn đấu để trở thành chuyên gia, người tạo ra công thức, quy trình, hệ thống, đóng gói tri thức và chia sẻ giá trị.',
  },
  {
    title: 5,
    description:
      'Người mang năng lượng con số 5 là người có khả năng tạo ra niềm vui tích cực, hài hước cho người khác, là người tạo sân chơi giúp họ tự khám phá bản thân mình. Hãy là người tiên phong trong việc tạo ra những hoạt động có giá trị về mặt tinh thần cho người khác và là người dẫn đầu xu thế tích cực cho xã hội.',
  },
  {
    title: 6,
    description:
      'Người mang năng lượng con số 6 là người có tràn đầy tình yêu thương, sự bình yên, ấm áp cho mọi người, là người tạo ra mái ấm gia đình. Hãy phấn đấu và giúp người khác vượt qua khó khăn bằng tình yêu và trí tuệ. Tạo ra mô hình kinh doanh cho người khác, có cơm ăn, áo mặc, có gia đình hạnh phúc, chăm lo đời sống cho rất nhiều người khác.',
  },
  {
    title: 7,
    description:
      'Người mang năng lượng con số 7 là người có niềm đam mê với tri thức và các quy luật của vũ trụ. Hãy cẩn thận nghiên cứu, xem xét và trải nghiệm để có đức tin đúng đắn và lan tỏa cho mọi người. Hãy phấn đấu để trở thành người khai tuệ cho người khác, là người dẫn đầu chuyên môn, tạo ra sản phẩm giúp người khác phát triển trí tuệ, phát triển bản thân là người tạo ra thay đổi về mặt trí tuệ cho cộng đồng, xã hội cho nhiều thế hệ mai sau.',
  },
  {
    title: 8,
    description:
      'Người mang năng lượng con số 8 là người có năng khiếu về quản lý tài chính, biết cân bằng giữa đời sống vật chất và tình cảm. Hãy là người tạo ra mô hình kinh doanh giúp nhiều người khác có thu nhập, nâng cao chất lượng cuộc sống và để lại mô hình kinh doanh trường tồn theo thời gian.',
  },
  {
    title: 9,
    description:
      'Người mang năng lượng con số 9 là người có tấm lòng nhân hậu và từ bi, có trí tuệ và tầm nhìn xa trông rộng. Hãy dùng tấm lòng nhân hậu và trí tuệ hơn người để khai tâm, khai tuệ, khai sáng và giúp đỡ cho người khác. Hãy phấn đấu để trở thành thủ lĩnh tinh thần của bất kỳ tổ chức nào mà bạn đang tham gia.',
  },
  {
    title: 11,
    description:
      'Người mang năng lượng con số 11 là người có tố chất là nhà lãnh đạo và nhà đào tạo truyền cảm hứng, truyền động lực cho mọi người để hướng tới giá trị nhân văn. Hãy phấn đấu để trở thành những người tạo ra một thế hệ lãnh đạo mới.',
  },
  {
    title: 22,
    description:
      'Người mang năng lượng con số 22 là người có năng lực chuyên môn rất cao với một trái tim yêu thương, đầy sự sáng tạo. Hãy phấn đấu và tạo ra sản phẩm mới trong lĩnh vực chuyên môn của bạn để giúp ích cho con người ở tầm cỡ quốc gia, quốc tế.',
  },
  {
    title: 33,
    description:
      'Người mang năng lượng con số 33 là người tràn ngập tình yêu với năng lượng tích cực. Hãy phấn đấu để trở thành chuyên gia chữa lành để mang lại năng lượng tích cực và tình yêu thương vô hạn cho thế giới.    ',
  },
]
export default function NumerologyInfo() {
  // @ts-ignore
  const [itemActive, setItemActive] = useState<{
    title: any
    description: any
  }>(mainNumber[0])
  return (
    <Box className="numerology-info-wrapper">
      <Container maxWidth={false}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 5,
            pt: 5,
            pb: 8,
          }}
        >
          <Box>
            <TittlePage>Ý nghĩa các con số trong thần số học</TittlePage>
            <Box mt={2.5}>
              <Grid container bgcolor={'#081D2D'}>
                <Grid item xs={6} lg={8}>
                  <Grid
                    container
                    borderTop={'2px solid #0E263B'}
                    borderLeft={'2px solid #0E263B'}
                  >
                    {mainNumber.map((item) => (
                      <Grid
                        key={item.title}
                        item
                        xs={6}
                        md={4}
                        lg={3}
                        borderBottom={'2px solid #0E263B'}
                        borderRight={'2px solid #0E263B'}
                      >
                        <Box
                          py={'14px'}
                          // px={5}
                          height={'120px'}
                          textAlign={'center'}
                          style={{ cursor: 'pointer' }}
                          onClick={() => {
                            setItemActive(item)
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: 'var(--font-philosopher)',
                              fontSize: 26,
                              lineHeight: '29px',
                            }}
                          >
                            Số
                          </Typography>
                          <Typography
                            component={'span'}
                            color="primary"
                            sx={{
                              fontFamily: 'var(--font-philosopher)',
                              fontSize: 70,
                              lineHeight: '78px',
                              fontWeight: 700,
                            }}
                          >
                            {item.title}
                          </Typography>
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={6}
                  lg={4}
                  sx={{
                    border: '2px solid #0E263B',
                    borderLeft: 0,
                    height: 'inherit',
                  }}
                >
                  <Box
                    py={'14px'}
                    sx={{
                      px: {
                        xs: 2,
                        md: 5,
                      },
                    }}
                    height={'100%'}
                  >
                    <Box>
                      <Typography
                        sx={{
                          fontFamily: 'var(--philosopher-font)',
                          fontSize: 26,
                          lineHeight: 0,
                        }}
                      >
                        Số
                        <Typography
                          component={'span'}
                          color="primary"
                          sx={{
                            fontFamily: 'var(--philosopher-font)',
                            fontSize: 70,
                            fontWeight: 700,
                            marginLeft: 1.5,
                            lineHeight: '50px',
                          }}
                        >
                          {itemActive.title}
                        </Typography>
                      </Typography>
                    </Box>
                    <Typography mt={2.5}>{itemActive.description}</Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>

          <Box>
            <TittlePage>Kiến thức thú vị bạn không nên bỏ Lỡ</TittlePage>
            <Box mt={2.5}>
              <Grid container columnSpacing={2.5} rowSpacing={2.5}>
                {NUMEROLOGY_INTERESTING.map(({ id, title, description }) => (
                  <Grid key={id} item xs={12} md={6}>
                    <AccordionCustom title={title} description={description} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
