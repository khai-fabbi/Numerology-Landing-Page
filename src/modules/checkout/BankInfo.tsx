import HistoryIcon from '@mui/icons-material/History'
import { Box, Divider, Grid, Tooltip, Typography } from '@mui/material'
import axios from 'axios'
import dynamic from 'next/dynamic'
import { useEffect, useMemo, useState } from 'react'

import { ButtonBank } from '@/components/button'
import { Loading } from '@/components/loading'
import { ModalInfo } from '@/components/modal'
import { useBanks, useToggle } from '@/hooks'
import type { Bank } from '@/hooks/useBanks'
import type { Package } from '@/pages/api/type'
import { convertToVND, generateRandomText } from '@/utils/helpers'

import { TitleItem } from './parts'

const TextCopy = dynamic(() => import('./parts/TextCopy'), { ssr: false })

const NUM_OF_QRCODE = 6
const getQRCodeUrl = (bankInfo: Bank, codeGen: string) => {
  return `https://img.vietqr.io/image/${bankInfo.code}-${bankInfo.account_number}-qr_only.jpg?addInfo=${codeGen}&accountName=${bankInfo.account_holder}`
}

interface BankInfoProps {
  packageSelected: Package | null
}

export default function BankInfo({ packageSelected }: BankInfoProps) {
  const [isOpenQR, toggleModalQR] = useToggle(false)
  const { banks, isLoading } = useBanks()

  const [bankSelected, setBankSelected] = useState<Bank | null>(null)
  const [codeQR, setCodeQR] = useState('')
  const [imageQRCode, setImageQRCode] = useState<any>('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (banks && banks.data.length > 0) {
      setBankSelected(banks.data[0] as Bank)
    }
  }, [banks])

  // fetching QR Image
  const fetchQRCode = async (bank: any, code: string) => {
    setLoading(true)
    const url = getQRCodeUrl(bank, code)
    try {
      await axios.get(url)
      setCodeQR(code)
      setImageQRCode(url)
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!bankSelected) return
    const genQACode = generateRandomText(NUM_OF_QRCODE).toUpperCase()
    fetchQRCode(bankSelected, genQACode)
  }, [bankSelected])

  const pricePackage = useMemo(() => {
    return convertToVND(
      packageSelected?.price_sale || packageSelected?.price || 0
    )
  }, [packageSelected])

  return (
    <Box
      sx={{
        p: {
          xs: 3,
          sm: 4,
        },
        bgcolor: '#F6F7FB',
        borderRadius: 5,
        boxShadow: '0 15px 25px -5px rgba(211, 211, 211, 0.25)',
      }}
    >
      <Loading isOpen={isLoading || loading} />
      <Box display="flex" alignItems="center">
        <HistoryIcon sx={{ width: 32, height: 32 }} color="primary" />
        <Typography
          component={'h3'}
          color="primary"
          variant="h3"
          sx={{ ml: 1 }}
        >
          Vui lòng thanh toán để hoàn tất
        </Typography>
      </Box>

      {/* bank info */}

      <Box mt={2}>
        <Typography variant="h4" fontWeight="500" color="text.secondary" mb={2}>
          Chọn ngân hàng để hiển thị số tài khoản tương ứng:
        </Typography>
        <Grid container spacing={1}>
          {banks?.data.map((bank) => {
            return (
              <Grid key={bank.id} item xs={4} sm={3}>
                <ButtonBank
                  isActive={bankSelected?.id === bank.id}
                  onClick={() => setBankSelected(bank)}
                >
                  <Box
                    component="img"
                    src={`${process.env.BASE_URL}/${bank.image}`}
                    alt="bank"
                    width={'100%'}
                  />
                </ButtonBank>
              </Grid>
            )
          })}
        </Grid>
      </Box>
      <Box mt={2} bgcolor="common.white" borderRadius={2} p={2.5}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <TitleItem>SỐ TIỀN CẦN THANH TOÁN</TitleItem>
            <TextCopy
              title={pricePackage}
              sx={{ fontWeight: 600, fontSize: 24, color: '#23C27F' }}
            />
          </Grid>
          <Grid item xs={6}>
            <TitleItem>NỘI DUNG CHUYỂN KHOẢN</TitleItem>
            <TextCopy
              title={codeQR}
              sx={{
                fontWeight: 600,
                fontSize: 24,
                color: 'error.main',
              }}
            />
          </Grid>
          <Grid xs={12} item mt={1}>
            <Box
              sx={{
                py: 1.25,
                px: 2,
                bgcolor: 'grey.100',
                fontWeight: 500,
                borderRadius: 2,
              }}
              color="text.secondary"
            >
              Chuyển đúng số tiền & nội dung giúp đơn hàng được kích hoạt tự
              động !!!
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>Mã QR</TitleItem>
          <Tooltip title="Click để xem mã QR">
            <Box
              sx={{
                mt: 1.25,
                height: 144,
                display: 'flex',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={toggleModalQR}
            >
              <Box
                component="img"
                // src="https://cafetaichinh.com/wp-content/uploads/2021/06/CAFETAICHINH-QR-PIC.jpg"
                src={imageQRCode}
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
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>NGÂN HÀNG</TitleItem>
          <TextCopy
            title={bankSelected?.bank || ''}
            sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
          />
        </Box>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>SỐ TÀI KHOẢN</TitleItem>
          <TextCopy
            title={bankSelected?.account_number || ''}
            sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
          />
        </Box>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>TÊN TÀI KHOẢN</TitleItem>
          <TextCopy
            title={bankSelected?.account_holder || ''}
            sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
          />
        </Box>
        <Divider sx={{ my: 2.5, borderColor: 'grey.100' }} />
        <Box>
          <TitleItem>CHI NHÁNH</TitleItem>
          {bankSelected?.branch && (
            <TextCopy
              title={bankSelected.branch}
              sx={{ fontWeight: 600, fontSize: 18, color: 'text.secondary' }}
            />
          )}
        </Box>
      </Box>
      <ModalInfo open={isOpenQR} handleClose={toggleModalQR}>
        <Box
          component={'img'}
          src={imageQRCode}
          width={'100%'}
          sx={{ mt: 3 }}
        />
      </ModalInfo>
    </Box>
  )
}
