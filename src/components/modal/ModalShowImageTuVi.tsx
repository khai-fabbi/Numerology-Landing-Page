import CloseIcon from '@mui/icons-material/Close'
import { Box } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import IconButton from '@mui/material/IconButton'
import Slide from '@mui/material/Slide'
import type { TransitionProps } from '@mui/material/transitions'
import { forwardRef } from 'react'

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />
})

interface Props {
  open: boolean
  handleClose: () => void
  src?: string
}
export default function ModalShowImageTuVi({ open, handleClose, src }: Props) {
  return (
    <Dialog
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <Box sx={{ position: 'sticky', right: 6, top: 6 }}>
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
      </Box>
      <Box
        component={'img'}
        src={src}
        sx={{
          width: '80%',
          objectFit: 'contain',
          margin: '0 auto',
        }}
      />
    </Dialog>
  )
}
