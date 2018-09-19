let addWassup = (oldState, action) => {
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
}

let removeWassup = (oldState, action) => {
    return {
        ...oldState, 
        wassups: oldState.wassups.filter(wassup => wassup.id !== action.id)
    }
}

let loadWassups = (oldState, action) => {
    return {
        ...oldState, 
        wassups: action.wassups
    }
}

let reducerRouter = {
    "ADD_WASSUP": addWassup,
    "REMOVE_WASSUP": removeWassup,
    "LOAD_WASSUPS": loadWassups
}

const reducer = (oldState, action) => {
    let actionType = reducerRouter[action.type];
    if (actionType) {
        return actionType(oldState, action);
    } else {
        return oldState;
    }
}

export default reducer;