import OneSignal from "react-native-onesignal";

export const tagUserEmailCreate = (email: string) => {
  OneSignal.sendTag("user_email", email);
};

export const tagUserEmailDelete = (email: string) => {
  OneSignal.deleteTag("user_email");
};
