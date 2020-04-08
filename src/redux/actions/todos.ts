import {Todo} from '@/types';
import {ADD_TODO, INIT_TODOS, UPDATE_TODO, EDIT_TODO} from '@/redux/actionTypes';

export const addTodo = (payload: Todo) => ({type: ADD_TODO, payload});
export const initTodos = (payload: Todo[]) => ({type: INIT_TODOS, payload});
export const updateTodo = (payload: Todo[]) => ({type: UPDATE_TODO, payload});
export const editTodo = (payload: Todo[]) => ({type: EDIT_TODO, payload});



