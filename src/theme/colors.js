import { blueGrey } from '@mui/material/colors';

const common = {
  white: '#FFFFFF',
  black: '#212B36',
};

const grey = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#2D3748',
  900: '#1A202C',
  5008: 'rgba(145, 158, 171, 0.08)',
  50012: 'rgba(145, 158, 171, 0.12)',
  50016: 'rgba(145, 158, 171, 0.16)',
  50024: 'rgba(145, 158, 171, 0.24)',
  50032: 'rgba(145, 158, 171, 0.32)',
  50048: 'rgba(145, 158, 171, 0.48)',
  50056: 'rgba(145, 158, 171, 0.56)',
  50080: 'rgba(145, 158, 171, 0.8)',
};

export const greyDark = {
  100: '#161C24',
  200: '#303846',
  300: '#474e5a',
  400: '#5e646f',
  500: '#757a83',
  600: '#8c9198',
  700: '#a3a7ad',
  800: '#babdc1',
};

export const greyLight = {
  100: '#F7F8FC',
  200: '#E9E9F2',
  300: '#E4E7EB',
  400: '#CBD2D9',
  500: '#919EAB',
  600: '#637381',
  700: '#52606D',
  800: '#212B36',
};

export const LIGHT = {
  primary: {
    lighter: '#C8FAEC',
    light: '#5CE6D6',
    main: '#00A3AC',
    dark: '#00607B',
    darker: '#003252',
    contrastText: 'white',
  },
  secondary: {
    lighter: '#FEE9D1',
    light: '#FDAB76',
    main: '#FA541C',
    dark: '#B3200E',
    darker: '#770508',
  },
  background: {
    default: '#F3F4F6',
    paper: '#FFFFFF',
  },
  divider: grey['300'],
  text: {
    primary: greyLight['800'],
    secondary: greyLight['600'],
  },
  success: {
    main: '#1EE9B6',
  },
  error: {
    main: '#FF5252',
  },
  grey,
};

export const DARK = {
  primary: {
    lighter: '#C8FAEC',
    light: '#5CE6D6',
    main: '#00A3AC',
    dark: '#00607B',
    darker: '#003252',
    contrastText: 'white',
  },
  secondary: {
    lighter: '#FEE9D1',
    light: '#FDAB76',
    main: '#FA541C',
    dark: '#B3200E',
    darker: '#770508',
    contrastText: common.white,
  },
  background: {
    paper: grey[800],
    default: grey[900],
    neutral: grey[50012],
  },
  text: {
    primary: grey[300],
    secondary: grey[500],
    disabled: grey[600],
  },
  success: {
    main: '#1EE9B6',
  },
  error: {
    main: '#FF5252',
  },
  divider: blueGrey['800'],
  grey,
};
