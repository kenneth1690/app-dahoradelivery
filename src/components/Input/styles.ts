import styled, { css } from 'styled-components/native';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
}

interface IInputProps {
  name: string;
  isFocused: boolean;
  isFilled: boolean;
}

export const Container = styled.View<IContainerProps>`
  ${({ theme, isFilled, isFocused }) => css`
    flex-direction: row;
    background: ${theme.colors.white};
    border-radius: ${theme.border.large}px;
    border-width: 1px;
    border-color: ${isFilled || isFocused
      ? theme.colors.primary
      : theme.colors.subtitle};
    height: 44px;
  `}
`;

export const TextInput = styled.TextInput<IInputProps>`
  ${({ theme, isFilled, isFocused }) => css`
    background: ${theme.colors.white};
    border-radius: ${theme.border.large}px;
    padding: 0 10px;
    height: 100%;
    flex: 1;
    font-size: 14px;
    font-family: ${theme.fonts.nunito.regular};

    color: ${isFilled || isFocused
      ? theme.colors.primary
      : theme.colors.subtitle};
  `}
`;
