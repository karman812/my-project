const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
    messagesData: [{id: 1, message: "Hi"},
        {id: 2, message: "How are you?"},
        {id: 3, message: "Im fine. What about you?"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"},],
    dialogsData: [{id: 1, name: "Vanya"},
        {id: 2, name: "Katya"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Natasha"},
        {id: 5, name: "Valera"},
        {id: 6, name: "Grisha"},],
    newMessageBody: ''
}

 const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newText
            }

        case SEND_MESSAGE:
            let newText = state.newMessageBody;
            stateCopy = {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 10, message: newText}]
            }
            return stateCopy
        default:
            return state
    }
}

export const sendMessageCreator = () => {

    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBody = (body) => {

    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newText: body
    }

}

export default dialogsReducer