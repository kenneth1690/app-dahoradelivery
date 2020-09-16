import { TouchableOpacityProps } from 'react-native';

import styled, { css } from 'styled-components/native';

import { IVariantButton } from '.';

interface IContainerProps {
  variant: IVariantButton;
}

export const Container = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
  activeOpacity: 0.8,
})<IContainerProps>`
  height: 44px;
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.border.large}px;
  background: ${({ theme, variant }) =>
    variant === 'primary' ? theme.colors.primary : theme.colors.transparent};

  ${({ theme, variant }) =>
    variant === 'outline' &&
    css`
      border-width: 1px;
      border-color: ${theme.colors.white};
    `}
`;

export const ButtonTitle = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.nunito.extraBold};
  color: ${({ theme }) => theme.colors.white};
`;
