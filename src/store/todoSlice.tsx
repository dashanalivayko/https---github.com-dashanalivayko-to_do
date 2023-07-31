import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from './store';
import { filterTodos, getFromLocalStorage, setToLocalStorage } from '../helpers/helpers';

export interface ITodo {
	id?: number,
	text?: string,
	complete?: boolean,
}

export interface TodoState {
	todos: ITodo[];
	count: number;
}

const initialState: TodoState = {
	todos: getFromLocalStorage(),
	count: getFromLocalStorage().length,
}

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {

			const todo = {
				id: Number((Math.random() * 100).toFixed(2)),
				text: action.payload.text,
				complete: false,
			}

			state.todos.unshift(todo);
			state.count = state.count + 1;
			setToLocalStorage(state.todos);
		},
		editTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.find((todo) => action.payload.id === todo.id)!.text = action.payload.text;
			setToLocalStorage(state.todos);
		},
		deleteTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos = state.todos.filter((todo) => action.payload.id !== todo.id);
			setToLocalStorage(state.todos);
		},
		toggleTodo: (state, action: PayloadAction<ITodo>) => {
			const toggledTodo = state.todos.find((todo) => action.payload.id === todo.id);
			toggledTodo!.complete = !toggledTodo?.complete;
			state.todos = filterTodos(state.todos).sortedTodo;
			setToLocalStorage(state.todos);
		},
	},
})

export const { addTodo, editTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer