import * as React from 'react'

export interface TabPanelAccountProps {
  children?: React.ReactNode
  dir?: string
  index: number
  value: number
}

export default function TabPanelAccount(props: TabPanelAccountProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <div className="py-7.5">{children}</div>}
    </div>
  )
}
