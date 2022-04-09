import constate from "constate";
import useShoppingCart from "hooks/useShoppingCart";

const [CounterProvider, useShoppinCardContext] = constate(useShoppingCart);
export { CounterProvider, useShoppinCardContext };
