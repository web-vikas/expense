import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
import { Tabs } from "expo-router";
const TabLayout = () => {
  const hiddenHeader = {
    headerShown: false,
  };
  return (
    <>
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Tabs>
          <Tabs.Screen name="home" options={hiddenHeader} />
          <Tabs.Screen name="stats" options={hiddenHeader} />
          <Tabs.Screen name="circle" options={hiddenHeader} />
          <Tabs.Screen name="profile" options={hiddenHeader} />
        </Tabs>
      </KeyboardAvoidingView>
    </>
  );
};

export default TabLayout;
