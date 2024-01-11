import React from "react";

import { useTheme } from "native-base";

import { DefaultTheme, NavigationContainer } from "@react-navigation/native";

import OneSignal, { OSNotification } from "react-native-onesignal";

import { AppRoutes } from "./app.routes";

import { Notification } from "../components/Notification";

const linking = {
  prefixes: [
    "com.henrique1204.shoesapp://",
    "igniteshoesapp://",
    "exp+igniteshoesapp://",
  ],
  config: {
    screens: {
      details: {
        path: "details/:productId",
        parse: {
          productId: (id: string) => id,
        },
      },
    },
  },
};

export function Routes() {
  const [notification, setNotification] = React.useState<OSNotification>();

  const { colors } = useTheme();

  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  const handleOnCloseNotification = () => setNotification(undefined);

  React.useEffect(() => {
    const unsubscribe = OneSignal.setNotificationWillShowInForegroundHandler(
      (notificationEvent) => {
        const notification = notificationEvent.getNotification();

        setNotification(notification);
      }
    );

    return () => unsubscribe;
  }, []);

  return (
    <NavigationContainer theme={theme} linking={linking}>
      <AppRoutes />

      {!!notification && (
        <Notification
          data={notification}
          onClose={handleOnCloseNotification}
        />
      )}
    </NavigationContainer>
  );
}
