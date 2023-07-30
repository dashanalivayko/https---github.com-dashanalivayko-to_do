import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';

export interface ITodo {
	id: number,
	text: string,
}

export interface TodoState {
	todos: ITodo[];
}

const initialState: TodoState = {
	todos: [],
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		getTodo: (state) => {

		},
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload);
		},
		editTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.find((todo) => action.payload.id === todo.id)!.text = action.payload.text;
		},
		deleteTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.filter((todo) => action.payload.id !== todo.id)
		},
	},
})

export const { getTodo, addTodo, editTodo, deleteTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer