import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useEffect, useMemo, useState } from 'react'
import useSWR from 'swr'

import { Loading } from '@/components/loading'
import numerologyApi from '@/pages/api/numerologyApi'
import type { NumTop } from '@/pages/api/type'

import { TittlePage } from './parts'

const AccordionCustom = dynamic(
  () => import('@/components/accordion/AccordionCustom'),
  { ssr: false }
)

const NUMEROLOGY_INTERESTING = [
  {
    id: 1,
    title: 'Số Chủ Đạo',
    description:
      'Trường năng lượng con số chủ đạo là trường năng lượng mạnh nhất tiết lộ rất nhiều thông tin và tác động mạnh mẽ lên cuộc sống hàng ngày của bạn hơn bất kỳ trường năng lượng nào khác. Bạn cần hiểu rõ trường năng lượng của con số này một cách sâu sắc nếu bạn muốn hạnh phúc và thành công hơn nữa. Nó cho bạn biết những năng lực đặc biệt, ưu và nhược điểm bên trong tính cách của bạn, những giá trị mà bạn có thể đóng góp cho xã hội và cuối cùng là những trải nghiệm và thách thực bạn cần phải vượt qua trong cuộc đời.',
  },
  {
    id: 2,
    title: 'Biểu đồ ngày sinh',
    description:
      'Biểu đồ ngày sinh là biểu đồ được tạo nên bởi những con số có trong ngày, tháng, năm sinh của con người và được sắp xếp theo đúng vị trí số trong biểu đồ năng lượng những con số. Biểu đồ ngày sinh thể hiện năng lượng và nguồn sức mạnh nguyên thủy giúp cho bạn có cái nhìn sơ lược về những đặc điểm mạnh – yếu hay tính cách của bản thân, từ đó biết cách khắc phục và cải thiện để hoàn thiện bản thân hơn.',
  },
  {
    id: 3,
    title: 'Chỉ số linh hồn',
    description:
      'Biểu đồ ngày sinh là biểu đồ được tạo nên bởi những con số có trong ngày, tháng, năm sinh của con người và được sắp xếp theo đúng vị trí số trong biểu đồ năng lượng những con số. Biểu đồ ngày sinh thể hiện năng lượng và nguồn sức mạnh nguyên thủy giúp cho bạn có cái nhìn sơ lược về những đặc điểm mạnh – yếu hay tính cách của bản thân, từ đó biết cách khắc phục và cải thiện để hoàn thiện bản thân hơn.',
  },
  {
    id: 4,
    title: 'Bốn Đỉnh cao cuộc đời',
    description:
      'Bốn đỉnh cao và Bốn thách thức của đời người trong biểu đồ kim tự tháp bắt đầu từ đảo Atlantis ở thời kỳ cổ đại – Theo Tiến Sỹ David Philip <Chuyên gia hàng đầu về thần số học>.  Bốn đỉnh cao của đời người tương ứng với 4 giai đoạn kéo dài 9 năm của cuộc sống. Cụ thể, nó đại diện cho giai đoạn 36 năm được chia làm 4 chặng <giai đoạn>, và mỗi chặng là 9 năm. Cuối mỗi chặng 9 năm, mỗi cá nhân sẽ gặt hái được những thành công bên cạnh những thách thức nhất định tương ứng với các con số trong mỗi đỉnh của kim tự tháp.',
  },
]

// const mainNumber = [
//   {
//     title: 1,
//     description:
//       'Người mang năng lượng con số 1 là hiện thân của sự độc lập, quyết đoán và là người làm ra kết quả. Hãy phấn đấu để trở thành người xuất sắc trong tổ chức mình, trở thành 1 nhà lãnh đạo và tạo ra nhiều nhà lãnh đạo khác cho xã hội.',
//   },
//   {
//     title: 2,
//     description:
//       'Người mang năng lượng con số 2 là người biết lắng nghe, thấu hiểu, đồng cảm và chia sẻ với người khác. Hãy phấn đấu để trở thành người hòa giải, kết nối các mối quan hệ và tạo ra cộng đồng có tình yêu thương chia sẻ. Bạn hãy dùng trí thức và tình yêu thương để chữa lành người khác.',
//   },
//   {
//     title: 3,
//     description:
//       'Người mang năng lượng con số 3 là có khả năng sử dụng ngôn từ và mang năng lượng tích cực vào cuộc sống. Hãy phấn đấu để trở thành người truyền động lực, cảm hứng cho người khác và trở thành nhà đào tạo xuất chúng.',
//   },
//   {
//     title: 4,
//     description:
//       'Người mang năng lượng con số 4 là người có thiên chức để trở thành chuyên gia trong một lĩnh vực nào đó. Hãy phấn đấu để trở thành chuyên gia, người tạo ra công thức, quy trình, hệ thống, đóng gói tri thức và chia sẻ giá trị.',
//   },
//   {
//     title: 5,
//     description:
//       'Người mang năng lượng con số 5 là người có khả năng tạo ra niềm vui tích cực, hài hước cho người khác, là người tạo sân chơi giúp họ tự khám phá bản thân mình. Hãy là người tiên phong trong việc tạo ra những hoạt động có giá trị về mặt tinh thần cho người khác và là người dẫn đầu xu thế tích cực cho xã hội.',
//   },
//   {
//     title: 6,
//     description:
//       'Người mang năng lượng con số 6 là người có tràn đầy tình yêu thương, sự bình yên, ấm áp cho mọi người, là người tạo ra mái ấm gia đình. Hãy phấn đấu và giúp người khác vượt qua khó khăn bằng tình yêu và trí tuệ. Tạo ra mô hình kinh doanh cho người khác, có cơm ăn, áo mặc, có gia đình hạnh phúc, chăm lo đời sống cho rất nhiều người khác.',
//   },
//   {
//     title: 7,
//     description:
//       'Người mang năng lượng con số 7 là người có niềm đam mê với tri thức và các quy luật của vũ trụ. Hãy cẩn thận nghiên cứu, xem xét và trải nghiệm để có đức tin đúng đắn và lan tỏa cho mọi người. Hãy phấn đấu để trở thành người khai tuệ cho người khác, là người dẫn đầu chuyên môn, tạo ra sản phẩm giúp người khác phát triển trí tuệ, phát triển bản thân là người tạo ra thay đổi về mặt trí tuệ cho cộng đồng, xã hội cho nhiều thế hệ mai sau.',
//   },
//   {
//     title: 8,
//     description:
//       'Người mang năng lượng con số 8 là người có năng khiếu về quản lý tài chính, biết cân bằng giữa đời sống vật chất và tình cảm. Hãy là người tạo ra mô hình kinh doanh giúp nhiều người khác có thu nhập, nâng cao chất lượng cuộc sống và để lại mô hình kinh doanh trường tồn theo thời gian.',
//   },
//   {
//     title: 9,
//     description:
//       'Người mang năng lượng con số 9 là người có tấm lòng nhân hậu và từ bi, có trí tuệ và tầm nhìn xa trông rộng. Hãy dùng tấm lòng nhân hậu và trí tuệ hơn người để khai tâm, khai tuệ, khai sáng và giúp đỡ cho người khác. Hãy phấn đấu để trở thành thủ lĩnh tinh thần của bất kỳ tổ chức nào mà bạn đang tham gia.',
//   },
//   {
//     title: 11,
//     description:
//       'Người mang năng lượng con số 11 là người có tố chất là nhà lãnh đạo và nhà đào tạo truyền cảm hứng, truyền động lực cho mọi người để hướng tới giá trị nhân văn. Hãy phấn đấu để trở thành những người tạo ra một thế hệ lãnh đạo mới.',
//   },
//   {
//     title: 22,
//     description:
//       'Người mang năng lượng con số 22 là người có năng lực chuyên môn rất cao với một trái tim yêu thương, đầy sự sáng tạo. Hãy phấn đấu và tạo ra sản phẩm mới trong lĩnh vực chuyên môn của bạn để giúp ích cho con người ở tầm cỡ quốc gia, quốc tế.',
//   },
//   {
//     title: 33,
//     description:
//       'Người mang năng lượng con số 33 là người tràn ngập tình yêu với năng lượng tích cực. Hãy phấn đấu để trở thành chuyên gia chữa lành để mang lại năng lượng tích cực và tình yêu thương vô hạn cho thế giới.    ',
//   },
// ]
export default function NumerologyInfo() {
  const { data, isLoading, error } = useSWR('num-top', () =>
    numerologyApi.getNumTop()
  )
  const [itemActive, setItemActive] = useState<NumTop>()

  const mainNumberList = useMemo(() => data?.data || [], [data])

  useEffect(() => {
    setItemActive(mainNumberList?.[0])
  }, [mainNumberList])
  if (error) return null

  return (
    <Box className="numerology-info-wrapper">
      <Loading isOpen={isLoading} />
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
            <TittlePage>
              Trường năng lượng của các con số trong ngành khoa học dự báo
            </TittlePage>
            <Box mt={2.5}>
              <Grid container bgcolor={'#081D2D'}>
                <Grid item xs={6} lg={8}>
                  <Grid
                    container
                    borderTop={'2px solid #0E263B'}
                    borderLeft={'2px solid #0E263B'}
                    // borderBottom={'2px solid #0E263B'}
                  >
                    {mainNumberList.map((item) => (
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
                          {itemActive?.title}
                        </Typography>
                      </Typography>
                    </Box>
                    <Typography mt={2.5} sx={{ textAlign: 'justify' }}>
                      {itemActive?.short_content}
                    </Typography>
                    <Link href={`/post/${itemActive?.id}`}>
                      <Button
                        variant="contained"
                        color="primary"
                        sx={{ mt: 4 }}
                        endIcon={<ChevronRightIcon fontSize="large" />}
                      >
                        Xem chi tiết
                      </Button>
                    </Link>
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
