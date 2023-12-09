import styled from "styled-components/native";
import listStyled from "../../styles/globalStyles";

export const Container = styled.ImageBackground`
  height: 240px;
  padding: 20px;
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.View`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: center;
`;

export const Search = styled.TextInput`
  padding: 14px 14px 14px 50px;

  border-radius: 10px;

  color: white;
  background-color: ${listStyled.veryiLightGray};
`;

export const Spinner = styled.View`
  min-height: 60px;
  padding: 10px 0;
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const ContainerMenu = styled.View`
  width: 100%;
  padding: 8px;

  flex-direction: row;

  position: absolute;
  z-index: 99;
  margin-top: 20px;
  top: 100%;

  border-radius: 10px;

  background-color: ${listStyled.gray};
`;
