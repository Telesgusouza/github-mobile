import {
  TouchableOpacity,
  Image,
  View,
  Text,
  Alert,
  Dimensions,
  ActivityIndicator,
  NativeSyntheticEvent,
  TextInputSubmitEditingEventData,
} from "react-native";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import * as Styled from "./style";
import IconSearch from "../../../assets/image/Search.svg";
import IconClose from "../../../assets/image/closed.svg";

import { dataUser, listData } from "../../api/redux/useListRepo/reducer";
import { IRepo, IRepoApi } from "../../api/interface";
const imgBg = require("../../../assets/image/heroImageGithubProfile.png");
const imgNoUser = require("../../../assets/image/noUser.webp");

export default function () {
  const [loading, setLoading] = useState<boolean>(false);

  ///
  const [input, setInput] = useState<string>("");

  const [listOptionRepo, setListOptionRepo] = useState<{
    avatar: string;
    followers: number;
    following: number;
    location: string;

    title: string;
    description: string;
  } | null>(null);

  const [listToggle, setListToggle] = useState<boolean>(false);

  const dispatch = useDispatch();

  async function handleSearch(
    e: NativeSyntheticEvent<TextInputSubmitEditingEventData>
  ) {
    e.preventDefault();

    if (input.trim().length > 0) {
      setListToggle(true);
      setLoading(true);

      axios
        .get(`https://api.github.com/users/${input}`)
        .then((repo) => {
          const data = {
            avatar: repo.data.avatar_url,

            followers: repo.data.followers,
            following: repo.data.following,
            location: repo.data.location,

            title: repo.data.name,
            description: repo.data.bio,
          };

          setListOptionRepo(data);

          dispatch(dataUser(data));
        })
        .catch((err) => {
          console.error("Error > " + err);
          setListToggle(false);
          setLoading(false);
          Alert.alert("Erro ao trazer usuario", "Tente novamente mais tarde");
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }

  async function handleSelectUser() {
    if (input.trim().length > 0) {
      axios
        .get(`https://api.github.com/users/${input}/repos`)
        .then((resp) => {
          const listRepo: IRepo[] = [];

          resp.data.forEach((repo: IRepoApi) => {
            const date = new Date(repo.updated_at);

            const ano = date.getFullYear();
            const mes = String(date.getMonth() + 1).padStart(2, "0");
            const dia = String(date.getDate()).padStart(2, "0");

            const dateFormatada = `${ano}/${mes}/${dia}`;

            const data = {
              id: repo.id,
              title: repo.name,
              description: repo.description,
              license: repo.license,
              issues: repo.open_issues,
              likes: repo.stargazers_count > 0 ? repo.stargazers_count : 0,
              update: dateFormatada,
            };

            listRepo.push(data);
          });

          dispatch(listData(listRepo));
          setListToggle(false);
          setInput("");
        })
        .catch((err) => {
          console.error("Error > " + err);
          Alert.alert(
            "Erro ao trazer supositórios de usuario",
            "Ocorreu um erro, tente novamente mais tarde"
          );
        });
    } else {
      Alert.alert(
        "Preencha o campo",
        "preencha o campo para completar a pesquisa"
      );
    }
  }

  function handleClose() {
    setInput("");
    setListToggle(false);
  }

  ///
  return (
    <Styled.Container source={imgBg}>
      <Styled.SearchContainer>
        <Styled.Search
          placeholder="username"
          value={input}
          onChangeText={(e) => setInput(e)}
          onSubmitEditing={handleSearch}
        />

        <View style={{ position: "absolute", left: 10, zIndex: 99 }}>
          {listToggle ? (
            <TouchableOpacity onPress={handleClose}>
              <IconClose width={24} height={24} />
            </TouchableOpacity>
          ) : (
            <>
              <IconSearch width={30} height={30} />
            </>
          )}
        </View>

        {listToggle && (
          <Styled.ContainerMenu>
            {loading ? (
              <>
                <Styled.Spinner>
                  <ActivityIndicator
                    animating={true}
                    size={32}
                    color={"#3662e3"}
                  />
                </Styled.Spinner>
              </>
            ) : (
              <TouchableOpacity
                style={{ flexDirection: "row" }}
                onPress={handleSelectUser}
              >
                <Image
                  source={{
                    uri: listOptionRepo?.avatar
                      ? listOptionRepo.avatar
                      : imgNoUser,
                  }}
                  alt="photo user"
                  style={{
                    width: 70,
                    height: 70,
                    objectFit: "cover",
                    borderRadius: 10,
                    marginRight: 12,
                  }}
                />

                <View>
                  <Text
                    style={{
                      width: Dimensions.get("window").width - 138,
                      fontSize: 20,
                      color: "#CDD5E0",
                    }}
                    numberOfLines={1}
                  >
                    {listOptionRepo?.title}
                  </Text>
                  <Text
                    style={{
                      width: Dimensions.get("window").width - 138,
                      fontSize: 14,
                      color: "#CDD5E0",
                    }}
                    numberOfLines={2}
                  >
                    {listOptionRepo?.description}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          </Styled.ContainerMenu>
        )}
      </Styled.SearchContainer>
    </Styled.Container>
  );
}
