import { View, Text } from "react-native";

import * as Styled from "./style";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootReducer } from "../../api/redux/store";
const imgTest = require("../../../assets/image/noUser.webp");

export default function () {
  const [options, setOptions] = useState<[string, number | string]>(["all", 0]);

  const { dataUser } = useSelector(
    (rootReducer: RootReducer) => rootReducer.useListRepo
  );


  return (
    <Styled.Container>
      <Styled.PhotoUser
        source={dataUser.avatar ? { uri: dataUser.avatar } : imgTest}
        alt="photo user"
      />

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
            <Styled.OptionText>{dataUser.followers}</Styled.OptionText>
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
            <Styled.OptionText>{dataUser.following}</Styled.OptionText>
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
            <Styled.OptionText>{dataUser.location}</Styled.OptionText>
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
