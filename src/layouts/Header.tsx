import ClearIcon from '@mui/icons-material/Clear'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import {
  alpha,
  Dialog,
  DialogContent,
  Divider,
  Drawer,
  InputBase,
  MenuList,
  Slide,
  styled,
} from '@mui/material'
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
import type { TransitionProps } from '@mui/material/transitions'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import * as React from 'react'

const pages = ['Trang chủ', 'Giới thiệu', 'Tra cứu', 'Dịch vụ', 'Affiliate']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

// Search
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '9999px',
  backgroundColor: alpha(theme.palette.common.white, 0.2),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.3),
  },
  marginLeft: 0,
  width: '100%',
  display: 'flex',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#fff',
  fontSize: '18px',
  fontWeight: 500,
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(2, 0, 2, 4),
    paddingRight: `calc(1em + ${theme.spacing(2)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}))

// Transition Modal Search
const TransitionModal = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(false)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )
  const [openSearch, setOpenSearch] = React.useState(false)

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

  const [isLogined, setIsLogined] = React.useState(false)
  const handleCloseModalSearch = () => setOpenSearch(false)
  return (
    <AppBar
      position="static"
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'rgba(3, 29, 46, 0.97)',
        zIndex: 100,
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
              <img src="./numerology_logo.svg" alt="Logo Numerology" />
            </Typography>
          </Link>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex', justifyContent: 'center' },
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                // onClick={handleCloseNavMenu}
                size="small"
                sx={{ textTransform: 'uppercase' }}
              >
                {page}
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
            <Dialog
              open={openSearch}
              TransitionComponent={TransitionModal}
              keepMounted
              onClose={handleCloseModalSearch}
              disableScrollLock={true}
              maxWidth="md"
              aria-describedby="alert-dialog-slide-description"
              PaperProps={{
                sx: {
                  bgcolor: '#031E30',
                  maxWidth: 'revert',
                  width: 1000,
                  borderRadius: 2.5,
                  top: -100,
                },
              }}
            >
              <DialogContent sx={{ p: 6 }}>
                <Box
                  sx={{ display: 'flex', alignItems: 'center', height: '100%' }}
                >
                  <Search>
                    <StyledInputBase
                      placeholder="Tìm kiếm..."
                      inputProps={{ 'aria-label': 'search' }}
                    />
                    <IconButton sx={{ p: 2 }} color="primary">
                      <SearchIcon fontSize="large" color="primary" />
                    </IconButton>
                  </Search>
                </Box>
              </DialogContent>
            </Dialog>
            <Divider
              orientation="vertical"
              variant="middle"
              sx={{ borderColor: '#fff', marginLeft: 1 }}
              flexItem
            />
            <Box ml={2}>
              {!isLogined && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => setIsLogined(true)}
                >
                  Đăng Nhập
                </Button>
              )}

              {isLogined && (
                <Box sx={{ flexGrow: 0 }}>
                  <Tooltip title="Personal">
                    <IconButton
                      onClick={handleOpenUserMenu}
                      sx={{ p: 0 }}
                      size="large"
                    >
                      <Avatar
                        alt="User"
                        src="/assets/images/Adalash_Thanh.png"
                        sx={{ width: 50, height: 50 }}
                      />
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
                    {settings.map((setting) => (
                      <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography
                          textAlign="center"
                          onClick={() => setIsLogined(false)}
                          sx={{
                            fontWeight: 600,
                            '&:active': { color: '#F96A2D' },
                          }}
                        >
                          {setting}
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
                  <img src="./numerology_favicon.svg" alt="Logo Numerology" />

                  <IconButton color="primary">
                    <ClearIcon fontSize="large" color="primary" />
                  </IconButton>
                </Box>
                <MenuList>
                  {pages.map((page) => (
                    <MenuItem key={page} sx={{ borderRadius: '5px', py: 1 }}>
                      <Typography
                        textAlign="center"
                        variant="body1"
                        sx={{
                          color: '#fff',
                          fontWeight: 600,
                          '&:active': { color: '#F96A2D' },
                        }}
                      >
                        {page}
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
