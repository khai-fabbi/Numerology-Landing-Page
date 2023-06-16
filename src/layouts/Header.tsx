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
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn, signOut, useSession } from 'next-auth/react'
import * as React from 'react'

import { IconDown } from '@/components/icon'
import { ModalLoginSocial, ModalSearch } from '@/components/modal'
import type { SocialLoginType } from '@/models'

const PAGES = [
  {
    name: 'Trang chủ',
    to: '#',
  },
  {
    name: 'Giới thiệu',
    to: '#',
  },
  {
    name: 'Tra cứu',
    to: '#tra-cuu',
  },
  {
    name: 'Dịch vụ',
    to: '#thong-tin-aladash',
  },
  {
    name: 'Affiliate',
    to: '#',
  },
]
const CALLBACK_URL_LOGIN = `${process.env.NEXTAUTH_URL}`

function ResponsiveAppBar() {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const [openSearch, setOpenSearch] = React.useState(false)
  const [openLogin, setOpenLogin] = React.useState(false)
  const settings = [
    {
      name: 'Xem Trang Cá Nhân',
      onSubmit: () => router.push('/profile'),
    },
    {
      name: 'Đăng Kí Member VIP',
      onSubmit: () => router.push('/check-out'),
    },
    {
      name: 'Đăng Nhập Lại',
      onSubmit: () => setOpenLogin(true),
    },
    {
      name: 'Đăng Xuất',
      onSubmit: () => signOut(),
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
  const handleCloseModalLogin = () => setOpenLogin(false)
  const handleLoginWithSocial = (type: SocialLoginType) => {
    signIn(type, { callbackUrl: CALLBACK_URL_LOGIN })
  }
  const { data: session } = useSession()

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
                my: 2,
                '&:hover': {
                  filter: 'brightness(0.75)',
                  transition: 'all ease 0.2s',
                },
              }}
            >
              <img
                src={`${router.basePath}/numerology_logo.svg`}
                alt="Logo Numerology"
              />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            {PAGES.map(({ name, to }) => (
              <Button
                key={name}
                size="small"
                sx={{ textTransform: 'uppercase' }}
                onClick={() => router.push(to, undefined, { scroll: false })}
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
                    onClick={() => setOpenLogin(true)}
                  >
                    Đăng Nhập
                  </Button>
                </>
              )}
              <ModalLoginSocial
                open={openLogin}
                handleClose={handleCloseModalLogin}
                onSubmit={handleLoginWithSocial}
              />

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
                    src={`${router.basePath}/numerology_favicon.svg`}
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
    </AppBar>
  )
}
export default ResponsiveAppBar
