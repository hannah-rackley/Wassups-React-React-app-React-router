const reducer = (oldState, action) => {
    if (action.type === "ADD_WASSUP") {
        return {
            ...oldState, 
            id: oldState.id + 1,
            wassups: [ {
                user: action.user,
                id: oldState.id,
                content: action.content
            }
            ].concat(oldState.wassups)
        }
    } else if (action.type === "REMOVE_WASSUP") {
        return {
            ...oldState, 
            wassups: oldState.wassups.filter(wassup => wassup.id !== action.id)
        }
    } else if (action.type === "LOAD_WASSUPS") {
        return {
            ...oldState, 
            wassups: action.wassups
        }
    } else {
        return oldState;
    }
}

export default reducer;