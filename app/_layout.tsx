import * as SplashScreen from "expo-splash-screen";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Foundation from "@expo/vector-icons/Foundation";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Option from "@/components/Option";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const options: { icon?: string; text?: string; subtitle?: string }[] = [
  { icon: "car", text: "Controls" },
  { icon: "fan", text: "Climate", subtitle: "Interior 74° F" },
  { icon: "location-arrow", text: "Location", subtitle: "13th St" },
  { icon: "globe", text: "Summon" },
  { icon: "clock", text: "Schedule" },
  { icon: "check-circle", text: "Security & Drivers" },
  { icon: "chart-bar", text: "Charge Stats" },
  { icon: "shopping-bag", text: "Upgrades" },
  { icon: "tools", text: "Service" },
  { icon: "road", text: "Roadside" },
];

export default function RootLayout() {
  const [showPercentage, setShowPercentage] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 10, marginBottom: 75 }}>
        <View style={{ marginLeft: 20 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              style={{ flexDirection: "row", alignItems: "center" }}
            >
              <Text style={styles.carNameText}>Raamiz's Car</Text>
              <AntDesign
                name="down"
                size={18}
                color="grey"
                style={{ marginLeft: 10 }}
              />
            </TouchableOpacity>
            <MaterialCommunityIcons
              style={{ marginLeft: "auto" }}
              name="message-text-outline"
              size={24}
              color="white"
            />
            <Entypo
              style={{ marginLeft: 30, marginRight: 20 }}
              name="menu"
              size={28}
              color="white"
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={styles.batteryContainer}>
              <View style={styles.batteryLevel} />
            </View>
            <TouchableOpacity
              onPress={() => setShowPercentage(!showPercentage)}
            >
              <Text
                style={[
                  {
                    fontSize: 17,
                    marginLeft: 10,
                  },
                  styles.statusText,
                ]}
              >
                {showPercentage ? "36 %" : "108 mi"}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.statusText}>Parked</Text>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Image
                source={require("../assets/images/car.png")}
                style={{ width: 300, height: 200, marginBottom: 40 }} // Adjust size as needed
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <Foundation name="lock" size={24} color="grey" />
              <FontAwesome5 name="fan" size={24} color="grey" />
              <FontAwesome6 name="bolt" size={24} color="grey" />
              <FontAwesome5 name="car" size={24} color="grey" />
            </View>
          </View>
          <View style={{ marginTop: 30, marginBottom: 10 }}>
            <Option refer={true} background={true} />
            <Option
              icon="video"
              text="Live Camera"
              subtitle="Sentry mode enabled"
              background={true}
            />
            {options.map(({ icon, text, subtitle }, index) => {
              return (
                <Option
                  key={index}
                  icon={icon}
                  text={text}
                  subtitle={subtitle}
                />
              );
            })}
          </View>
          <View style={styles.divider} />
          <Image
            source={require("../assets/images/model3logo.png")}
            style={{ height: 125, width: 240 }}
          />
          <View style={{ marginLeft: 15, marginTop: 15 }}>
            <Text style={styles.informationText}>7,417 miles</Text>
            <Text style={styles.informationText}>VIN: 1HGCM82633A123456</Text>
            <Text style={styles.informationText}>
              Software: v12 (2024.32.10 cceffd4dcba8)
            </Text>
            <Text style={styles.informationText}>
              Full Self-Driving (Supervised) Software: v12.5.4.1
            </Text>
            <TouchableOpacity>
              <Text
                style={[
                  styles.informationText,
                  {
                    textDecorationLine: "underline",
                    marginTop: 5,
                  },
                ]}
              >
                Release Notes
              </Text>
            </TouchableOpacity>
            <View style={{ marginTop: 15, flexDirection: "row" }}>
              <TouchableOpacity style={styles.bottomButtonContainer}>
                <Text style={styles.bottomButtonText}>Specs & Warranty</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomButtonContainer}>
                <Text style={styles.bottomButtonText}>Manage Drivers</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carNameText: {
    fontSize: 23,
    fontWeight: "600",
    color: "white",
  },
  statusText: { color: "grey", fontWeight: "700" },
  container: {
    flex: 1,
    backgroundColor: "#161719",
    padding: 30,
  },
  batteryContainer: {
    height: 18,
    width: 47,
    backgroundColor: "#222326",
    marginVertical: 10,
    borderRadius: 2,
    justifyContent: "center",
    padding: 2,
  },
  batteryLevel: {
    height: 16,
    width: 14,
    backgroundColor: "grey",
    marginVertical: 10,
    borderRadius: 2,
  },
  optionContainer: {
    marginVertical: 20,
    height: 80,
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "#1f2021",
    borderRadius: 5,
    flexDirection: "row",
  },
  divider: {
    height: 2,
    borderRadius: 3,
    backgroundColor: "#222222",
    opacity: 0.5,
    marginBottom: 30,
    width: "90%",
    marginLeft: "5%",
  },
  informationText: { color: "#969595", fontWeight: "600", marginVertical: 2 },
  bottomButtonContainer: {
    paddingHorizontal: 10.5,
    paddingVertical: 7.5,
    backgroundColor: "#2c2c2c",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
    marginVertical: 10,
  },
  bottomButtonText: { color: "#969595", fontSize: 12, fontWeight: "700" },
});
