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
      <View className="gap-3">

      <Button onPress={()=> router.push('/login')}>
        <Text className="text-white">Go to Login</Text>
      </Button>
      <Button onPress={()=> router.push('/verify-otp')}>
        <Text className="text-white">Go to OTP</Text>
      </Button>
      <Button onPress={()=> router.push('/home')}>
        <Text className="text-white">Go to Home</Text>
      </Button>
      <Button onPress={()=> router.push('/reports')}>
        <Text className="text-white">Go to Reports</Text>
      </Button>
      <Button onPress={()=> router.push('/sms')}>
        <Text className="text-white">Go to SMS</Text>
      </Button>
      </View>
    </SafeAreaView>
  );
};

export default OnBoarding;
