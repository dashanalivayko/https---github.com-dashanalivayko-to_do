import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

export interface StatusState {
	isDisableEdit: boolean;
}

const initialState: StatusState = {
	isDisableEdit: false,
}

export const statusSlice = createSlice({
	name: 'status',
	initialState,
	reducers: {
		disableEdit: (state, action: PayloadAction<boolean>) => {
			state.isDisableEdit = action.payload;
		},
	},
})

export const { disableEdit } = statusSlice.actions;
export const selectIsDisableEdit = (state: RootState) => state.status.isDisableEdit;

export default statusSlice.reducer;