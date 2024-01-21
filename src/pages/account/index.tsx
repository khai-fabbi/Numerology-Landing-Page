import { Box, Container, Divider, Grid } from '@mui/material'
import { type ReactElement, useState } from 'react'

import TabPanelAccount from '@/components/views/TabPanelAccount'
import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import {
  AccountInfo,
  PackageByAccount,
  SideBarAccount,
} from '@/modules/account'
import { goToTop } from '@/utils/helpers'

const AccountPage: NextPageWithLayout = () => {
  const [tabActive, setTabActive] = useState(1)
  const handleChangeTab = (value: number) => {
    setTabActive(value)
    goToTop()
  }
  // const theme = useTheme();
  return (
    <Box className="bg-account-page">
      <Container maxWidth={false}>
        <Box component={'h2'} py={3} fontWeight={500}>
          PPns Account
        </Box>
        <Divider />
        <Grid container spacing={4} mt={2}>
          <Grid item xs={12} md={3}>
            <SideBarAccount
              tabActive={tabActive}
              onChangeTab={handleChangeTab}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <TabPanelAccount index={1} value={tabActive}>
              <AccountInfo />
            </TabPanelAccount>
            <TabPanelAccount index={2} value={tabActive}>
              <PackageByAccount />
            </TabPanelAccount>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
AccountPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main
      meta={
        <Meta title="Thông tin tài khoản" description="Thông tin tài khoản" />
      }
    >
      {page}
    </Main>
  )
}

export default AccountPage
