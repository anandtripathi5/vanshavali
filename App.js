import { Stack } from "expo-router";
import { SafeAreaView } from "react-native";
import { COLORS } from "./src/constants";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      {/* <Stack
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShowVisible: false,
          headerLeft: () => {
            <ScreenHeaderBtn
              iconUrl={icons.menu}
              dimension="60%"
            ></ScreenHeaderBtn>;
          },
          headerRight: () => {
            <ScreenHeaderBtn
              iconUrl={icons.profile}
              dimension="100%"
            ></ScreenHeaderBtn>;
          },
          headerTitle: "वंशावली",
        }}
      ></Stack> */}
    </SafeAreaView>
  );
}
