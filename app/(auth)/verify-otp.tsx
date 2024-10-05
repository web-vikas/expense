import { ScrollView, View } from "react-native";
import React from "react";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

const VerifyOTP = () => {
  return (
    <ScrollView>
      <View>
        <Button onPress={() => router.push("/home")}>
          <Text>VerifyOTP</Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default VerifyOTP;
