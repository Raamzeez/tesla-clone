import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome5 } from "@expo/vector-icons";

interface Props {
  refer?: boolean;
  icon?: any;
  text?: string;
  subtitle?: string;
  background?: boolean;
}

const Option = ({ refer, icon, text, subtitle, background }: Props) => {
  return (
    <View
      style={[
        styles.optionContainer,
        { backgroundColor: background ? "#1f2021" : "transparent" },
      ]}
    >
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 15,
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        {refer ? (
          <>
            <Text
              style={{
                fontSize: 16,
                fontWeight: "600",
                textDecorationLine: "underline",
                color: "white",
                maxWidth: "70%",
              }}
            >
              Earn $500 by Giving Anyone $1,000 Off a New Tesla
            </Text>
            <TouchableOpacity
              style={{
                height: 30,
                width: 90,
                backgroundColor: "#3e63eb",
                borderRadius: 5,
                marginLeft: "auto",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "bold", color: "white" }}>Refer</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <FontAwesome5 name={icon} size={24} color="grey" />
            <View>
              <Text style={styles.label}>{text}</Text>
              {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
            </View>
            <AntDesign
              name="right"
              size={18}
              color="grey"
              style={{ marginLeft: "auto" }}
            />
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  optionContainer: {
    marginVertical: 5,
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 5,
    flexDirection: "row",
    minHeight: 67.5,
  },
  label: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 15,
  },
  subtitle: {
    color: "grey",
    fontSize: 14,
    fontWeight: "400",
    marginLeft: 15,
    marginVertical: 5,
  },
});

export default Option;
