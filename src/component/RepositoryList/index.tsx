import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Styled from "./style";
import StylesList from "../../styles/globalStyles";
import IconChield from "../../../assets/image/Chield_alt.svg";
import IconStar from "../../../assets/image/Star.svg";
import IconNesting from "../../../assets/image/Nesting.svg";
import { IRepo } from "../../api/interface";

export default function ({ listRepo }: { listRepo: IRepo[] }) {
  

  return (
    <Styled.Container>
      {listRepo.map(repo => (
        <LinearGradient
        start={[0.1, 0.2]}
        colors={[StylesList.darkGray, StylesList.darkPurple]}
        style={{ padding: 20, borderRadius: 10, marginBottom: 24 }}
      >
        <Text style={{ fontSize: 20, color: "#CDD5E0", marginBottom: 12 }}>
          {repo.title}
        </Text>
        <Text style={{ fontSize: 12, color: "#CDD5E0" }}>
          {repo.description}
        </Text>

        <View style={{ marginTop: 20 }}>
          {repo?.license && (
            <View
            style={{
              alignItems: "center",
              alignSelf: "flex-start",
              marginBottom: 12,
            }}
          >
            <IconChield width={26} height={26} />
            <Styled.InfoRepoText style={{}}>MIT</Styled.InfoRepoText>
          </View>
          )}
          

          <View
            style={{
              alignItems: "center",
              alignSelf: "flex-start",
              marginBottom: 12,
            }}
          >
            <IconNesting width={26} height={26} />
            <Styled.InfoRepoText>{repo.issues}</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start" }}>
            <IconStar width={26} height={26} />
            <Styled.InfoRepoText>{repo.likes}</Styled.InfoRepoText>
          </View>
          <Text style={{ fontSize: 12, color: "#CDD5E0", marginTop: 12 }}>
            Update {repo.update}
          </Text>
        </View>
      </LinearGradient>
      ))}

    </Styled.Container>
  );
}
