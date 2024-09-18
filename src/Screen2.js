import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

const colors = {
  black: require("../assets/black.png"),
  blue: require("../assets/blue.png"),
  red: require("../assets/red.png"),
  white: require("../assets/white.png"),
};
function Screen2({ route }) {
  const { handleCl, currentCl } = route.params;
  const [color, setColor] = useState(currentCl);
  const nvg = useNavigation();
  return (
    <View>
      <View
        style={{
          backgroundColor: "white",
          paddingVertical: 10,
          display: "flex",
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Image
          style={{
            width: 50,
            height: 50,
          }}
          source={colors[color]}
        />
        <View>
          <Text>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
        </View>
      </View>
      <View>
        <Text>Chon 1 mau ben duoi:</Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center  ",
            gap: 20,
          }}
        >
          {Object.keys(colors).map((bgcolor) => (
            <Pressable
              style={{ width: 100, height: 100, backgroundColor: bgcolor }}
              onPress={() => {
                handleCl(bgcolor);
                setColor(bgcolor);
              }}
            >
              .
            </Pressable>
          ))}{" "}
          <Pressable
            onPress={() => {
              nvg.goBack();
            }}
          >
            Xong cmnr
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default Screen2;
