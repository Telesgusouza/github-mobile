import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";

import Search from "../component/Search";
import InfoUser from "../component/InfoUser";

import StyledList from "../styles/globalStyles";
import Title from "../component/Title";
import RepositoryList from "../component/RepositoryList";
import { RootReducer } from "../api/redux/store";
import NoToRepo from "../component/NoToRepo";
import { useEffect, useState } from "react";
import { IRepo } from "../api/interface";

export default function App() {
  const [listRepo, setListRepo] = useState<IRepo[]>([]);
  const [allRepo, setAllRepo] = useState<boolean>(false);
  const { listData } = useSelector(
    (rootReducer: RootReducer) => rootReducer.useListRepo
  );

  useEffect(() => {
    if (!allRepo) {
      setListRepo(listData.slice(0, 4));
    } else {
      setListRepo(listData);
    }
  }, [listData, allRepo]);

  return (
    <ScrollView style={styles.container}>
      <Search />

      {listData.length > 0 ? (
        <>
          <InfoUser />
          <Title />
          <RepositoryList listRepo={listRepo} />

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
              onPress={() => setAllRepo(!allRepo)}
            >
              <Text style={{ fontSize: 17, color: "#CDD5E0" }}>
                {allRepo ? "See fewer repositories" : "View all repositories"}
              </Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <NoToRepo />
        </>
      )}

      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyledList.lightGray,
  },
});
