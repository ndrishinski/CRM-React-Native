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
        fetch('http://192.168.3.233:3000/contact', {
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
                "Content-Type": "application/json",
                "Type": "application/json"
            }
        })
        .then(res => console.log(res))
        .then(() => dispatch({ type: 'NEW_CONTACT'}))
        .catch(err => console.log('error', err))
    }
}

export const loadInitialContacts = () => {
    return (dispatch) => {
        fetch('http://192.168.3.233:3000/contact')
            .then((res) => res.json())
            .then(data => {
                dispatch({type: 'INITIAL_FETCH', payload: data})
            })
            .catch(err => console.log('error in the stuff', err))
    }
}

export const deleteContact = (id) => {
    return (dispatch) => {
        fetch(`http://192.168.3.233:3000/contact/${id}`, {method: "DELETE"})
            .then(() => dispatch({type: 'DELETE_CONTACT'}))
            .catch(err => console.log('error deleting', err))
    }
}

export const updateContact = (person) => {
    return {
        type: 'UPDATE_CONTACT',
        payload: person,
    }
}

export const saveContact = ({firstName, lastName, phone, email, company, project, notes, _id}) => {
    console.log(firstName, lastName, phone, email, company, project, notes, _id)
    return (dispatch) => {
        fetch('http://192.168.3.233:3000/contact/' + _id, {
            method: 'PUT',
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
                "Content-Type": "application/json",
                "Type": "application/json"
            }
        })
        .then(res => console.log(res))
        .then(() => dispatch({ type: 'SAVE_CONTACT'}))
        .catch(err => console.log('error', err))
    }
}