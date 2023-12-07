import {
  TouchableOpacity,
  Image,
  View,
  Text,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useState } from "react";

import * as Styled from "./style";
import LogoSearch from "../../../assets/image/Search.svg";
const imgBg = require("../../../assets/image/heroImageGithubProfile.png");

export default function () {
  const [toggleList] = useState(false);
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
  const [loading, setLoading] = useState<boolean>(true);

  const dispatch = useDispatch();

  async function handleSearch(e: React.FormEvent) {
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

          toast.error("não foi possivel encontrar usuário");
        })
        .finally(() => {
          setLoading(false);
        });
    } else {
      // toast.error("Preencha o campo hummmm");
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
        })
        .catch((err) => {
          console.error("Error > " + err);
          toast.error("Erro ao trazer supositórios de usuario");
        });
    } else {
      toast.error("Preencha o campo");
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
        <Styled.Search placeholder="username" />

        <TouchableOpacity
          style={{ position: "absolute", left: 10, zIndex: 99 }}
        >
          <LogoSearch width={30} height={30} />
        </TouchableOpacity>

        {toggleList && (
          <Styled.ContainerMenu>
            {loading ? (
              <>
                <Styled.Spinner>
                  <ActivityIndicator animating={true} size={32} color={"#3662e3"} />
                </Styled.Spinner>
              </>
            ) : (
              <>
                <Image
                  source={imgBg}
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
                    Github Lorem ipsum dolor sit amet.
                  </Text>
                  <Text
                    style={{
                      width: Dimensions.get("window").width - 138,
                      fontSize: 14,
                      color: "#CDD5E0",
                    }}
                    numberOfLines={2}
                  >
                    Lorem ipsum dolor sit amet.
                  </Text>
                </View>
              </>
            )}
          </Styled.ContainerMenu>
        )}
      </Styled.SearchContainer>
    </Styled.Container>
  );
}
