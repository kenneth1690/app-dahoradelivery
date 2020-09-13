import React from 'react';
import { Text, SafeAreaView } from 'react-native';

import { ThemeProvider } from 'styled-components';

import lightTheme from './styles/themes/light';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaView>
        <Text
          style={{
            fontFamily: 'Nunito-Regular',
          }}
        >
          App
        </Text>
        <Text
          style={{
            fontFamily: 'Nunito-SemiBold',
          }}
        >
          App
        </Text>
        <Text
          style={{
            fontFamily: 'Nunito-Bold',
          }}
        >
          App
        </Text>
        <Text
          style={{
            fontFamily: 'Nunito-ExtraBold',
          }}
        >
          App
        </Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
