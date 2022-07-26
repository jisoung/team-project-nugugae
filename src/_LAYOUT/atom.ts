import { atom } from "recoil";

export interface IToken {
  ascToken: string;
}

export const isLogin = atom<boolean>({
  key: "isLogin",
  default: false,
});

export const tokenState = atom<IToken[]>({
  key: "token",
  default: [],
});

