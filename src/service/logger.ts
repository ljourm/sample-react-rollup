import { v4 } from "uuid";

export const infoLog = (...messages: string[]) => {
  console.log(v4, ...messages)
}