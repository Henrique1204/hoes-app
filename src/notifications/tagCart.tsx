import OneSignal from "react-native-onesignal";

export const tagCartCreate = (cartCount: number) => {
  OneSignal.sendTag("cart_itens_count", String(cartCount));
};

export const tagCartDelete = () => {
  OneSignal.deleteTag("cart_itens_count");
};
