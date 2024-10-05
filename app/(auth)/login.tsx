import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { router } from "expo-router";
import { Text } from "~/components/ui/text";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Text>EXPENDI</Text>
          <Text>Simplify your expenses</Text>
        </View>
        <Text>Sign In</Text>
        <View>
          <View>
            <Label nativeID="name">Email</Label>
            <Input
              placeholder="Write some stuff..."
              aria-labelledby="inputLabel"
              aria-errormessage="inputError"
            />
          </View>
          <View>
            <Label nativeID="name">Password</Label>
            <Input secureTextEntry />
          </View>
        </View>
        <Button onPress={() => router.replace("/verify-otp")}>
          <Text className="text-white">Login</Text>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
