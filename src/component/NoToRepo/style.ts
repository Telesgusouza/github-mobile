import { Dimensions } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${Dimensions.get("window").height - 205}px;
  padding: 40px 20px;

  justify-content: center;
  align-items: center;
`;
