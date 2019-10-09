import people from './people.json';

const initialState = {
    people,
    detailView: false,
    personSelected: null,
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SELECTED_PERSON':
            return {
                ...state,
                detailView: true,
                personSelected: action.selectId
            }
        case 'NONE_SELECTED':
            return {
                ...state,
                detailView: false,
                personSelected: null
            }
        case 'FORM_UPDATE': 
            return {
                ...state,
                [action.payload.prop]: action.payload.value
            }
        case 'NEW_CONTACT':
            return {
                ...state
            }
        case 'ADD_PERSON':
            return {
                ...state,
                ...action.newPerson
            }
        default: 
            return state;
    }
}
