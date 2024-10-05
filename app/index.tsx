import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";

const OnBoarding = () => {
  return (
    <SafeAreaView>
      <View>
        <Text>OnBoarding</Text>
      </View>
      <Button onPress={()=> router.push('/login')}>
        <Text className="text-white">Go to Login</Text>
      </Button>
      <Button onPress={()=> router.push('/reports')}>
        <Text className="text-white">Go to Reports</Text>
      </Button>
      <Button onPress={()=> router.push('/sms')}>
        <Text className="text-white">Go to Reports</Text>
      </Button>
    </SafeAreaView>
  );
};

export default OnBoarding;
