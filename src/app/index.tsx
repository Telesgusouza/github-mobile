import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from "react-native";

import Search from "../component/Search";
import InfoUser from "../component/InfoUser";

import StyledList from "../styles/globalStyles";
import Title from "../component/Title";
import RepositoryList from "../component/RepositoryList";
// import RepositoryList from "./src/component/RepositoryList";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Search />
      <InfoUser />
      <Title />
      <RepositoryList />

      <View
        style={{
          paddingTop: 20,
          paddingBottom: 50,

          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{
            alignSelf: "flex-start",
            padding: 12,
          }}
        >
          <Text style={{ fontSize: 17, color: "#CDD5E0" }}>
            View all repositories
          </Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyledList.lightGray,
  },
});
