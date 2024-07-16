import type { TextFieldProps } from '@mui/material'
import {
  Box,
  Divider,
  Grid,
  InputLabel,
  TextField,
  Typography,
} from '@mui/material'
import * as React from 'react'
import { type Control, Controller } from 'react-hook-form'

import type { FormSearch } from '../LookUpNumerology'

const MIN_NUMBER = 0
const MAX_NUMBER = 1000

export const InputSearch = ({
  type = 'number',
  sx,
  onChange,
  ...props
}: TextFieldProps) => {
  const inputProps = props.InputProps?.inputProps || {
    style: {
      textAlign: 'center',
    },
    maxLength: 6,
    min: MIN_NUMBER,
    max: MAX_NUMBER,
  }
  return (
    <TextField
      {...props}
      type={type}
      sx={{ flex: 1, ...sx }}
      InputProps={{
        inputProps,
      }}
      onChange={(e) => {
        if (type === 'number') {
          // let value = Number(parseFloat(e.target.value).toFixed(2))
          // if (value >= MAX_NUMBER) value = MAX_NUMBER
          // if (value < MIN_NUMBER) value = MIN_NUMBER
          // e.target.value = value ? value.toString() : ''

          let { value } = e.target

          // value = value.replace(/[^0-9.]/g, '')

          if (value.includes('.')) {
            const parts = value.split('.')
            // @ts-ignore
            if (parts[1].length > 2) {
              // @ts-ignore
              parts[1] = parts[1].substring(0, 2)
            }
            value = parts.join('.')
          }

          if (parseFloat(value) >= MAX_NUMBER) value = MAX_NUMBER.toString()
          if (parseFloat(value) <= MIN_NUMBER) value = MIN_NUMBER.toString()
          e.target.value = value
        }
        onChange?.(e)
      }}
    />
  )
}

interface Props {
  control: Control<FormSearch, any>
}
export default function FingerprintBiometricsForm({ control }: Props) {
  return (
    <Box>
      <Box sx={{ mt: 4, display: 'flex' }}>
        <Box sx={{ flex: 1 }}>
          <Box display={'flex'} columnGap={3} alignItems={'center'}>
            <InputLabel htmlFor="left-brain-id">Não trái/Tay phải</InputLabel>
            <Controller
              control={control}
              name="l"
              render={({ field: { ref, ...fieldProps } }) => (
                <InputSearch
                  id="left-brain-id"
                  inputRef={ref}
                  {...fieldProps}
                  sx={{ maxWidth: '120px', width: '100%' }}
                />
              )}
            />
            {/* <InputSearch
              id="left-brain-id"
              sx={{ maxWidth: '120px', width: '100%' }}
            /> */}
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
              {/* r1_1 */}
              <Controller
                control={control}
                name="r1_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />

              {/* r1_2 */}
              <Controller
                control={control}
                name="r1_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                TRỎ
              </Typography>
              {/* r2_1 */}
              <Controller
                control={control}
                name="r2_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />

              {/* r1_2 */}
              <Controller
                control={control}
                name="r2_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                GIỮA
              </Typography>
              {/* r3_1 */}
              <Controller
                control={control}
                name="r3_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* r3_2 */}
              <Controller
                control={control}
                name="r3_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                NHẪN
              </Typography>
              {/* r4_1 */}
              <Controller
                control={control}
                name="r4_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* r4_2 */}
              <Controller
                control={control}
                name="r4_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                ÚT
              </Typography>
              {/* r5_1 */}
              <Controller
                control={control}
                name="r5_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* r5_2 */}
              <Controller
                control={control}
                name="r5_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
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
            <Controller
              control={control}
              name="r"
              render={({ field: { ref, ...fieldProps } }) => (
                <InputSearch
                  id="right-brain-id"
                  inputRef={ref}
                  {...fieldProps}
                  sx={{ maxWidth: '120px', width: '100%' }}
                />
              )}
            />
            {/* <InputSearch
              id="right-brain-id"
              sx={{ maxWidth: '120px', width: '100%' }}
            /> */}
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
              {/* l1_1 */}
              <Controller
                control={control}
                name="l1_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* l1_2 */}
              <Controller
                control={control}
                name="l1_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                TRỎ
              </Typography>
              {/* l2_1 */}
              <Controller
                control={control}
                name="l2_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* l2_2 */}
              <Controller
                control={control}
                name="l2_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                GIỮA
              </Typography>
              {/* l3_1 */}
              <Controller
                control={control}
                name="l3_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* l3_2 */}
              <Controller
                control={control}
                name="l3_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                NHẪN
              </Typography>
              {/* l4_1 */}
              <Controller
                control={control}
                name="l4_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* l4_2 */}
              <Controller
                control={control}
                name="l4_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
              />
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', columnGap: 2 }}>
              <Typography component={'span'} sx={{ flex: 1 }}>
                ÚT
              </Typography>
              {/* l5_1 */}
              <Controller
                control={control}
                name="l5_1"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch type="text" inputRef={ref} {...fieldProps} />
                )}
              />
              {/* l5_2 */}
              <Controller
                control={control}
                name="l5_2"
                render={({ field: { ref, ...fieldProps } }) => (
                  <InputSearch inputRef={ref} {...fieldProps} />
                )}
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
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="eq"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={2} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0 }}>EQ</InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="iq"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={2} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0 }}>IQ</InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="aq"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={2} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0 }}>AQ</InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="cq"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={2} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0 }}>CQ</InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
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
            <Controller
              control={control}
              name="type_iq_1"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Âm nhạc
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_2"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Nội tâm
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_3"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Giao Tiếp
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_4"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Thiên nhiên
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
        </Grid>
        <Grid container mt={0.5} spacing={2} columnSpacing={2}>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_5"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Ngôn ngữ
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_6"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Thị Giác
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_7"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Logic
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
          <Grid item xs={6} md={3}>
            <Controller
              control={control}
              name="type_iq_8"
              render={({ field: { ref, ...fieldProps } }) => (
                <Box display={'flex'} columnGap={1} alignItems={'center'}>
                  <InputLabel sx={{ flexShrink: 0, minWidth: '85px' }}>
                    Vận động
                  </InputLabel>
                  <InputSearch inputRef={ref} {...fieldProps} />
                </Box>
              )}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
