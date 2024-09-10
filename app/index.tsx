import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        style={{
          flex: 5,
          justifyContent: "center",
          alignItems: "center",
        }}
        href={"/about"}
      >
        {" "}
        About
      </Link>
    </View>
  );
}
