import ClearIcon from '@mui/icons-material/Clear'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import { Divider, Drawer, MenuList } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import * as React from 'react'

import { IconDown } from '@/components/icon'
import { ModalLoginSocial, ModalSearch } from '@/components/modal'
import type { SocialLoginType } from '@/models'
import { useStore } from '@/store/useStore'

const PAGES = [
  {
    name: 'Trang chủ',
    to: '/',
  },
  {
    name: 'TRA CỨU TỬ VI',
    to: '/tra-cuu-tu-vi',
  },
  {
    name: 'TRA CỨU PPS',
    to: '/#tra-cuu',
  },
  {
    name: 'Dịch vụ',
    to: '/danh-sach-goi',
  },
]
const CALLBACK_URL_LOGIN = `${process.env.NEXTAUTH_URL}`

function ResponsiveAppBar() {
  const router = useRouter()
  const { data: session } = useSession()
  const [anchorElNav, setAnchorElNav] = React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const [openSearch, setOpenSearch] = React.useState(false)

  // modal login
  const { openLogin, openModalLogin, closeModalLogin } = useStore((state) => ({
    openLogin: state.isOpenLoginModal,
    openModalLogin: state.openLoginModal,
    closeModalLogin: state.closeLoginModal,
  }))

  const settings = [
    {
      name: 'Xem Trang Cá Nhân',
      onSubmit: () => router.push('/account'),
    },
    {
      name: 'Dịch Vụ',
      onSubmit: () => {
        if (!session?.user) {
          openModalLogin()
          return
        }
        router.push('/danh-sach-goi')
      },
    },
    {
      name: 'Đăng Nhập Lại',
      onSubmit: openModalLogin,
    },
    {
      name: 'Đăng Xuất',
      onSubmit: () =>
        signOut().then(() => {
          Cookies.remove('access_token')
          Cookies.remove('refresh_token')
        }),
    },
  ]
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const toggleDrawer =
    (isOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setAnchorElNav(isOpen)
    }

  const handleCloseModalSearch = () => setOpenSearch(false)
  const handleLoginWithSocial = (type: SocialLoginType) => {
    signIn(type, { callbackUrl: CALLBACK_URL_LOGIN })
  }

  return (
    <AppBar
      position="static"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(3, 29, 46, 0.9)',
        zIndex: 100,
        backdropFilter: 'blur(4px)',
      }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters>
          <Link passHref href={'/'} legacyBehavior>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                my: 0.5,
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  filter: 'brightness(0.75)',
                  transition: 'all ease 0.2s',
                },
              }}
            >
              <Image
                width={82}
                height={82}
                src={`${router.basePath}/logo.png`}
                alt="Logo Numerology"
              />
              <Image
                width={240}
                height={40}
                src={`${router.basePath}/khoa-hoc-con-so.png`}
                alt="khoa hoc con so"
              />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            {PAGES.map(({ name, to }, idx) => (
              <Button
                key={name}
                size="small"
                sx={{ textTransform: 'uppercase' }}
                onClick={() => {
                  if (idx === 3 && !session?.user) {
                    openModalLogin()
                    return
                  }
                  router.push(to, undefined, { scroll: idx === 3 })
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: {
                xs: 'none',
                md: 'flex',
              },
              flexShrink: 0,
              justifyContent: {
                xs: 'center',
                md: 'right',
              },
              alignItems: 'center',
            }}
          >
            <IconButton color="primary" onClick={() => setOpenSearch(true)}>
              <SearchIcon fontSize="large" sx={{ color: '#fff' }} />
            </IconButton>
            {/* Modal Search  */}
            <ModalSearch
              open={openSearch}
              handleClose={handleCloseModalSearch}
            />
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ borderColor: '#fff', marginLeft: 1 }}
              flexItem
            />
            <Box ml={2}>
              {!session?.user && (
                <>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={openModalLogin}
                  >
                    Đăng Nhập
                  </Button>
                </>
              )}

              {session?.user && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title={session.user.name}>
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                      size="large"
                    >
                      <Avatar
                        alt="User"
                        src={session.user.image || 'A'}
                        sx={{
                          width: 46,
                          height: 46,
                          mr: 1,
                        }}
                      />
                      <IconDown />
                    </IconButton>
                  </Tooltip>
                  <Menu
                    sx={{ mt: 8 }}
                    id="menu-appbar"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    disableScrollLock={true}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                  >
                    {settings.map(({ name, onSubmit }) => (
                      <MenuItem key={name} onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          onClick={onSubmit}
                          sx={{
                            fontWeight: 600,
                            '&:active': { color: '#F96A2D' },
                          }}
                        >
                          {name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              )}
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: 'flex', md: 'none' },
              marginLeft: 'auto',
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleDrawer(true)}
              color="inherit"
            >
              <MenuIcon fontSize="large" color="primary" />
            </IconButton>
            <Drawer
              anchor="right"
              open={anchorElNav}
              onClose={toggleDrawer(false)}
            >
              <Box
                sx={{
                  width: 250,
                  p: 1,
                  height: '100%',
                }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
                className="menu-mobile-navbar"
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    p: 1,
                  }}
                >
                  <img
                    src={`${router.basePath}/favicon.svg`}
                    alt="Logo Numerology"
                  />

                  <IconButton color="primary">
                    <ClearIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>
                <MenuList>
                  {PAGES.map(({ name, to }) => (
                    <MenuItem key={name} sx={{ borderRadius: '5px', py: 1 }}>
                      <Typography
                        textAlign="center"
                        variant="body1"
                        sx={{
                          color: '#fff',
                          fontWeight: 600,
                          '&:active': { color: '#F96A2D' },
                        }}
                        component={'a'}
                        href={to}
                      >
                        {name}
                      </Typography>
                    </MenuItem>
                  ))}
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </Toolbar>
      </Container>
      <ModalLoginSocial
        open={openLogin}
        handleClose={closeModalLogin}
        onSubmit={handleLoginWithSocial}
      />
    </AppBar>
  )
}
export default ResponsiveAppBar
