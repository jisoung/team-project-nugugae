import { atom } from "recoil";

export interface IToken {
  ascToken: string;
}

export const tokenState = atom<IToken[]>({
  key: "token",
  default: [],
});
