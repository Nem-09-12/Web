export default function logger(reducer) {
    return (prevState, action) => {
        console.group(action.type)
        console.log('Previous State', prevState)
        console.log('Action', action)

        const nextState = reducer(prevState, action)

        console.log('Next State', nextState)
        console.groupEnd()
        return nextState
    }
}