export const ADD_TODO = "ADD_TODO";
export const DEL_TODO = "DEL_TODO";
export const UPP_TODO = "UPP_TODO";
export const DONE_TODO = "DONE_TODO";

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}
export function delTodo(todoId) {
  return {
    type: DEL_TODO,
    payload: todoId,
  };
}
export function uppdateTodo(todo) {
  return {
    type: UPP_TODO,
    payload: todo,
  };
}
export function doneTodo(todo) {
  return {
    type: DONE_TODO,
    payload: todo,
  };
}
