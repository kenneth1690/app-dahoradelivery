import React from 'react';
import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import { useTheme } from 'styled-components';

import * as S from './styles';

export type IVariantButtonAuth = 'primary' | 'outline';

interface IButtonAuthProps extends TouchableOpacityProps {
  children?: string | number | React.ReactNode;
  variant?: IVariantButtonAuth;
  loading?: boolean;
}

const ButtonAuth: React.FC<IButtonAuthProps> = ({
  children,
  variant = 'primary',
  loading,
  disabled,
  ...rest
}) => {
  const { colors } = useTheme();

  const colorSpinner = React.useMemo(() => {
    return variant === 'primary' ? colors.primary : colors.white;
  }, [colors.primary, colors.white, variant]);

  const isDisabled = React.useMemo(() => {
    if (loading) return true;
    return disabled;
  }, [disabled, loading]);

  return (
    <S.Container variant={variant} disabled={isDisabled} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color={colorSpinner} />
      ) : (
        <S.ButtonTitle variant={variant}>{children}</S.ButtonTitle>
      )}
    </S.Container>
  );
};

export default React.memo(ButtonAuth);
