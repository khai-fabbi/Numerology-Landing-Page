import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { Box, Container, Typography } from '@mui/material'

import { IconTwoRhombus } from '@/components/icon'

import { BookCard } from './parts'

// const COURSE_LIST = [
//   {
//     id: 1,
//     title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
//     detailCourseUrl: '#',
//     imgUrl:
//       'https://media.istockphoto.com/id/1291081296/vi/anh/khu%C3%B4n-m%E1%BA%B7t-v%C5%A9-tr%E1%BB%A5-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=xr-xMowk82z48i8sf0vbOzcM3DiovF-TxMTNDyxJzo4=',
//     description:
//       'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thức tỉnh tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
//   },
//   {
//     id: 2,
//     title: '3 bí mật giúp bạn định hướng nghề nghiệp, phát triển sự nghiệp',
//     detailCourseUrl: '#',
//     imgUrl:
//       'https://media.istockphoto.com/id/1289955669/vi/anh/khu%C3%B4n-m%E1%BA%B7t-kh%C3%B4ng-gian-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=w60kMvjQpa8TV1BrDVhY13eaK5ngroLEGrd2qv1tBnk=',
//     description:
//       'Chương trình do nhà nghiên cứu ứng dụng thần số học, chuyên gia tâm lý học hành vi thầy Louis Nguyễn đặc biệt thiết kế dành riêng cho những ai đang gặp vướng mắc, bế tắc trong công việc, chưa thể khai phá toàn lực bản thân, phát triển tối đa điểm mạnh của mình để đạt được sự nghiệp thành công như mong muốn.',
//   },
//   {
//     id: 3,
//     title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
//     detailCourseUrl: '#',
//     imgUrl:
//       'https://media.istockphoto.com/id/1291081296/vi/anh/khu%C3%B4n-m%E1%BA%B7t-v%C5%A9-tr%E1%BB%A5-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=xr-xMowk82z48i8sf0vbOzcM3DiovF-TxMTNDyxJzo4=',
//     description:
//       'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thức tỉnh tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
//   },
//   {
//     id: 4,
//     title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
//     detailCourseUrl: '#',
//     imgUrl:
//       'https://media.istockphoto.com/id/1291081296/vi/anh/khu%C3%B4n-m%E1%BA%B7t-v%C5%A9-tr%E1%BB%A5-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=xr-xMowk82z48i8sf0vbOzcM3DiovF-TxMTNDyxJzo4=',
//     description:
//       'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thức tỉnh tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
//   },
// ]
const NUMEROLOGY_BOOK = [
  {
    id: 1,
    name: 'Báo Cáo Bộ Số Định Hướng P.P.n.S trọn đời.',
    imgUrl: '/assets/images/book_numerology.png',
    isActive: true,
    isFree: false,
  },
  {
    id: 2,
    name: 'Báo Cáo Bộ Số Định Hướng P.P.n.S Bản Rút Gọn.',
    imgUrl: '/assets/images/bao-cao-dat-ten-khai-sinh.png',
    isActive: true,
    isFree: true,
  },
  {
    id: 3,
    name: 'Tư Vấn Đặt Tên theo bộ số P.P.n.S Bản Rút Gọn',
    imgUrl: '/assets/images/bao-cao-dinh-huong-nghe-nghiep.jpg',
    isActive: true,
    isFree: true,
  },
  {
    id: 4,
    name: 'Tư Vấn Đặt Tên theo Hệ Thống Định Vị Cá Nhân PPS Bản đầy đủ',
    imgUrl: '/assets/images/bao-cao-dat-ten-danh-xung.jpg',
    isActive: true,
    isFree: false,
  },
]
export default function TrainAndApplication() {
  return (
    <Box py={6} className="train-application-wrapper">
      <Container maxWidth={false}>
        <Box mt={4}>
          <Box>
            <IconTwoRhombus />
            <Typography className="text-heading">
              Ứng dụng nghiên cứu
            </Typography>
            <Typography className="text-heading">
              Ngành khoa học dự báo vào đời sống
            </Typography>
          </Box>
          <Box
            mt={2.5}
            display={'grid'}
            gridTemplateColumns="repeat(12, 1fr)"
            gap={2.5}
          >
            {NUMEROLOGY_BOOK.map((bookItem) => (
              <Box
                sx={{
                  gridColumn: {
                    xs: 'span 6',
                    md: 'span 3',
                  },
                }}
                key={bookItem.id}
              >
                <BookCard bookInfo={bookItem} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
