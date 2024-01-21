import { styled } from '@mui/material/styles'
import type { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'

export const InputBank = styled((props: TextFieldProps) => (
  <TextField {...props} variant="outlined" />
))(({ theme }) => ({
  '& .MuiInputBase-input': {
    color: theme.palette.common.black,
  },

  '& .MuiInputBase-root': {
    borderRadius: 8,
    minWidth: 300,
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
  },

  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#215261',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#215261',
    },
    '&:hover fieldset': {
      borderColor: '#215261',
    },
  },
  // "& .Mui-error": {
  //   "& fieldset": {
  //     borderColor: "#fda18b !important",
  //   },
  // },
  '& .MuiFormHelperText-root': {
    fontWeight: '500',
    color: 'white',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: '#d32f2f',
  },
}))
