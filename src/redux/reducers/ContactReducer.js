const initialState = [
    {
        id: 0,
        name: "Bhavana",
        number: 9963743253,
        email: "bhavanakonkala1998@gmail.com"

    },
    {
        id: 1,
        name: "Manasa",
        number: 9967343254,
        email: "manasakonkala@gmail.com"
    }
]
export const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];
            return state;
        case "UPDATE_CONTACT":
            const updateContact = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            state = updateContact
            return state;
        case "DELETE_CONTACT":
            const filterContact = state.filter(contact => contact.id !== action.payload && contact);
            state = filterContact;
            return state;

        default:
            return state;
    }


}