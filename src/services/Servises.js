import axios from 'axios';

const SREVER_URL = "http://localhost:9000"

export const getallContacts = () => {
    const url = `${SREVER_URL}/contacts`
    return (axios.get(url))
}

export const getContact = (contactid) => {
    const url = `${SREVER_URL}/contacts/${contactid}`
    return (axios.get(url))
}

export const getALLGroups = () => {
    const url = `${SREVER_URL}/groups`
    return (axios.get(url))
}

export const getGroup = (groupid) => {
    const url = `${SREVER_URL}/groups/${groupid}`
    return (axios.get(url))
}

export const createContact = (contact) => {
    const url = `${SREVER_URL}/contacts`
    return (axios.post(url, contact))
}

export const updatContact = (contact, contactid) => {
    const url = `${SREVER_URL}/contacts/${contactid}`
    return (axios.put(url, contact))
}

export const deleteCotact = (contactid) => {
    const url = `${SREVER_URL}/contacts/${contactid}`
    console.log(contactid);
    return (axios.delete(url))
}


