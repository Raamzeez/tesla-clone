import releaseNotes from "@/releaseNotes";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ReleaseNotes = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: 15, marginBottom: 75 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{ position: "absolute", left: 15 }}
          >
            <AntDesign name={"left"} size={18} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "700", color: "white" }}>
            Release Notes
          </Text>
        </View>
        <ScrollView
          style={{ height: "100%", width: "100%" }}
          showsVerticalScrollIndicator={true}
        >
          {releaseNotes.map((releaseNote, index) => {
            return (
              <View key={releaseNote.version} style={{ marginLeft: 10 }}>
                <Text style={styles.versionText}>{releaseNote.version}</Text>
                {releaseNote.features.map((feature, index) => {
                  return (
                    <View key={feature.title}>
                      <Text style={styles.featureTitleText}>
                        {feature.title}
                      </Text>
                      <Text style={styles.featureBodyText}>{feature.body}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </ScrollView>
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
  versionText: {
    fontSize: 30,
    color: "white",
    fontWeight: "700",
    marginVertical: 20,
  },
  featureTitleText: {
    fontSize: 13,
    color: "white",
    fontWeight: "600",
    marginBottom: 30,
  },
  featureBodyText: {
    fontSize: 10,
    color: "grey",
    fontWeight: "600",
  },
});

export default ReleaseNotes;
