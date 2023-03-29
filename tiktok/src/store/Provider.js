import { useReducer, useRef } from "react";
import Context from "./Context";
import reducer, {initState} from "./reducer";
import logger from "./logger";

function Provider({ children }) {
    const [state, dispatch] = useReducer(reducer, initState)
    const ref = useRef()

    return (
        <Context.Provider value={[state, dispatch, ref]}>
            {children} 
        </Context.Provider>
    )
}

export default Provider