import { Text, Image } from "react-native";
import * as Styled from "./style";

const imgSadEmoji = require("../../../assets/image/sadEmoji.png");

export default function () {
  return (
    <Styled.Container>
      <Image source={imgSadEmoji} style={{ marginBottom: 25 }} />
      <Text style={{ fontSize: 26, color: "#CDD5E0", textAlign: "center", marginBottom: 8 }}>
        No to repositories
      </Text>
      <Text style={{ fontSize: 16, color: "#CDD5E0", textAlign: "center" }}>
        There are no repositories at the moment, do a search and find more.
      </Text>
    </Styled.Container>
  );
}
