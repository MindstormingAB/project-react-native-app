import React from 'react';
import styled from 'styled-components/native';

const StyledButton = styled.TouchableOpacity`
  padding: 10px;
  min-width: 100px;
  border-radius: 5px;
  background-color: brown;
  box-shadow: 5px 5px 2px grey;
  `

const ButtonText = styled.Text`
  color: wheat;
  font-size: 24px;
  text-align: center;
`;

const TouchButton = ({ text, onPress }) => {
  return (
    <StyledButton onPress={onPress} >
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default TouchButton;