import {Platform} from 'react-native';

export const fontSize = {
  xss: 8,
  xs: 10,
  s: 12,
  m: 13.5,
  l_m: 15,
  l: 16,
  xl: 18,
  xxl: 22,
  xxxl: 25,
  xxxxl: 30,
  xxxxxl: 48,
};
export const defaultCountryCode = 40;

export const fontFamily = {
  // black: (Platform.OS == 'android' ? 'MontserratBlack' : 'Montserrat-Black'),
  // bold: (Platform.OS == 'android' ? 'MontserratBold' : 'Montserrat-Bold'),
  // extrabold: (Platform.OS == 'android' ? 'MontserratExtraBold' : 'Montserrat-ExtraBold'),
  // thin: (Platform.OS == 'android' ? 'MontserratThin' : 'Montserrat-Thin'),
  // semibold: (Platform.OS == 'android' ? 'MontserratSemiBold' : 'Montserrat-SemiBold'),
  // regular: (Platform.OS == 'android' ? 'MontserratRegular' : 'Montserrat-Regular'),
  // medium: (Platform.OS == 'android' ? 'MontserratMedium' : 'Montserrat-Medium'),
  // light: (Platform.OS == 'android' ? 'MontserratLight' : 'Montserrat-Light'),
  // extralight: (Platform.OS == 'android' ? 'MontserratExtraLight' : 'Montserrat-ExtraLight'),
  // crimsonBold: (Platform.OS == 'android' ? 'crimsonBold' : 'CrimsonText-Bold'),
  // crimsonRegular: (Platform.OS == 'android' ? 'crimsonRegular' : 'CrimsonText-Regular'),
  // crimsonSemiBold: (Platform.OS == 'android' ? 'crimsonSemiBold' : 'CrimsonText-SemiBold'),

  crimsonRegular:
    Platform.OS == 'android' ? 'CrimsonText-Regular' : 'CrimsonText-Regular',
  crimsonBold:
    Platform.OS == 'android' ? 'CrimsonText-Bold' : 'CrimsonText-Bold',
  crimsonSemiBold:
    Platform.OS == 'android' ? 'CrimsonText-SemiBold' : 'CrimsonText-SemiBold',
};
