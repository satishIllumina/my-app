import { Link, Redirect } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link href={"/about"}> ----------------Take me to About Stack</Link>
      <Redirect href={"/explore"} />
    </View>
  );
}
