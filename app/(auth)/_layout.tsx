import React from "react";
import { Stack } from "expo-router";
const AuthLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="login"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="verify-otp"
          options={{
            headerShown: true,
            headerTitle: "OTP Verification",
          }}
        />
      </Stack>
    </>
  );
};

export default AuthLayout;
