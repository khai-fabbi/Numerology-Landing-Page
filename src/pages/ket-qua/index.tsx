import { Box, Container } from '@mui/material'
import type { ReactElement } from 'react'

import { Main } from '@/layouts/Main'
import { Meta } from '@/layouts/Meta'
import type { NextPageWithLayout } from '@/models'
import {
  ApproachAttitude,
  AttitudeIndicator,
  BannerSearchResultPage,
  CapacityIndicator,
  ChallengeIndicators,
  ChallengePersonalityIndicators,
  ChallengeSoulIndicators,
  CharacterGroup,
  ChiSoNoNghiep,
  CycleFortunes,
  LifeCycle,
  LifeNumber,
  MatureCapacityIndicators,
  MatureIndicators,
  MissionIndicators,
  MonthIndicators,
  MotivationIndicator,
  NaturalPowerIndicator,
  OvercomeDifficulties,
  PersonalityIndicators,
  PowerChart,
  PyramidNumerology,
  SoulIndicators,
  SummaryChart,
  ThinkingIndicator,
  WeaknessIndicators,
  YearIndicators,
} from '@/modules/result'
import { BoxExportPDF } from '@/modules/result/parts'

const SearchResultPage: NextPageWithLayout = () => {
  const userInfo = {
    name: 'Vu van Khai',
    birthday: '22/12/1999',
    mainNumber: 9,
    isVip: false,
  }
  return (
    <Box className="search-results-page-wrapper">
      <BannerSearchResultPage userInfo={userInfo} />
      <Box pt={9} pb={23}>
        <Container maxWidth={false}>
          <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: 3.75 }}>
            <CycleFortunes isVip={false} />
            <CharacterGroup isVip={false} />
            <LifeNumber isVip={false} />
            <LifeCycle isVip={false} />
            <PyramidNumerology isVip={false} />
            <YearIndicators isVip={false} />
            <MonthIndicators isVip={false} />
            <MissionIndicators isVip={false} />
            <ChallengeIndicators isVip={false} />
            <MatureIndicators isVip={false} />
            <MatureCapacityIndicators isVip={false} />
            <SoulIndicators isVip={false} />
            <ChallengeSoulIndicators isVip={false} />
            <PersonalityIndicators isVip={false} />
            <ChallengePersonalityIndicators isVip={false} />
            <WeaknessIndicators isVip={false} />
            <ChiSoNoNghiep isVip={false} />
            <PowerChart isVip={false} />
            <SummaryChart isVip={false} />
            <AttitudeIndicator isVip={false} />
            <NaturalPowerIndicator isVip={false} />
            <OvercomeDifficulties isVip={false} />
            <ThinkingIndicator isVip={false} />
            <MotivationIndicator isVip={false} />
            <CapacityIndicator isVip={false} />
            <ApproachAttitude isVip={false} />
            <BoxExportPDF />
          </Box>
        </Container>
      </Box>
    </Box>
  )
}
SearchResultPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Main
      meta={
        <Meta title="Xem kết quả tra cứu" description="Xem kết quả tra cứu" />
      }
    >
      {page}
    </Main>
  )
}

export default SearchResultPage
