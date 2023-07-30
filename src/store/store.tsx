import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";
import statusSlice from "./statusSlice";

export const store = configureStore({
	reducer: {
		todos: todoSlice,
		status: statusSlice,
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch