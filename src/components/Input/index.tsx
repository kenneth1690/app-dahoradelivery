import React, { useState } from 'react';
import { TextInputProps, TextInput as RNInput, ViewStyle } from 'react-native';

import * as S from './styles';

interface IInputProps extends TextInputProps {
  name: string;
  containerStyle?: ViewStyle;
}

interface IInputReference extends RNInput {
  value: string;
}

const Input: React.FC<IInputProps> = ({ name, containerStyle, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const inputRef = React.useRef<IInputReference>({
    value: '',
  } as IInputReference);

  const handleInputFocus = React.useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = React.useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current.value);
  }, []);

  return (
    <S.Container
      isFocused={isFocused}
      isFilled={isFilled}
      style={containerStyle}
    >
      <S.TextInput
        name={name}
        ref={inputRef}
        isFocused={isFocused}
        isFilled={isFilled}
        onChangeText={(value) => {
          if (inputRef.current) {
            inputRef.current.value = value;
          }
        }}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </S.Container>
  );
};

export default React.memo(Input);
