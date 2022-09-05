import { useDispatch } from "react-redux";
import store from "@library/redux/store";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
