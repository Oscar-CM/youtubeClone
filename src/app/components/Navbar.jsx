"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logo } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { search } from '../utils/constants';



const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState()
    const router = useRouter();
   

    const handleSubmit = (e) => {
        e.preventDefault();

    }
    return (
        <div>
            <div className='flex justify-between items-center'>
                <Link href='/'>
                <div className='flex items-center mx-10'>
                    <img src={logo} alt='logo' height={45} width={45} />
                    <h2>Youtube Clone</h2>
                </div>
                </Link>
                
                <div className='flex justify-center items-center bg-white rounded-2xl '>
                
               
                    <input type='text' placeholder='search youtube' className='p-2  mx-6 flex-grow text-black' 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    
                    /> 
                    <button onClick={() =>  router.push(`/search/${searchTerm}`)}><FontAwesomeIcon icon= {faMagnifyingGlass} height={20} width={20} className='text-red-600 mx-3'/></button>
                    
                </div>
            </div>

        </div>
    )
}

export default Navbar