import { atom } from "recoil";

export interface IToken {
  ascToken: string;
}

export interface IUrl {
  default: string;
}

export const tokenState = atom<IToken[]>({
  key: "token",
  default: [],
});

export const localUrl = atom<IUrl>({
  key: "localUrl",
  default: "https://967d-222-118-155-166.jp.ngrok.io",
});
