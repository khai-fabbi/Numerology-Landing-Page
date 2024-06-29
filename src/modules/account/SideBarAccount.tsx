import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import Cookies from 'js-cookie'
import { signOut } from 'next-auth/react'
import * as React from 'react'

import { useBoolean } from '@/hooks'
import type { ProfileData } from '@/pages/api/type'

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
  profileInfo?: ProfileData
}
export default function SideBarAccount({
  tabActive,
  onChangeTab,
  profileInfo,
}: Props) {
  const [isVisible, openModal, closeModal] = useBoolean()
  const handleLogout = () => {
    signOut().then(() => {
      Cookies.remove('access_token')
      Cookies.remove('refresh_token')
    })
  }
  return (
    <>
      <Box>
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1546587348-d12660c30c50?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          sx={{ width: 110, height: 110 }}
        />
        <Box component={'h2'} mt={1} fontWeight={600}>
          {profileInfo?.profile?.name}
        </Box>
        <Typography color={'#F0F8FD'}>{profileInfo?.email}</Typography>
      </Box>
      <List sx={{ mt: 5 }}>
        {SIDEBAR_MENU_LIST.map((item) => {
          const isActive = item.value === tabActive
          return (
            <ListItem disablePadding key={item.value}>
              <ListItemButton
                selected={isActive}
                onClick={() => {
                  if (item.value === LOGOUT_VALUE) {
                    openModal()
                    return
                  }
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

      <Dialog
        open={isVisible}
        onClose={closeModal}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        disableScrollLock={true}
      >
        <DialogTitle id="alert-dialog-title">
          Bạn có chắc chắn đăng xuất ???
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Sau khi đăng xuất bạn sẽ không thể sử dụng dịch vụ của Khoa học
            những con số...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeModal}
            style={{ color: 'black' }}
            variant="text"
          >
            Hủy
          </Button>
          <Button onClick={handleLogout} variant="contained">
            Đăng xuất
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
