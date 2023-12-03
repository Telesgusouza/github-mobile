import { Text } from "react-native";

import * as Styled from "./style";
import LogoSearch from '../../../assets/image/Search.svg'
const imgBg = require("../../../assets/image/heroImageGithubProfile.png");

export default function () {
  return (
    <Styled.Container source={imgBg}>
      <LogoSearch fill={"#212121"} width={30} height={30} />
      <Text style={{ fontSize: 20, color: "#ffffff" }}>
        {" "}
        parte de search está aqui{" "}
      </Text>
    </Styled.Container>
  );
}
