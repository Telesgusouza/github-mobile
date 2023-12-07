import { Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import * as Styled from "./style";
import StylesList from "../../styles/globalStyles";
import IconChield from "../../../assets/image/Chield_alt.svg";
import IconStar from "../../../assets/image/Star.svg";
import IconNesting from "../../../assets/image/Nesting.svg";

export default function () {
  return (
    <Styled.Container>
      <LinearGradient
        start={[0.1, 0.2]}
        colors={[StylesList.darkGray, StylesList.darkPurple]}
        style={{ padding: 20, borderRadius: 10, marginBottom: 24 }}
      >
        <Text style={{ fontSize: 20, color: "#CDD5E0", marginBottom: 12 }}>
          .github
        </Text>
        <Text style={{ fontSize: 12, color: "#CDD5E0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ducimus.
        </Text>

        <View style={{ marginTop: 20 }}>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconChield width={26} height={26} />
            <Styled.InfoRepoText style={{}}>MIT</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconNesting width={26} height={26} />
            <Styled.InfoRepoText>92</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start" }} >
            <IconStar width={26} height={26} />
            <Styled.InfoRepoText>2181</Styled.InfoRepoText>
          </View>
          <Text style={{ fontSize: 12, color: "#CDD5E0", marginTop: 12 }} >Update 09/24/2023</Text>
        </View>
      </LinearGradient>

      <LinearGradient
        start={[0.1, 0.2]}
        colors={[StylesList.darkGray, StylesList.darkPurple]}
        style={{ padding: 20, borderRadius: 10, marginBottom: 24 }}
      >
        <Text style={{ fontSize: 20, color: "#CDD5E0", marginBottom: 12 }}>
          .github
        </Text>
        <Text style={{ fontSize: 12, color: "#CDD5E0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ducimus.
        </Text>

        <View style={{ marginTop: 20 }}>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconChield width={26} height={26} />
            <Styled.InfoRepoText style={{}}>MIT</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconNesting width={26} height={26} />
            <Styled.InfoRepoText>92</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start" }} >
            <IconStar width={26} height={26} />
            <Styled.InfoRepoText>2181</Styled.InfoRepoText>
          </View>
          <Text style={{ fontSize: 12, color: "#CDD5E0", marginTop: 12 }} >Update 09/24/2023</Text>
        </View>
      </LinearGradient>
      
      <LinearGradient
        start={[0.1, 0.2]}
        colors={[StylesList.darkGray, StylesList.darkPurple]}
        style={{ padding: 20, borderRadius: 10, marginBottom: 24 }}
      >
        <Text style={{ fontSize: 20, color: "#CDD5E0", marginBottom: 12 }}>
          .github
        </Text>
        <Text style={{ fontSize: 12, color: "#CDD5E0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ducimus.
        </Text>

        <View style={{ marginTop: 20 }}>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconChield width={26} height={26} />
            <Styled.InfoRepoText style={{}}>MIT</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconNesting width={26} height={26} />
            <Styled.InfoRepoText>92</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start" }} >
            <IconStar width={26} height={26} />
            <Styled.InfoRepoText>2181</Styled.InfoRepoText>
          </View>
          <Text style={{ fontSize: 12, color: "#CDD5E0", marginTop: 12 }} >Update 09/24/2023</Text>
        </View>
      </LinearGradient>
      
      <LinearGradient
        start={[0.1, 0.2]}
        colors={[StylesList.darkGray, StylesList.darkPurple]}
        style={{ padding: 20, borderRadius: 10, marginBottom: 24 }}
      >
        <Text style={{ fontSize: 20, color: "#CDD5E0", marginBottom: 12 }}>
          .github
        </Text>
        <Text style={{ fontSize: 12, color: "#CDD5E0" }}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
          ducimus.
        </Text>

        <View style={{ marginTop: 20 }}>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconChield width={26} height={26} />
            <Styled.InfoRepoText style={{}}>MIT</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start", marginBottom: 12 }} >
            <IconNesting width={26} height={26} />
            <Styled.InfoRepoText>92</Styled.InfoRepoText>
          </View>
          <View style={{ alignItems: "center", alignSelf: "flex-start" }} >
            <IconStar width={26} height={26} />
            <Styled.InfoRepoText>2181</Styled.InfoRepoText>
          </View>
          <Text style={{ fontSize: 12, color: "#CDD5E0", marginTop: 12 }} >Update 09/24/2023</Text>
        </View>
      </LinearGradient>
      
    </Styled.Container>
  );
}
