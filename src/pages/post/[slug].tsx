import { Box } from '@mui/material'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import { BannerPost, PostContent } from '@/modules/post'

const ArticleDetail: NextPageWithLayout = () => {
  return (
    <Box className="blog-post-page-wrapper">
      <BannerPost title="Cách tính Thần số học chuẩn Pythagoras" />
      <PostContent />
    </Box>
  )
}
ArticleDetail.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main
      meta={<Meta title="Chi tiết bài viết" description="Chi tiết bài viết" />}
    >
      {page}
    </Main>
  )
}

export default ArticleDetail
