import CloseIcon from '@mui/icons-material/Close'
import { Avatar, Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'

import type { SocialLoginType } from '@/models'

import { ButtonSocialSignIn } from '../button'
import { IconFacebookLogin, IconTwitterLogin } from '../icon'

const MODAL_LOGIN_SOCIAL_WIDTH = '485px'
const MODAL_LOGIN_SOCIAL_HEIGHT = '591px'
const ModalCustom = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(4),
  },
}))

interface ModalLoginSocialProps {
  open: boolean
  handleClose: () => void
  onSubmit?: (type: SocialLoginType) => void
}

export default function ModalLoginSocial({
  open,
  handleClose,
  onSubmit,
}: ModalLoginSocialProps) {
  const router = useRouter()
  return (
    <ModalCustom
      onClose={handleClose}
      aria-labelledby="modal login with social"
      open={open}
      disableScrollLock={true}
      PaperProps={{
        sx: {
          borderRadius: 5,
          width: MODAL_LOGIN_SOCIAL_WIDTH,
          height: MODAL_LOGIN_SOCIAL_HEIGHT,
          color: (theme) => theme.palette.common.black,
          top: -50,
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: (theme) => theme.palette.grey[500],
          bgcolor: (theme) => theme.palette.grey[100],
          zIndex: 10,
        }}
      >
        <CloseIcon sx={{ color: '#475866' }} />
      </IconButton>
      <DialogContent>
        <Box textAlign={'center'} height={'100%'} position={'relative'}>
          <Box
            component={'img'}
            px={1.25}
            py={1.5}
            bgcolor={(theme) => theme.palette.primary.main}
            display={'inline-block'}
            borderRadius={5}
            src={`${router.basePath}/assets/images/logo_modal_login.svg`}
          />
          <Typography
            mt={3.75}
            sx={{
              fontFamily: 'var(--philosopher-font)',
              textTransform: 'capitalize',
            }}
            color="common.black"
            component={'h3'}
            variant="h3"
          >
            Chào Mừng bạn đến thần số học online
          </Typography>
          <Box
            maxWidth={300}
            margin={'0 auto'}
            mt={4}
            display={'flex'}
            flexDirection={'column'}
            gap={2.5}
          >
            <ButtonSocialSignIn
              variant="contained"
              fullWidth
              color="info"
              startIcon={<IconFacebookLogin />}
              endIcon={
                <Avatar
                  alt="User"
                  src="/assets/images/Adalash_Thanh.png"
                  sx={{ width: 35, height: 35 }}
                />
              }
              onClick={() => onSubmit?.('facebook')}
            >
              Tiếp tục với Facebook
            </ButtonSocialSignIn>
            <ButtonSocialSignIn
              variant="outlined"
              fullWidth
              startIcon={
                <Box
                  component={'img'}
                  src="/assets/images/icon-google.png"
                  alt="Icon Google"
                />
              }
              sx={{
                color: (theme) => theme.palette.text.secondary,
                border: '1px solid rgba(34, 47, 54, 0.12)',
                '&:hover': {
                  borderColor: (theme) => theme.palette.grey[400],
                },
              }}
              onClick={() => onSubmit?.('google')}
            >
              Tiếp tục với Google
            </ButtonSocialSignIn>
            <ButtonSocialSignIn
              variant="contained"
              fullWidth
              color="info"
              sx={{ bgcolor: '#5CB0F2' }}
              startIcon={<IconTwitterLogin />}
              onClick={() => onSubmit?.('twitter')}
            >
              Tiếp tục với Twitter
            </ButtonSocialSignIn>
          </Box>
          <Typography
            variant="body2"
            color={(theme) => theme.palette.common.black}
            component={'a'}
            href="#"
            sx={{
              position: 'absolute',
              bottom: 0,
              transform: 'translateX(-50%)',
              transition: 'all 0.2s ease',
              ':hover': {
                color: (theme) => theme.palette.primary.main,
              },
            }}
          >
            Bạn cần hỗ trợ?{' '}
            <Typography component={'span'} fontWeight={600} variant="body2">
              Contact Us
            </Typography>
          </Typography>
        </Box>
      </DialogContent>
    </ModalCustom>
  )
}
