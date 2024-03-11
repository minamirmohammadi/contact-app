import { createContext } from 'react'

export const Contactcontex = createContext({
    loading: false,
    setloading: () => { },
    getcontact: {},
    setcontact: () => { },
    contacts: [],
    setcontacts: [],
    filtercontact: [],
    setfiltercontact: [],
    // query: {},
    groups: [],
    contact: {},
    setContactInfo: () => { },
    removeContact: () => { },
    updatecontact: () => { },
    createContact: () => { },
    contactsearch: () => { },
    confirmDelete: () => { },
    // errors: []
})

