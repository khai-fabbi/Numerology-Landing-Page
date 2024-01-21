import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import * as React from 'react'

const LOGOUT_VALUE = 3
const SIDEBAR_MENU_LIST = [
  {
    label: 'Thông tin tài khoản',
    value: 1,
  },
  {
    label: 'Gói đang sử dụng',
    value: 2,
  },
  {
    label: 'Đăng xuất',
    value: 3,
  },
]
interface Props {
  tabActive: number
  onChangeTab: (value: number) => void
}
export default function SideBarAccount({ tabActive, onChangeTab }: Props) {
  return (
    <Box>
      <Box>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{ width: 110, height: 110 }}
        />
        <Box component={'h2'} mt={1} fontWeight={600}>
          Hoangtrung
        </Box>
        <Typography color={'#F0F8FD'}>hoangtrung@gmail.com</Typography>
      </Box>
      <List sx={{ mt: 5 }}>
        {SIDEBAR_MENU_LIST.map((item) => {
          const isActive = item.value === tabActive
          return (
            <ListItem disablePadding key={item.value}>
              <ListItemButton
                selected={isActive}
                onClick={() => {
                  if (item.value === LOGOUT_VALUE) return
                  onChangeTab(item.value)
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: '1.125rem',
                    fontWeight: isActive ? '600' : '400',
                    color: (theme) =>
                      isActive ? theme.palette.primary.main : 'white',
                  }}
                />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
