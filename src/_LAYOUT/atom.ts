import { atom } from "recoil";

export const isLogin = atom<boolean>({
  key: "isLogin",
  default: false,
});

export const tokenState = atom<string>({
  key: "token",
  default: "",
});

