import React, { useState } from "react";
import { ScrollView, View, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Text } from "~/components/ui/text"; // Assuming you're using custom Text component from UI lib
import { Button } from "~/components/ui/button"; // Assuming you're using custom Button component from UI lib
import { DeleteIcon } from "lucide-react-native"; // Lucide Icons
import { Input } from "~/components/ui/input";

// Zod schema for OTP validation (4 digits)
const otpSchema = z.object({
  otp: z.string().length(4, "OTP must be 4 digits"),
});

type OTPFormData = z.infer<typeof otpSchema>;

const VerifyOTP = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<OTPFormData>({
    resolver: zodResolver(otpSchema),
  });

  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);

  // Update OTP state and form value
  const handleOtpChange = (digit: string, index: number) => {
    const otpCopy = [...otp];
    otpCopy[index] = digit;
    setOtp(otpCopy);

    // Update react-hook-form's otp field value with the joined string
    setValue("otp", otpCopy.join(""));
  };

  const handleKeyPress = (value: string) => {
    const nextIndex = otp.findIndex((digit) => digit === "");
    if (nextIndex !== -1) {
      handleOtpChange(value, nextIndex);
    }
  };

  const handleBackspace = () => {
    const lastIndex = otp.findLastIndex((digit) => digit !== "");
    if (lastIndex !== -1) {
      const otpCopy = [...otp];
      otpCopy[lastIndex] = "";
      setOtp(otpCopy);

      // Update react-hook-form's otp field value with the joined string
      setValue("otp", otpCopy.join(""));
    }
  };

  const isOtpComplete = otp.every((digit) => digit !== "");

  const onSubmit = (data: OTPFormData) => {
    console.log("Entered OTP:", data.otp);
   
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="m-5">
          <View className="items-center mb-10">
            <Text className="text-xl font-bold">OTP Verification</Text>
            <Text className="text-gray-500 mt-2">
              OTP just sent to +1 (125) 700-4035
            </Text>
          </View>

          {/* OTP Input Boxes */}
          <View className="flex-row justify-between mx-auto w-3/4 mb-8">
            {otp.map((digit, index) => (
              <View
                key={index}
                className={`w-12 h-12 border text-primary ${
                  errors.otp ? "border-red-500" : "border-gray-300"
                } rounded-lg flex items-center justify-center`}
              >
                <Input
                  style={{ fontSize: 24, textAlign: "center" }}
                  maxLength={1}
                  value={digit}
                  keyboardType="numeric"
                  editable={false}
                />
              </View>
            ))}
          </View>

          {errors.otp && (
            <Text className="text-red-500 text-sm text-center mb-4">
              {errors.otp.message}
            </Text>
          )}

          <Text className="text-center text-gray-500 mb-4">
            Didn’t get the OTP? <Text className="text-blue-600">Resend</Text>
          </Text>

          {/* Custom Numeric Keyboard */}
          <View className="flex-wrap flex-row justify-center mx-auto w-3/4 mb-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
              <TouchableOpacity
                key={num}
                onPress={() => handleKeyPress(String(num))}
                className="w-20 h-20 bg-gray-100 rounded-full m-2 flex items-center justify-center"
              >
                <Text className="text-xl">{num}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              onPress={handleBackspace}
              className="w-20 h-20 bg-gray-200 rounded-full m-2 flex items-center justify-center"
            >
              <DeleteIcon color="black" size={24} />
            </TouchableOpacity>
          </View>

          {/* Verify Button (only shows when OTP is complete) */}
          {isOtpComplete && (
            <Button onPress={handleSubmit(onSubmit)} className="mt-4">
              <Text className="text-white text-center text-lg font-bold">
                Verify
              </Text>
            </Button>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VerifyOTP;
