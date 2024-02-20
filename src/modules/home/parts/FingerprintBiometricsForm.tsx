import {
  Box,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'

export default function FingerprintBiometricsForm() {
  return (
    <Box>
      <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
        <InputLabel htmlFor="name-id">
          Họ tên khai sinh (nên nhập không dấu)
        </InputLabel>
        <TextField
          placeholder="Nhập họ tên"
          // onChange={onChange}
          // value={value}
          id="name-id"
          // error={invalid}
          // helperText={
          //   errors.name ? (errors.name?.message as unknown as string) : ''
          // }
        />
      </Box>
      <Box sx={{ mt: 4, display: 'flex' }}>
        <Box sx={{ flex: 1 }}>
          <Box display={'flex'} columnGap={3} alignItems={'center'}>
            <InputLabel htmlFor="left-brain-id">Não trái/Tay phải</InputLabel>
            <TextField
              // placeholder="Nhập họ tên"
              // onChange={onChange}
              // value={value}
              id="left-brain-id"
              sx={{ maxWidth: '120px' }}
              // error={invalid}
              // helperText={
              //   errors.name ? (errors.name?.message as unknown as string) : ''
              // }
            />
          </Box>
          <Box
            mt={3}
            sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
          >
            {/* Header */}
            <Box display={'flex'} gap={4} columnGap={2}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                NGÓN
              </Typography>
              <Typography
                component={'span'}
                sx={{ flex: 1, textAlign: 'center' }}
              >
                CHỦNG
              </Typography>
              <Typography
                component={'span'}
                sx={{ flex: 1, textAlign: 'center' }}
              >
                CHỈ SỐ
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                CÁI
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                TRỎ
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                GIỮA
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                NHẪN
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                ÚT
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            width: 2,
            mx: 3,
            background:
              'linear-gradient(0deg, rgba(246, 116, 10, 0.00) 0%, #F96A2D 49.48%, rgba(209, 128, 62, 0.00) 100%)',
            borderBottom: 'none',
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Box display={'flex'} columnGap={3} alignItems={'center'}>
            <InputLabel htmlFor="right-brain-id">Não phải/Tay trái</InputLabel>
            <TextField
              // placeholder="Nhập họ tên"
              // onChange={onChange}
              // value={value}
              id="right-brain-id"
              sx={{ maxWidth: '120px' }}
              // error={invalid}
              // helperText={
              //   errors.name ? (errors.name?.message as unknown as string) : ''
              // }
            />
          </Box>
          <Box
            mt={3}
            sx={{ display: 'flex', flexDirection: 'column', rowGap: 2 }}
          >
            {/* Header */}
            <Box display={'flex'} gap={4} columnGap={2}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                NGÓN
              </Typography>
              <Typography
                component={'span'}
                sx={{ flex: 1, textAlign: 'center' }}
              >
                CHỦNG
              </Typography>
              <Typography
                component={'span'}
                sx={{ flex: 1, textAlign: 'center' }}
              >
                CHỈ SỐ
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                CÁI
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1, textAlign: 'center' }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                TRỎ
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                GIỮA
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                NHẪN
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                ÚT
              </Typography>
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
              <TextField
                sx={{ flex: 1 }}
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box mt={4}>
        <Typography
          sx={{ textAlign: 'center', fontSize: '26px', fontWeight: '700' }}
        >
          Chỉ số thông minh
        </Typography>
        <Grid container mt={0.5} spacing={2} columnSpacing={4}>
          <Grid item xs={3}>
            <Box display={'flex'} columnGap={2} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0 }}>EQ</InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display={'flex'} columnGap={2} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0 }}>IQ</InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display={'flex'} columnGap={2} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0 }}>AQ</InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box display={'flex'} columnGap={2} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0 }}>CQ</InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box mt={4}>
        <Typography
          sx={{ textAlign: 'center', fontSize: '26px', fontWeight: '700' }}
        >
          8 Loại hình thông minh
        </Typography>
        <Grid container mt={0.5} spacing={2} columnSpacing={2}>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Âm nhạc
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Nội tâm
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Giao Tiếp
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Thiên nhiên
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Grid container mt={0.5} spacing={2} columnSpacing={2}>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Ngôn ngữ
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Thị Giác
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Logic
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box display={'flex'} columnGap={1} alignItems={'center'}>
              <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                Vận động
              </InputLabel>
              <TextField
                InputProps={{
                  inputProps: {
                    style: {
                      textAlign: 'center',
                      maxWidth: '50px',
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
