import 'swiper/css'
import 'swiper/css/pagination'

import { Box, Container, Typography } from '@mui/material'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { IconTwoRhombus } from '@/components/icon'

import { CourseCard } from './parts'

const COURSE_LIST = [
  {
    id: 1,
    title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
    detailCourseUrl: '#',
    imgUrl:
      'https://media.istockphoto.com/id/1291081296/vi/anh/khu%C3%B4n-m%E1%BA%B7t-v%C5%A9-tr%E1%BB%A5-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=xr-xMowk82z48i8sf0vbOzcM3DiovF-TxMTNDyxJzo4=',
    description:
      'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thức tỉnh tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
  },
  {
    id: 2,
    title: '3 bí mật giúp bạn định hướng nghề nghiệp, phát triển sự nghiệp',
    detailCourseUrl: '#',
    imgUrl:
      'https://media.istockphoto.com/id/1289955669/vi/anh/khu%C3%B4n-m%E1%BA%B7t-kh%C3%B4ng-gian-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=w60kMvjQpa8TV1BrDVhY13eaK5ngroLEGrd2qv1tBnk=',
    description:
      'Chương trình do nhà nghiên cứu ứng dụng thần số học, chuyên gia tâm lý học hành vi thầy Louis Nguyễn đặc biệt thiết kế dành riêng cho những ai đang gặp vướng mắc, bế tắc trong công việc, chưa thể khai phá toàn lực bản thân, phát triển tối đa điểm mạnh của mình để đạt được sự nghiệp thành công như mong muốn.',
  },
  {
    id: 3,
    title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
    detailCourseUrl: '#',
    imgUrl:
      'https://media.istockphoto.com/id/1291081296/vi/anh/khu%C3%B4n-m%E1%BA%B7t-v%C5%A9-tr%E1%BB%A5-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=xr-xMowk82z48i8sf0vbOzcM3DiovF-TxMTNDyxJzo4=',
    description:
      'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thức tỉnh tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
  },
  {
    id: 4,
    title: 'Ý nghĩa các con số thần số học & Ứng dụng vào đời sống',
    detailCourseUrl: '#',
    imgUrl:
      'https://media.istockphoto.com/id/1291081296/vi/anh/khu%C3%B4n-m%E1%BA%B7t-v%C5%A9-tr%E1%BB%A5-v%C3%A0-s%E1%BB%91-h%E1%BB%8Dc-c%E1%BB%A7a-ph%E1%BB%A5-n%E1%BB%AF.jpg?s=2048x2048&w=is&k=20&c=xr-xMowk82z48i8sf0vbOzcM3DiovF-TxMTNDyxJzo4=',
    description:
      'Những con số xuất hiện trong cuộc sống của bạn không phải là một sự trùng hợp ngẫu nhiên. Với những ai đang trên hành trình thức tỉnh tâm linh, những con số này đều mang một ý nghĩa vô cùng đặc biệt. Hãy cùng thầy Louis Nguyễn giải mã bí ẩn của chúng, cũng như cách những con số này ảnh hưởng đến cuộc chúng ta.',
  },
]
export default function TrainAndApplication() {
  return (
    <Box py={6}>
      <Container maxWidth={false}>
        <Box>
          <Box>
            <IconTwoRhombus />
            <Typography className="text-heading">
              Chương trình đào tạo thần số học
            </Typography>
            <Typography className="text-heading">
              Do thầy Aladanh thành trực tiếp đứng lớp
            </Typography>
          </Box>
          <Box mt={4}>
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {COURSE_LIST.map((courseItem) => {
                return (
                  <SwiperSlide key={courseItem.id}>
                    <CourseCard courseInfo={courseItem} />
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
