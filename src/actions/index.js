import { ADD_TODO, TOGGLE_TODO } from './actionTypes';

let nextId = 0;
export const addTodo = (text) => ({
	type: ADD_TODO,
	id: nextId++,
	text
});

export const toggleTodo = (id, oldState) => ({
	type: TOGGLE_TODO,
	id,
	oldState
});
