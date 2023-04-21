import MuiButton from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const ButtonSocialSignIn = styled(MuiButton)(() => ({
  minHeight: 52,
  paddingLeft: 50,
  paddingRight: 50,
  textTransform: 'none',
  '& .MuiButton-startIcon': {
    position: 'absolute',
    left: 14,
  },
  '& .MuiButton-endIcon': {
    position: 'absolute',
    right: 14,
  },
}))
