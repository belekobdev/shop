const initialState = {
    value: ""
}

export const ValueReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_VALUE": {
            return {...state, value: action.payload.target.value}
        }
        default:
            return state
    }
}