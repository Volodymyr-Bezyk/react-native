import { Feather } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function PostItem({
  location,
  name,
  photo,
  comments = [],
  navigation,
  coords,
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: photo }}></Image>
      <Text style={styles.textName}>{name}</Text>
      <View style={styles.locationWrap}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Comments", {})}
          >
            <Feather name="message-circle" size={24} color="#BDBDBD" />
          </TouchableOpacity>

          <Text style={styles.textLikes}>{comments.length}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate("Map", { coords })}
          >
            <Feather name="map-pin" size={24} color="#BDBDBD" />
          </TouchableOpacity>

          <Text style={styles.textLocation}>{location}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
  },
  image: {
    flex: 1,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  textName: {
    marginBottom: 8,
    fontFamily: "Roboto-Medium",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textTransform: "capitalize",
  },
  locationWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textLocation: {
    marginLeft: 4,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
  textLikes: {
    marginLeft: 6,
    fontFamily: "Roboto-Regular",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});
