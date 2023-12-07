import { Text } from "react-native";

import * as Styled from "./style";
import listStyles from '../../styles/globalStyles'

export default function () {
  return (
    <Styled.Container>
      <Text style={{ fontSize: 32, color: "#CDD5E0", marginBottom: 8 }} >Github</Text>
      <Text style={{ fontSize: 15, color: "#CDD5E0" }} >How people build software.</Text>
    </Styled.Container>
  );
}
