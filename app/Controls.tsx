import releaseNotes from "@/releaseNotes";
import { AntDesign, FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const ReleaseNotes = () => {
  const router = useRouter();

  const controls: { icon: string; activatedIcon?: string }[] = [
    { icon: "lock", activatedIcon: "unlock" },
    { icon: "fan" },
    { icon: "bolt" },
    { icon: "car" },
  ];

  const [activatedControls, setActivatedControls] = useState(
    controls.map((_) => false)
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 30, marginBottom: 75 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name={"left"} size={18} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "white" }}>
            Controls
          </Text>
          <TouchableOpacity>
            <MaterialCommunityIcons name="tire" size={24} color="grey" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../assets/images/caroverhead.png")}
            style={{
              width: "80%",
              height: "80%",
              marginTop: -15,
            }}
            resizeMode="contain"
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: -20,
          }}
        >
          {controls.map(({ icon, activatedIcon }, index) => {
            return (
              <TouchableOpacity
                key={icon}
                onPress={() =>
                  setActivatedControls((prevControls) =>
                    prevControls.map((item, i) => (i === index ? !item : item))
                  )
                }
              >
                <FontAwesome6
                  name={
                    activatedControls[index] && activatedIcon
                      ? activatedIcon
                      : icon
                  }
                  size={24}
                  color={activatedControls[index] ? "white" : "grey"}
                />
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161719",
    padding: 30,
  },
});

export default ReleaseNotes;
