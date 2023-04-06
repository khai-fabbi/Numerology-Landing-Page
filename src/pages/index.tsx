import {
  Box,
  Container,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'

const currencies = [
  {
    value: 'M',
    label: 'Male',
  },
  {
    value: 'F',
    label: 'Female',
  },
]
const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Container>
        <Paper
          elevation={1}
          sx={{
            minHeight: '400px',
            borderRadius: '10px',
            p: '20px',
          }}
        >
          <Button variant="contained" color="primary">
            Tra cứu các chỉ số của bạn ngay
          </Button>
          <Typography color="chocolate" sx={{ marginTop: '20px' }}>
            Những nghiên cứu về Thần số học của Thầy Aladanh Thành đang mang đến
            một làn sóng tích cực trong đại chúng Việt Nam. Không chỉ là các
            phân tích để giúp mỗi người tìm ra những tiềm năng thực sự và trả
            lời được câu hỏi mình là ai trong cuộc đời này, những nghiên cứu sâu
            và rộng khắp các lĩnh vực của thầy còn giúp hàng triệu người lựa
            chọn được con đường đi đúng đắn, giúp cho những người làm kinh doanh
            tìm ra định hướng phù hợp trong chiến lược và trong quản trị doanh
            nghiệp, quan hệ khách hàng.
          </Typography>
          <h1>aaaaa</h1>
        </Paper>
        <Typography variant="h1">aaaa</Typography>
        <Button variant="outlined" color="primary">
          Tìm hiểu thêm
        </Button>
        <Box
          width={550}
          mt={4}
          display={'flex'}
          flexDirection={'column'}
          rowGap={2}
        >
          <TextField fullWidth placeholder="Nhập họ tên" />
          <TextField
            id="outlined-select-currency"
            select
            placeholder="Giới tính"
            defaultValue={'M'}
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Box>
      </Container>
    </Box>
  )
}
Home.getLayout = function getLayout(page: ReactElement) {
  return <Main meta={<Meta title="Home" description="Home" />}>{page}</Main>
}

export default Home
