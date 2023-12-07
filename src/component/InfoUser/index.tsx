import { View, Text } from "react-native";

import * as Styled from "./style";
import { useState } from "react";
const imgTest = require("../../../assets/image/noUser.webp");

export default function () {
  const [options, setOptions] = useState<[string, number | string]>(["all", 0]);

  function handleOption(option?: [string, number | string]) {
    if (options[0] !== "all" && !!option) {
      setOptions(option);
    } else {
    }
  }

  return (
    <Styled.Container>
      <Styled.PhotoUser source={imgTest} alt="photo user" />

      {options[0] === "all" ? (
        <>
          <Styled.OptionsInfo
            style={{ marginBottom: 14 }}
            onPress={() => setOptions(["Followers", 278])}
          >
            <Styled.OptionText
              style={{
                borderRightColor: "#4A5567",
                borderRightWidth: 2,
              }}
            >
              Followers
            </Styled.OptionText>
            <Styled.OptionText>27839</Styled.OptionText>
          </Styled.OptionsInfo>

          <Styled.OptionsInfo
            style={{ marginBottom: 14 }}
            onPress={() => setOptions(["Following", 278])}
          >
            <Styled.OptionText
              style={{
                borderRightColor: "#4A5567",
                borderRightWidth: 2,
              }}
            >
              Following
            </Styled.OptionText>
            <Styled.OptionText>27839</Styled.OptionText>
          </Styled.OptionsInfo>

          <Styled.OptionsInfo
            onPress={() => setOptions(["Location", "são paulo"])}
          >
            <Styled.OptionText
              style={{
                borderRightColor: "#4A5567",
                borderRightWidth: 2,
              }}
            >
              Location
            </Styled.OptionText>
            <Styled.OptionText>27839</Styled.OptionText>
          </Styled.OptionsInfo>
        </>
      ) : (
        <>
          <Styled.OptionsInfo
            style={{ marginBottom: 14 }}
            onPress={() => setOptions(["all", 0])}
          >
            <Styled.OptionText
              style={{
                borderRightColor: "#4A5567",
                borderRightWidth: 2,
              }}
            >
              {options[0]}
            </Styled.OptionText>
            <Styled.OptionText>{options[1]}</Styled.OptionText>
          </Styled.OptionsInfo>
        </>
      )}
    </Styled.Container>
  );
}

/*

ainda está dando erro, o código está da seguinte maneira, o OptionsInfo tem que ter o width de acordo com o tamanho do conteudo

<Styled.OptionsInfo>
          <Text
            style={{
              color: "#CDD5E0",
              paddingVertical: 5,
              paddingHorizontal: 20,
              borderRightColor: "#4A5567",
              borderRightWidth: 2,
            }}
          >
            Followers
          </Text>
          <Text
            style={{
              color: "#CDD5E0",
              paddingVertical: 5,
              paddingHorizontal: 20,
            }}
          >
            27839
          </Text>
        </Styled.OptionsInfo>


export const OptionsInfo = styled.View`
  align-items: flex-start;
  padding: 8px 0;
  flex-direction: row;

  background-color: ${ListStyles.gray};
`;




*/
