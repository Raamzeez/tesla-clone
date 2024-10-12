import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DropdownItem from "./DropdownItem";
import Divider from "./Divider";

interface Props {
  onCloseHandler: () => void;
}

const VehicleDropdown = ({ onCloseHandler }: Props) => {
  return (
    <>
      <SafeAreaView
        style={{
          minHeight: "30%",
          width: "100%",
          backgroundColor: "#161616",
          position: "absolute",
          zIndex: 4,
        }}
      >
        <View style={{ padding: 10, marginLeft: 20 }}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center" }}
            onPress={onCloseHandler}
          >
            <Text style={styles.productsText}>Products</Text>
            <AntDesign
              name={"up"}
              size={18}
              color="grey"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
          <DropdownItem />
          <Divider />
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AntDesign
              name={"plus"}
              size={18}
              color="lightgrey"
              style={{ marginVertical: 15 }}
            />
            <Text
              style={{
                marginLeft: 10,
                color: "white",
                fontWeight: "700",
                fontSize: 12,
              }}
            >
              Add Product
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          onPress={onCloseHandler}
          style={{ height: "100%", width: "100%" }}
        ></TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    opacity: 0.5,
    height: "100%",
    width: "100%",
    position: "absolute",
    zIndex: 2,
    left: "0%",
    backgroundColor: "black",
  },
  productsText: {
    fontSize: 23,
    fontWeight: "600",
    color: "white",
  },
});

export default VehicleDropdown;
