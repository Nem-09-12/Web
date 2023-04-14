import { SET_TODO_INPUT, ADD_TODO_INPUT, DELETE_TODO_INPUT } from "./constant"

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }

        case ADD_TODO_INPUT:
            return {
                ...state,
                todos: [...state.todos, action.payload],
                todoInput: ''
            }

        case DELETE_TODO_INPUT:
            const newState = [...state.todos]
            newState.splice(action.payload,1)
            return {
                ...state,
                todos: newState,
            }
        default:
            throw new Error('Invalid type')
    }
}

export { initState }
export default reducer