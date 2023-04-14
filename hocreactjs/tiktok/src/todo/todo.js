import { useRef, useReducer } from "react";
import { setJob, addJob, deleteJob } from "./actions"
import reducer, { initialState } from "./reducer"
import logger from "./logger";
import '../styles.css'

export default function Todo() {
    const [state, dispatch] = useReducer(logger(reducer), initialState)
  const {job, jobs} = state
  const autoFocus = useRef()

  const handleSummit = () => {
    dispatch(addJob(job))
    dispatch(setJob(''))

    autoFocus.current.focus()
  }

  return (
    <div style={{padding: '0 20px',}}>
      <h3>Tudu List</h3>

      <input
        ref={autoFocus}
        value={job}
        type="text"
        placeholder="typing...."
        onChange={e => {
          dispatch(setJob(e.target.value))
        }}
      />
      <button onClick={handleSummit}>Add</button>
      
      <ul>
        {jobs.map((job, index) => (
            <li key={index}>
              {job}
              <span onClick={() => {
                dispatch(deleteJob(index))
              }}>
                  &times;
              </span>
            </li>
          )
        )}
      </ul>
    </div>
  )
}