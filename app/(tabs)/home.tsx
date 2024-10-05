import { Bell } from "lucide-react-native";
import React from "react";
import { View, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "~/components/ui/button";
import { Card, CardDescription, CardTitle } from "~/components/ui/card";
import { Progress } from "~/components/ui/progress";
import { Text } from "~/components/ui/text";

const Home = () => {
  return (
    <SafeAreaView>
      <ScrollView className="m-2">
        <View className="flex-row items-center justify-between">
          <View>
            <Text className="font-bold text-base">Hello</Text>
            <Text>Vikas Patel</Text>
          </View>
          <TouchableOpacity>
            <Bell color="black" />
          </TouchableOpacity>
        </View>
        <View className="m-2">
          <Text className="mt-4 mb-2">All Time</Text>
          <View className="flex-row justify-between gap-3">
            <Card className="p-4 flex-1 bg-white ">
              <Text className="font-bold tracking-wide text-sm text-Green">
                Income
              </Text>
              <Text className="font-semibold">$ 273,3564</Text>
            </Card>
            <Card className="p-4 flex-1 ">
              <Text className="font-bold tracking-wide text-sm text-Red">
                Expense
              </Text>
              <Text className="font-semibold">$ 273,3564</Text>
            </Card>
          </View>
          <Text className="mt-2">Todays</Text>

          <View className="flex-row justify-between gap-3 mt-3">
            <Card className="p-4 flex-1 bg-white ">
              <Text className="font-bold tracking-wide text-sm text-Green">
                Income
              </Text>
              <Text className="font-semibold">$ 273,3564</Text>
            </Card>
            <Card className="p-4 flex-1 ">
              <Text className="font-bold tracking-wide text-sm text-Red">
                Expense
              </Text>
              <Text className="font-semibold">$ 273,3564</Text>
            </Card>
          </View>
        </View>

        <View className="m-2">
          <Text className="mt-4 mb-2">Goals</Text>
          <Card className="p-4 flex-1 bg-white ">
            <Text className="font-bold tracking-wide text-sm text-Green">
              Play Station
            </Text>
            <Progress value={87} className="h-1" />
            <Text className="font-semibold">$ 273,3564</Text>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
