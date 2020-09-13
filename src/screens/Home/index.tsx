import React from 'react';
import { Text, SafeAreaView } from 'react-native';

// eslint-disable-next-line import/no-unresolved
import * as S from './styles';

const Home: React.FC = () => {
  return (
    <S.Container>
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
    </S.Container>
  );
};

export default Home;
