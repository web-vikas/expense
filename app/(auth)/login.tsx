import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { router } from "expo-router";

const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginFormData) => {
    console.log(data);
    router.push("/verify-otp");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="m-5 h-[69vh] justify-center">
        <View className="items-center mb-10">
          <Text className="text-4xl font-bold">EXPENDI</Text>
          <Text className="text-lg text-gray-500 mt-2">
            Simplify your expenses
          </Text>
        </View>
        <View>
          <Text className="text-2xl font-bold mb-6 text-center">Sign In</Text>

          <View className="mb-5">
            <Label nativeID="email">Email</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter your email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  className="mt-2 border border-gray-300 rounded-lg px-4 py-3"
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </Text>
            )}
          </View>

          <View className="mb-5">
            <Label nativeID="password">Password</Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Enter your password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  secureTextEntry
                  className="mt-2 border border-gray-300 rounded-lg px-4 py-3"
                />
              )}
              name="password"
            />
            {errors.password && (
              <Text className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </Text>
            )}
          </View>

          <Button onPress={handleSubmit(onSubmit)}>
            <Text className="text-white text-center text-lg font-bold">
              Login
            </Text>
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
