import OneSignal from "react-native-onesignal";

export const tagUserEmailCreate = (email: string) => {
  OneSignal.sendTag("user_email", email);
};
