import React from 'react';
import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';
import { Platform } from 'react-native';

const LoadingContainer = styled.View`
  width: 250px;
  height: 250px;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  font-size: 24px;
  color: brown;
  padding: 0 5px;
`

const Loading = () => {
  return (
    <LoadingContainer>
      {Platform.OS !== 'web' && <LottieView
        style={{ width: 250, height: 250 }}
        autoPlay
        loop
        source={require('../assets/lf30_editor_1v7ngk0e.json')}
      />
      }
      {Platform.OS === 'web' && <LoadingText>Loading...</LoadingText>}
    </LoadingContainer>
  );
};

export default Loading;