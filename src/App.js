import React, { useEffect, useState } from 'react'
import './App.css'
import { Contactcontex } from './components/contex/Contactcontex';
import Navbar from './components/Navbar'
import Contacts from './components/contact/Contacts'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Addcontact from './components/contact/Addcontact';
import Editcontact from './components/contact/Editcontact';
import Viewcontact from './components/contact/Viewcontact';
import { confirmAlert } from 'react-confirm-alert';
import { CURRENTLINE, PURPLE, YELLOW, FOREGROUND, COMMENT } from '../src/helpers/Colors';
import { getallContacts, getALLGroups, deleteCotact, createContact } from './services/Servises';
import _ from 'lodash';
import { ContactSchema } from './validations/Contact-calidation';
import { ToastContainer, toast } from 'react-toastify';
// import toast, { Toaster } from 'react-hot-toast';



export default function App() {
  const [contacts, setcontacts] = useState([])
  const [loading, setloading] = useState(false)
  const [groups, setgroups] = useState([])
  const [contact, setcontact] = useState({
    fullname: '',
    mobile: '',
    job: '',
    email: '',
    photo: '',
    group: ''
  })
  const navigate = useNavigate()
  const [query, setquery] = useState({ text: "" })
  const [filtercontact, setfiltercontact] = useState([])
  // const [errors, seterroes] = useState([])

  // setcontacts
  useEffect(() => {
    const fechdata = async () => {
      try {
        setloading(true)
        // const { data: contactsdata } = await axios.get("http://localhost:9000/contacts")
        const { data: contactsdata } = await getallContacts()
        // const { data: groupsdata } = await axios.get("http://localhost:9000/groups")
        const { data: groupsdata } = await getALLGroups()
        setcontacts(contactsdata)
        setgroups(groupsdata)
        setfiltercontact(contactsdata)
        setloading(false)
      }
      catch (err) {
        console.log(err.massage);
      }
    }
    fechdata()
  }, [])

  //addcontact-------------------------------------
  const setContactInfo = (event) => {
    setcontact({ ...contact, [event.target.name]: event.target.value })
  }
  const createContactForm = async (event) => {
    // const createContactForm = async (values) => {
    // event.preventDefault()
    try {
      setloading((prevloading) => !prevloading)
      await ContactSchema.validate(contact)
      const { status, data } = await createContact(contact, { abortEarly: false })
      // const { status, data } = await createContact(values,)
      if (status === 201) {
        toast.success('مخاطب با موفقیت ساخته شد')
        const allcontacts = [...contacts, data]   //at first we shoude insert copy of contacts then setcontacts
        setcontacts(allcontacts)
        setfiltercontact(allcontacts)
        setcontact({})
        // seterroes([])
        setloading((prevloading) => !prevloading)
        navigate("/contacts")
      }
    } catch (err) {
      // console.log(err.massage);
      console.log(err.inner);
      // seterroes(err.inner)

    }
  }
  //delete contact------------------------
  const removeContact = async (id) => {
    try {
      setloading(true)
      const allcontacts = [...contacts]
      const upcontacts = allcontacts.filter(c => c.id != id)
      setcontacts(upcontacts)
      setfiltercontact(upcontacts)
      const respons = await (deleteCotact(id))
      if (respons) {
        const { data: dataContacta } = await getallContacts()
        setcontacts(dataContacta)
        setloading(false)
        toast.error('مخاطب با موفقیت حذف شد')
      }
    } catch (err) {
      console.log(err.massage);
      setloading(false)
    }
  }

  const confirmDelete = (id, contactfullname,) => {
    // console.log(id);
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div style={{
            direction: 'rtl',
            backgroundColor: { CURRENTLINE },
            border: `1px solid ${PURPLE}`,
            borderRadius: '1em'
          }}
            className='p-4 bg-[#44475a] flex flex-col gap-3 animat'
          >
            <h1 className='t text-yellow-200' style={{ color: { YELLOW } }}>پاک کردن مخاطب</h1>
            <p className='t text-white' style={{ color: { FOREGROUND } }}>آیا از حذب {contactfullname} اطمینان دارید؟</p>
            <div>
              <button onClick={() => {
                removeContact(id)
                // console.log(id)
                onClose()
              }}
                className='mx-2 p-1 bg-purple-500'
                style={{ backgroundColor: { PURPLE } }}
              >اطمینان دارم</button>
              <button onClick={onClose} className='p-1 bg-[#6272a4]' style={{ backgroundColor: { COMMENT } }}>انصراف</button>
            </div>

          </div>
        )
      }
    })
  }

  //search contact
  const contactsearch = _.debounce(event => {
    console.log(event.target.value);
    // setquery({ ...query, text: event.target.value }) it dont use
    const filterd = contacts.filter((item) => {
      return item.fullname.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setfiltercontact(filterd)
  }, 1000)

  // const navigate = useNavigate()

  return (
    <Contactcontex.Provider value={{
      loading,
      setloading,
      contact,
      setcontact,
      contacts,
      filtercontact,
      // query,
      groups,
      setContactInfo,
      removeContact,
      // updatecontact,
      createContact: createContactForm,
      contactsearch,
      confirmDelete,
      setfiltercontact,
      // errors,/

    }}>
      <div >
        {/* with props */}
        {/* <Navbar query={query} search={contactsearch} />    */}
        {/* <Navigate to={"/contacts"} /> */}
        {/* <Routes>
          <Route path="/contacts" element={<Contacts
            contacts={filtercontact}
            loading={loading}
            confirmDelete={confirmDelete} />} />
          <Route path='/contacts/add' element={<Addcontact
            loading={loading}
            groups={groups}
            contact={contact}
            setContactInfo={setContactInfo}
            createContactForm={createContactForm}
          />} />
          <Route path='/contacts/:id' element={<Viewcontact />} />
          <Route path='/contacts/سedit/:id' element={<Editcontact />} />
        </Routes> */}


        {/* tithout props */}
        {/* <Navbar /> */}
        <ToastContainer rtl={true} position='bottom-right' theme='colored' />
        {/* <Toaster /> */}
        <Navbar query={query} search={contactsearch} />
        <Routes>
          <Route path='/' element={<Navigate to={'/contacts'} />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path='/contacts/add' element={<Addcontact />} />
          <Route path='/contacts/:id' element={<Viewcontact />} />
          <Route path='/contacts/edit/:id' element={<Editcontact />} />
          <Route path='/mina' element={<div className='container'><h1 className='mt-20 text-white text-xl'>mina</h1></div>} />
        </Routes>
      </div>

    </Contactcontex.Provider>
  )
}