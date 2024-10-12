import React from "react";
import { Image, Text, View } from "react-native";

const DropdownItem = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ fontSize: 16, fontWeight: "700", color: "white" }}>
            Raamiz's Car
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              color: "grey",
              fontWeight: "600",
            }}
          >
            79%
          </Text>
        </View>
        <Image
          source={require("../assets/images/cardropdown.png")}
          style={{ height: 110, width: 130 }}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

export default DropdownItem;
