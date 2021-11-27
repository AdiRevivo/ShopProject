function convertActionToName(actionType) {//SET_NAME
    return actionType.toLowerCase().replace(/_(\w)/g, v => v[1].toUpperCase());
}//setName

export default function createReducer(state, action, handlers) {
    //SET_NAME
    const key = convertActionToName(action.type);
    const handler = handlers[key]
    if (handler)
    handler(state, action);
}
