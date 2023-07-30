import { ITodo } from "../store/todoSlice";

export interface PropsWithClassName {
	className?: string;
}

export const filterTodos = (state: ITodo[]) => {
	const completedTasks = state.filter((todo) => todo.complete);
	const uncompletedTasks = state.filter((todo) => !todo.complete);
	return {
		sortedTodo: [...uncompletedTasks, ...completedTasks],
		completedTasksCount: completedTasks.length,
		uncompletedTasksCount: uncompletedTasks.length
	};
}

export const setToLocalStorage = (todos: ITodo[]) => {
	localStorage.setItem('todos', JSON.stringify(todos));
}

export const getFromLocalStorage = () => {
	return JSON.parse(localStorage.getItem('todos') || '');
}