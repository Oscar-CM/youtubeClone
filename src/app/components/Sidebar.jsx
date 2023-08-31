import React from 'react';
import { categories } from '../utils/constants';


const Sidebar = ({selectedCategory, setSelectedCategory}) => {


    return (
        <div className='mt-3 text-white flex flex-col '>
            {categories.map((category) => (
                <button 
                className='flex p-2 m-1 mx-4 hover:bg-red-500 rounded-lg' 
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
                
                >
                    <span className='text-red-600 mt-1'>{category.icon}</span>
                    <span className='mx-4 opacity-[0.8]'>{category.name}</span>
                </button>
            ))}
            
        </div>
    )
}

export default Sidebar