import React from "react";
import { StyleSheet, View } from "react-native";

const Divider = () => {
  return <View style={styles.divider} />;
};

const styles = StyleSheet.create({
  divider: {
    height: 2,
    borderRadius: 3,
    backgroundColor: "#222222",
    opacity: 0.5,
    width: "90%",
    marginLeft: "5%",
  },
});

export default Divider;
