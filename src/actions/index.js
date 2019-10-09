export const selectPerson = (peopleId) => {
    return {
        type: 'SELECTED_PERSON',
        selectId: peopleId
    }
}

export const nonePerson = () => {
    return {
        type: 'NONE_SELECTED',
    }
}

export const formUpdate = ({prop, value}) => {
    return {
        type: 'FORM_UPDATE',
        payload: {prop, value}, 
    }
}

export const createNewContact = ({firstName, lastName, phone, email, company, project, notes}) => {
    return (dispatch) => {
        fetch('http://localhost:3000/contact', {
            method: 'POST',
            body: JSON.stringify({
                "firstName": firstName,
                "lastName": lastName,
                "phone": phone,
                "email": email,
                "company": company,
                "project": project,
                "notes": notes
            }),
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        })
        .then(res => console.log(res))
        .then(() => dispatch({ type: 'NEW_CONTACT'}))
        .catch(err => console.log('error', err))
    }
}