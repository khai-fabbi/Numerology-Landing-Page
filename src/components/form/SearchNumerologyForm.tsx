import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {
  Autocomplete,
  Box,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'
import { DatePicker, TimePicker } from '@mui/x-date-pickers'
import dayjs from 'dayjs'
import { useState } from 'react'
import type { Control } from 'react-hook-form'
import { Controller } from 'react-hook-form'

import type { CountryType } from '@/models'
import type { FormSearch } from '@/modules/home/LookUpNumerology'
import { countries, SEX_LABEL } from '@/utils/constant'

import { IconCalendar, IconClock, IconDown, IconTwoRhombus } from '../icon'

export interface SearchNumerologyFormProps {
  title: string
  subTitle?: string
  control: Control<FormSearch, any>
  onSubmitFree: () => void
  onSubmitDeep: () => void
}

export default function SearchNumerologyForm({
  title,
  subTitle,
  control,
  onSubmitFree,
  onSubmitDeep,
}: SearchNumerologyFormProps) {
  const [countryCode, setCountryCode] = useState<CountryType>(
    countries[238] as CountryType
  )
  return (
    <Box>
      <IconTwoRhombus />
      <Box>
        <Box mt={2}>
          <Typography fontSize={20}>
            Tra cứu chỉ số P.P.<span className="text-color-red">n</span>.S của
            bạn
          </Typography>
        </Box>
        <Typography className="text-heading">{title}</Typography>
        {subTitle && (
          <Typography className="text-heading">{subTitle}</Typography>
        )}
      </Box>
      <Box mt={3.75} display={'flex'} flexDirection={'column'} rowGap={2}>
        <Controller
          name="full_name"
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
              <InputLabel htmlFor="name-id">
                Họ tên khai sinh (nên nhập không dấu)
              </InputLabel>
              <TextField
                placeholder="Nhập họ tên"
                onChange={onChange}
                value={value}
                id="name-id"
                error={invalid}
                helperText={
                  error?.message
                  // errors.full_name
                  //   ? (errors.full_name?.message as unknown as string)
                  //   : ''
                }
              />
            </Box>
          )}
        />
        <Controller
          name="sex"
          control={control}
          render={({ field: { onChange, value }, fieldState: { invalid } }) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
              <InputLabel htmlFor="sex-id">Giới tính</InputLabel>
              <Select
                id="sex-id"
                placeholder="Giới tính"
                value={value}
                fullWidth
                error={invalid}
                onChange={onChange}
                MenuProps={{
                  disableScrollLock: true,
                }}
                IconComponent={() => (
                  <IconButton sx={{ right: 7 }}>
                    <IconDown />
                  </IconButton>
                )}
              >
                {SEX_LABEL.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </Box>
          )}
        />
        <Controller
          name="birth_day"
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
              <InputLabel htmlFor="date-birthday-id">
                Ngày/tháng/năm sinh dương lịch
              </InputLabel>
              <DatePicker
                format="DD/MM/YYYY"
                slots={{
                  openPickerIcon: IconCalendar,
                }}
                maxDate={dayjs(new Date('2050-01-01'))}
                minDate={dayjs(new Date('1900-01-01'))}
                onChange={onChange}
                value={value || null}
                componentsProps={{
                  openPickerIcon: IconCalendar,
                  textField: {
                    id: 'date-birthday-id',
                    error: invalid,
                    helperText: error?.message,
                    // helperText: errors.birth_day
                    //   ? (errors.birth_day?.message as unknown as string)
                    //   : '',
                  },
                }}
              />
            </Box>
          )}
        />
        <Controller
          name="birth_time"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
              <InputLabel htmlFor="birth_time-id">Giờ sinh</InputLabel>
              <TimePicker
                value={value || null}
                slots={{
                  openPickerIcon: IconClock,
                }}
                // slotProps={{
                //   actionBar: {
                //     actions: ['clear'],
                //   },
                //   field: {
                //     clearable: true,
                //   },
                // }}
                // defaultValue={dayjs(new Date())}
                views={['hours', 'minutes']}
                format="HH:mm"
                ampm={false}
                onChange={onChange}
                componentsProps={{
                  textField: {
                    id: 'birth_time-id',
                    placeholder: 'hh:mm',
                  },
                }}
              />
            </Box>
          )}
        />

        <Controller
          name="phone"
          control={control}
          render={({
            field: { onChange, value },
            fieldState: { invalid, error },
          }) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
              <InputLabel htmlFor="phone-id">Nhập số điện thoại</InputLabel>
              <TextField
                id="phone-id"
                inputMode="numeric"
                type="number"
                value={value}
                onChange={onChange}
                placeholder="Nhập số điện thoại"
                error={invalid}
                helperText={error?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Autocomplete
                        id="country-select"
                        sx={{
                          minWidth: 150,
                        }}
                        options={countries}
                        value={countryCode}
                        onChange={(_: any, newValue: CountryType) => {
                          setCountryCode(newValue)
                        }}
                        autoHighlight
                        disableClearable
                        getOptionLabel={(option) => option.label}
                        popupIcon={
                          <KeyboardArrowDownIcon sx={{ color: '#fff' }} />
                        }
                        renderOption={(props, option) => (
                          <Box
                            component="li"
                            sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                            {...props}
                          >
                            <img
                              loading="lazy"
                              width="20"
                              src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                              srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                              alt=""
                            />
                            {option.label} ({option.code}) +{option.phone}
                          </Box>
                        )}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            className="select-code-phone"
                            inputProps={{
                              ...params.inputProps,
                              autoComplete: 'new-password', // disable autocomplete and autofill
                            }}
                          />
                        )}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          )}
        />

        <Controller
          name="job"
          control={control}
          render={({
            field: { onChange, value, ref },
            fieldState: { invalid, error },
          }) => (
            <Box display={'flex'} flexDirection={'column'} rowGap={0.5}>
              <InputLabel htmlFor="job-id">
                Công việc hiện tại bạn đang làm
              </InputLabel>
              <TextField
                placeholder="Nhập công việc"
                onChange={onChange}
                value={value}
                id="job-id"
                error={invalid}
                helperText={error?.message}
                inputRef={ref}
              />
            </Box>
          )}
        />

        <Box
          sx={{
            maxWidth: 458,
            display: 'flex',
            alignItems: 'center',
            columnGap: 2,
          }}
        >
          <Button
            sx={{ flex: 1, backgroundColor: '#215261' }}
            type="submit"
            size="large"
            color="primary"
            onClick={onSubmitFree}
            // variant="outlined"
            // startIcon={<SearchIcon />}
          >
            Tra Cứu Miễn Phí
          </Button>
          <Button
            sx={{ flex: 1 }}
            type="submit"
            size="large"
            color="primary"
            variant="contained"
            onClick={onSubmitDeep}
            // startIcon={<SearchIcon />}
          >
            Tra Cứu Chuyên sâu
          </Button>
        </Box>
      </Box>
    </Box>
  )
}
