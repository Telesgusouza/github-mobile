import { Stack } from "expo-router/stack";
import Providers from "../api/redux/Providers";

export default function Layout() {
  return (
    <Providers>
      <Stack initialRouteName="index" >
        <Stack.Screen
          name="index"
          options={{ title: "home", headerShown: false }}
        />
      </Stack>
    </Providers>
  );
}
