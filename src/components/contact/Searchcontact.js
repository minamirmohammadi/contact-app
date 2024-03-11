import React, { useContext } from 'react'
import { PURPLE, } from '../../helpers/Colors';
import { Contactcontex } from '../contex/Contactcontex';

export default function Searchcontact(props) {
    const { contactsearch, query } = useContext(Contactcontex)

    return (
        <div className="input_group mx-2 justify-center flex" style={{ direction: 'ltr' }}>
            <span className='input_group_text w-6' style={{ backgroundColor: PURPLE }}>
                <i class='bx bx-search-alt-2 translate-y-[50%] translate-x-[35%] text-white'></i>
            </span>
            <input
                // value={props.query.text}
                // value={query.text}
                // onChange={(event) => props.search(event)}
                onChange={contactsearch}
                className=' border border-purple-400 w-[90%] pr-2 text-sm h-8'
                placeholder='جستجوی مخاطب' aria-label='search' type="text" style={{ direction: 'rtl' }} />
        </div>
    )
}
