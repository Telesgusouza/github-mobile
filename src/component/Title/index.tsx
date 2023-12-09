import { Text } from "react-native";

import * as Styled from "./style";
import { useSelector } from "react-redux";
import { RootReducer } from "../../api/redux/store";

export default function () {
  const { dataUser } = useSelector(
    (rootReducer: RootReducer) => rootReducer.useListRepo
  );

  return (
    <Styled.Container>
      <Text style={{ fontSize: 32, color: "#CDD5E0", marginBottom: 8 }}>
        {dataUser.title}
      </Text>
      <Text style={{ fontSize: 15, color: "#CDD5E0" }}>
        {dataUser.description}
      </Text>
    </Styled.Container>
  );
}
