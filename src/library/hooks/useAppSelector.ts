import { TypedUseSelectorHook, useSelector } from "react-redux";
import type { RootState } from "@library/redux/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
