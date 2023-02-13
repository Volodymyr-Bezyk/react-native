import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ScreenHeader({ title, name, navigation, props }) {
  return (
    <View style={styles.headerWrap}>
      {name === "Create" && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backLink}
          activeOpacity={0.8}
        >
          <Feather name="arrow-left" size={24} color="#212121" />
        </TouchableOpacity>
      )}

      <Text style={styles.headerText}>{title}</Text>

      {name !== "Create" && (
        <TouchableOpacity
          onPress={() => console.log("LogOUT")}
          style={styles.logoutBtn}
          activeOpacity={0.8}
        >
          <Feather name="log-out" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerWrap: {
    position: "relative",
    height: 88,
    paddingHorizontal: 10,
    paddingTop: 44,

    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
    backgroundColor: "#FFFFFF",
  },
  headerText: {
    paddingHorizontal: 40,
    paddingVertical: 11,

    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    fontSize: 17,
    lineHeight: 22,

    color: "#212121",
    textAlign: "center",
  },

  backLink: {
    position: "absolute",
    left: 16,
    bottom: 10,
    zIndex: 1,
  },
  logoutBtn: {
    position: "absolute",
    right: 10,
    bottom: 10,
  },
});
