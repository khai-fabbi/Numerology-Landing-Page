import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { Box, Fab } from '@mui/material'
import Cookies from 'js-cookie'
import { useSession } from 'next-auth/react'
import { type ReactNode, useEffect } from 'react'

import ScrollTop from '@/components/common/ScrollTop'
import numerologyApi from '@/pages/api/numerologyApi'

import Footer from './Footer'
import Header from './Header'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => {
  const { data: session } = useSession()

  async function convertTokenFunc(token: string, type: string) {
    try {
      const res = await numerologyApi.convertTokenSocial(token, type)
      if (res) {
        Cookies.set('access_token', res.access_token, {
          expires: res.expires_in,
        })
        Cookies.set('refresh_token', res.refresh_token)
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }
  useEffect(() => {
    if (session && session.account.access_token) {
      const { account } = session

      convertTokenFunc(account.access_token as string, account.provider)
    }
  }, [session])
  return (
    <Box sx={{ width: '100%' }} id="wrapper" component={'main'}>
      {props.meta}
      <Header />
      {props.children}
      <Footer />
      <ScrollTop {...props}>
        <Fab size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{ width: 32, height: 32 }} />
        </Fab>
      </ScrollTop>
    </Box>
  )
}

export { Main }
