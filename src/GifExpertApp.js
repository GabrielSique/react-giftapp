import React, { useState } from 'react';
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
import './index.css';

export const GifExpertApp = () => {
    
    const [categories, setCategories] = useState(['Demon Slayer']);

    // const handleAdd = () => {
    //     setCategories([...categories, 'Demon Slayer']);
    // }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = { setCategories }/>
            <hr />

            <ol>
                {
                    categories.map(category => (
                        <GifGrid 
                            key={ category }
                            category={ category }
                        
                        />
                    ))
                }
            </ol>
        </>
    )
}


export default GifExpertApp