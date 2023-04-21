import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import { BannerPost } from '@/modules/post'

const ArticleDetail: NextPageWithLayout = () => {
  return (
    <>
      <BannerPost title="Cách tính Thần số học chuẩn Pythagoras" />
    </>
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
