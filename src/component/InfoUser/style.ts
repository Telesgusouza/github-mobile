import styled from "styled-components/native";
import ListStyles from "../../styles/globalStyles";

export const Container = styled.View`
  min-height: 90px;
  padding: 95px 20px 0px 20px;
  position: relative;
`;

export const PhotoUser = styled.Image`
  width: 120px;
  height: 120px;

  position: absolute;
  top: -40px;
  left: 20px;

  border: 8px solid ${ListStyles.lightGray};
  border-radius: 10px;

  object-fit: cover;
`;


export const OptionsInfo = styled.TouchableOpacity`
  padding: 8px 0;
  border-radius: 8px;

  flex-direction: row;
  align-self: flex-start;

  background-color: ${ListStyles.gray};

  &:nth-child(1) {
    background-color: red;
  }
`;

export const OptionText = styled.Text`
  color: #cdd5e0;
  padding: 5px 20px;
`;
