import React from "react";

import { Platform, StatusBar } from "react-native";

import OneSignal from "react-native-onesignal";

import { NativeBaseProvider } from "native-base";

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";

import { ONE_SIGNAL_APP_ID_ANDROID, ONE_SIGNAL_APP_ID_IOS } from "@env";

import { CartContextProvider } from "./src/contexts/CartContext";

import { tagUserEmailCreate } from "./src/notifications/tagUserEmail";

import { THEME } from "./src/theme";

import { Routes } from "./src/routes";

import { Loading } from "./src/components/Loading";

const oneSingalAppId =
  Platform.OS === "ios" ? ONE_SIGNAL_APP_ID_IOS : ONE_SIGNAL_APP_ID_ANDROID;

OneSignal.setAppId(oneSingalAppId);

tagUserEmailCreate("pauloh16.pdr@gmail.com");

OneSignal.promptForPushNotificationsWithUserResponse(() => {});

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <CartContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </CartContextProvider>
    </NativeBaseProvider>
  );
}
