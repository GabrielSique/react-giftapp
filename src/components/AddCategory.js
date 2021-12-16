import React, {useState} from 'react'
import PropTypes from 'prop-types'


export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setInputValue] = useState('');

    //este handle cambia el estado y agrega una nueva categoria
    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    //este handle sirve para dar enter y que se pueda agregar una categoria tomando en cuenta
    // el setCategories que corresponde a GifExpertApp
    const handleSubmit = (e) => {
        //aca invocamos el e evento
        e.preventDefault();

        //este if es para que elimine los datos en blanco y que deba ser mayor a dos letras
        if(inputValue.trim().length > 2){
            setCategories( cats => [ inputValue, ...cats, ] );
            setInputValue('');
        }
            
    }

    return (
        //aca invocamos el handleSubmit al momento de dar la tecla enter
        <form onSubmit={ handleSubmit }>
            <input
                type='Text'
                value = { inputValue }

                //este handle agrega una nueva categoria 
                onChange={ handleInputChange }
            />
        </form>
    )
}

//aca estamos declarado la propiedad del setCategories que se encuentra en GifExpertApp
AddCategory.prototype = {
    setCategories: PropTypes.func.isRequired
}
