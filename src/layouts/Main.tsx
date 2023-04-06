import { Box } from '@mui/material'
import type { ReactNode } from 'react'

import Header from './Header'

type IMainProps = {
  meta: ReactNode
  children: ReactNode
}

const Main = (props: IMainProps) => (
  <Box sx={{ width: '100%' }}>
    {props.meta}
    <Header />
    <Box>{props.children}</Box>
  </Box>
)

export { Main }
