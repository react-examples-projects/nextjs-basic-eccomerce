import React from "react";
import { CounterProvider } from "./ShoppingCardContext";

export default function ShoppingCardProvider({ children }) {
  return <CounterProvider>{children}</CounterProvider>;
}
