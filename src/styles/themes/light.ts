import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default {
  title: 'light',
  colors: {
    primary: '#FF4438',
    secundary: '#004E50',
    tertiary: '#004E50',

    success: '#004E50',
    danger: '#FF4438',

    background: '#F6F6F4',

    title: '#04254A',
    subtitle: '#77818C',

    transparent: 'transparent',
    darkTransparent: 'rgba(0, 0, 0, 0.6)',
    whiteTransparent: 'rgba(255, 255, 255, 0.3)',

    white: '#fff',
    regular: '#999',
  },

  fonts: {
    nunito: {
      regular: 'Nunito-Regular',
      semiBold: 'Nunito-SemiBold',
      bold: 'Nunito-Bold',
      extraBold: 'Nunito-ExtraBold',
    },
  },

  screen: {
    width: width < height ? width : height,
    height: width < height ? height : width,
  },
} as const;
