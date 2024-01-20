import '@/styles/main.scss'

import type { EmotionCache } from '@emotion/react'
import { CacheProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import type { ReactElement } from 'react'

import type { NextPageWithLayout } from '@/models'
import { philosopher, raleway } from '@/styles/fonts'
import lightThemeOptions from '@/styles/theme/light-theme-option'
import createEmotionCache from '@/utils/createEmotionCache'
import CustomDateAdapter from '@/utils/helpers'

const clientSideEmotionCache = createEmotionCache()

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
  emotionCache: EmotionCache
}

const lightTheme = createTheme(lightThemeOptions)
const MyApp = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: AppPropsWithLayout) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)
  return (
    <SessionProvider
      session={pageProps.session}
      refetchOnWindowFocus={false}
      refetchInterval={60 * 60}
    >
      <LocalizationProvider
        dateFormats={{ monthShort: 'T.M', monthAndYear: 'MM/YYYY' }}
        // @ts-ignore
        dateAdapter={CustomDateAdapter}
      >
        <CacheProvider value={emotionCache}>
          <div className={`${raleway.variable} ${philosopher.variable}`}>
            <ThemeProvider theme={lightTheme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              {getLayout(<Component {...pageProps} />)}
            </ThemeProvider>
          </div>
        </CacheProvider>
      </LocalizationProvider>
    </SessionProvider>
  )
}

export default MyApp
