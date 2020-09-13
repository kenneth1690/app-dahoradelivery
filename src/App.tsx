import React from 'react';
import { Text, SafeAreaView } from 'react-native';

const App: React.FC = () => {
  return (
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
  );
};

export default App;
