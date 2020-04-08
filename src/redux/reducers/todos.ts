import {Todo} from '@/types';
import {ADD_TODO, INIT_TODOS, UPDATE_TODO, EDIT_TODO} from '@/redux/actionTypes';

const todos = (state: Todo[], action: any) => {
  state = state || [];
  switch (action.type) {
    case ADD_TODO:
      return [ action.payload,...state];
    case INIT_TODOS:
      return [...action.payload];
    case UPDATE_TODO:
      return state.map(t => t.id === action.payload.id ?
      action.payload : t);
    case EDIT_TODO:
      return state.map(t => t.id === action.payload ?
        Object.assign({}, t, {editing: true})
        : Object.assign({}, t, {editing: false}));
    default:
      return state;
  }
};

export default todos;