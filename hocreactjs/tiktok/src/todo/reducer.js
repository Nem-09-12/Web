import { SET_JOB ,ADD_JOB, DELETE_JOB } from "./constants"

export const initialState = {
    job: '',
    jobs: []
  }

const reducer = (state, action) => {
  
    switch (action.type) {
  
      case SET_JOB:
        return {
          ...state,
          job: action.payload
        }
  
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs, action.payload]
        }

      case DELETE_JOB:
        const newJob = [...state.jobs]
        newJob.splice(action.payload, 1)
        return {
          ...state,
          jobs: newJob
        }

      default:
        throw new Error('invalid action') 
    }
  }

  export default reducer