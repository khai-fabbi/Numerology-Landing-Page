import { Box, Container, Divider, Grid } from '@mui/material'
import { useSearchParams } from 'next/navigation'
import { type ReactElement, useEffect, useState } from 'react'
import useSWR from 'swr'

import { Loading } from '@/components/loading'
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

import profileApi from '../api/profile'

const AccountPage: NextPageWithLayout = () => {
  const searchParams = useSearchParams()

  const [tabActive, setTabActive] = useState(
    Number(searchParams.get('tab')) || 1
  )
  useEffect(() => {
    setTabActive(Number(searchParams.get('tab')) || 1)
  }, [searchParams])

  const handleChangeTab = (value: number) => {
    setTabActive(value)
    goToTop()
  }
  // const theme = useTheme();
  const { data: response, isLoading } = useSWR('profile-api', () =>
    Promise.all([profileApi.getProfile(), profileApi.getPackageHistory()])
  )

  const profileInfo = response?.[0]?.data

  const packageHistory = response?.[1].data

  return (
    <Box className="bg-account-page">
      <Loading isOpen={isLoading} />
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
              profileInfo={profileInfo}
            />
          </Grid>
          <Grid item xs={12} md={9}>
            <TabPanelAccount index={1} value={tabActive}>
              <AccountInfo profileInfo={profileInfo} />
            </TabPanelAccount>
            <TabPanelAccount index={2} value={tabActive}>
              <PackageByAccount packageHistory={packageHistory} />
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
