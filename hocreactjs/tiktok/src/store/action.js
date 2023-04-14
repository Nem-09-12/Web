import { ADD_TODO_INPUT, SET_TODO_INPUT, DELETE_TODO_INPUT } from "./constant";

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT,
    payload
})

export const addTodoInput = payload => ({
    type: ADD_TODO_INPUT,
    payload
})

export const deleteTodoInput = payload => ({
    type: DELETE_TODO_INPUT,
    payload
})