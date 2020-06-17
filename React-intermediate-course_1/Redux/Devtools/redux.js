const redux = require("redux")

const initialState = {
    counter: 0
}

// Reducer
const reducer = (state = initialState, action) => {

    if (action.type === "ADD") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === "SUB") {
        return {
            counter: state.counter - 1
        }
    } else if (action.type === "ADD-NUMBER") {
        return {
            counter: state.counter + action.value
        }
    }

    return state
}


// Store
const store = redux.createStore(reducer)

store.subscribe(() => {
    console.log("Subscribe", store.getState())
})

// Actions
const addCounter = {
    type: 'ADD'
}

store.dispatch(addCounter)// добавление 

store.dispatch({ type: "SUB" })// вычитание 

store.dispatch({ type: "ADD-NUMBER", value: 10 })//




