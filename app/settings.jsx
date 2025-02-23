import { StyleSheet, Text, View } from "react-native";
import React from "react";

const settings = () => {
  return (
    <View>
      <Text>This is the settings page for all the settings works</Text>
    </View>
  );
};

export default settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
