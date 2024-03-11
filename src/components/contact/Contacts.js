import React, { useContext } from 'react'
import { CURRENTLINE, ORANGE, PINK } from '../../helpers/Colors';
import Contact from './Contact';
// import notfound from '../../assets/Screenshot (127).png';
import Spinner from '../../components/Spinner';
import { Link } from 'react-router-dom';
import { Contactcontex } from '../contex/Contactcontex';

// export default function Contacts({ contacts, loading, confirmDelete }) {
export default function Contacts() {
    const { contacts, loading, confirmDelete,filtercontact } = useContext(Contactcontex)
    return (
        <>
            <section className='container mt-24'>
                <div className='grid'>
                    <div className='flex justify-center'>
                        <Link to="/contacts/add" className='mx-2 text-lg p-2 flex items-center' style={{ backgroundColor: PINK }}>
                            ساخت مخاطب جدید
                            <i class='bx bx-user-plus mx-2'></i>
                        </Link>
                    </div>
                </div>
            </section>
            {
                loading ? <Spinner /> :
                    <section className='container mt-10 '>
                        <div className='g flex flex-wrap justify-between gap-5 '>
                            {
                                contacts.length > 0 ? filtercontact.map(c => (
                                    <Contact key={c.id} {...c}
                                        confirmDel={() => {
                                            confirmDelete(c.id, c.fullname)
                                            // console.log(c.id)
                                        }}
                                    />

                                )) : (
                                    <div className='flex w-full flex-col items-center justify-center p-5 ' style={{ backgroundColor: CURRENTLINE }}>
                                        <h3 className='text-lg mb-3' style={{ color: ORANGE }}>مخاطب یافت نشد...</h3>
                                        <img src={require('../../assets/no-found.gif')} alt="پیدا نشد" className='w-52' />
                                    </div>
                                )
                            }
                        </div>
                    </section>
            }

        </>
    )
}
