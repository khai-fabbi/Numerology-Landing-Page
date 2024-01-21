import type { InputLabelProps } from '@mui/material'
import {
  Autocomplete,
  Box,
  Button,
  Divider,
  InputLabel,
  Tooltip,
  Typography,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import { styled } from '@mui/material/styles'

import { useCopyToClipboard } from '@/hooks'

import { IconDown } from '../icon'
import { InputBank } from '../input'

const MODAL_PAYMENT_WIDTH = '512px'
const ModalCustom = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(3),
    color: theme.palette.common.black,
  },
}))

export const InputLabelAccount = styled(InputLabel)<InputLabelProps>(
  ({ theme }) => ({
    fontSize: 14,
    fontWeight: '600',
    color: theme.palette.common.black,
    cursor: 'pointer',
  })
)

interface ModalPaymentProps {
  open: boolean
  handleClose: () => void
  onSubmit?: () => void
}
const listBankOptions = [
  { label: 'TP Bank - Ngân hàng Thương mại Cổ phần Tiên Phong' },
  { label: 'MB Bank - Ngân hàng Quân Đội' },
  { label: 'Viettinbank - Ngân hàng Thương mại Cổ phần Tiên Phong' },
  { label: 'Vietcombank - Ngân hàng' },
]

export default function ModalPayment({
  open,
  handleClose,
  onSubmit,
}: ModalPaymentProps) {
  // eslint-disable-next-line unused-imports/no-unused-vars
  const [value, copy] = useCopyToClipboard()
  return (
    <ModalCustom
      onClose={handleClose}
      aria-labelledby="modal login with social"
      open={open}
      disableScrollLock={true}
      PaperProps={{
        sx: {
          borderRadius: 3,
          width: MODAL_PAYMENT_WIDTH,
          color: (theme) => theme.palette.common.black,
          top: -50,
        },
      }}
    >
      <DialogContent>
        <Typography
          sx={{
            fontFamily: 'var(--philosopher-font)',
            textTransform: 'capitalize',
          }}
          color="common.black"
          component={'h4'}
          variant="h4"
        >
          Gói Tổng Đại Lý
        </Typography>
        <Box mt={1}>
          <Box
            className="flex flex-col gap-y-1.5"
            sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.5 }}
          >
            <InputLabelAccount htmlFor="select-bank-id">
              Chọn ngân hàng
            </InputLabelAccount>
            <Autocomplete
              id="select-bank-id"
              placeholder="Chọn ngân hàng"
              // onChange={(_, value) =>
              //   setValue('bank', value?.label || '', {
              //     shouldValidate: true,
              //   })
              // }
              options={listBankOptions}
              popupIcon={<IconDown />}
              renderInput={(params) => (
                <InputBank
                  {...params}
                  variant="outlined"
                  placeholder="Chọn ngân hàng"
                  // error={invalid}
                  // helperText={errors.bank && errors.bank.message}
                />
              )}
              // renderOption={(props, option) => (
              //   <li key={option.id} {...props}>
              //     <div className="w-20 flex-shrink-0 mr-1">
              //       <Image
              //         loading="lazy"
              //         width={100}
              //         height={100}
              //         src={option.logo}
              //         alt=""
              //       />
              //     </div>

              //     {option.label}
              //   </li>
              // )}
            />
          </Box>

          <Box
            sx={{
              mt: 1,
              padding: 2,
              backgroundColor: '#DAE6EE',
              borderRadius: 2,
              display: 'flex',
              flexDirection: 'column',
              rowGap: 1,
            }}
          >
            <Box display={'flex'} alignItems={'center'} columnGap={2}>
              <Typography fontWeight={500} fontSize={'0.875rem'}>
                Số tài khoản :{' '}
                <Typography
                  component={'span'}
                  fontWeight={600}
                  fontSize={'1rem'}
                >
                  12323232323
                </Typography>
              </Typography>

              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 2, height: '30px' }}
                onClick={() => copy('12323232')}
              >
                Copy
              </Button>
            </Box>

            <Typography fontWeight={500} fontSize={'0.875rem'}>
              Tên tài khoản :{' '}
              <Typography component={'span'} fontWeight={600} fontSize={'1rem'}>
                Hoàng Thi Trung
              </Typography>
            </Typography>

            <Typography fontWeight={500} fontSize={'0.875rem'}>
              Chi nhánh :{' '}
              <Typography component={'span'} fontWeight={600} fontSize={'1rem'}>
                PGD Duy Tân
              </Typography>
            </Typography>
          </Box>
          <Typography mt={1}>
            Quét mã QR bên dưới để tiến hành nạp tiền nhanh
          </Typography>
          <Divider sx={{ borderBottom: '#022233', my: 1 }}>
            Hoặc quét mã QR
          </Divider>

          <Box mt={2}>
            <Tooltip title="Click để xem mã QR">
              <Box
                sx={{
                  height: 144,
                  display: 'flex',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <Box
                  component="img"
                  src="https://qrcode-gen.com/images/qrcode-default.png"
                  alt="Ma QR"
                  sx={{
                    height: '100%',
                    borderRadius: '6px',
                    transition: 'all ease 0.2s',
                    boxShadow: 1,
                    '&:hover': {
                      filter: 'brightness(.95)',
                    },
                  }}
                />
              </Box>
            </Tooltip>
          </Box>
          <Box
            mt={4}
            sx={{ display: 'flex', flexDirection: 'column', rowGap: 0.75 }}
          >
            <Typography fontSize={'0.875rem'}>
              Chuyển tiền vào tài khoản bên trên với nội dung ghi chú:
            </Typography>
            <Box sx={{ display: 'flex', columnGap: 1, alignItems: 'center' }}>
              <Typography
                sx={{ fontWeight: '500', fontSize: '2rem', color: '#D0D5DD' }}
              >
                2dsFdsadsa
              </Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ borderRadius: 2, height: '30px' }}
                onClick={() => copy('2dsFdsadsa')}
              >
                Copy
              </Button>
            </Box>
            <Typography component={'span'} fontSize={'0.875rem'}>
              Code hết hạn sau:{' '}
              <Typography component={'span'} color={'primary'}>
                10:20:50
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box mt={4} sx={{ display: 'flex', gap: 1.25 }}>
          <Button
            variant="outlined"
            sx={{
              flex: 1,
              color: '#344054',
              borderColor: '#D0D5DD',
              borderRadius: 2,
            }}
            onClick={handleClose}
          >
            Quay Lại
          </Button>
          <Button
            variant="contained"
            sx={{ flex: 1, borderRadius: 2 }}
            onClick={() => onSubmit?.()}
          >
            Thanh Toán
          </Button>
        </Box>
      </DialogContent>
    </ModalCustom>
  )
}
