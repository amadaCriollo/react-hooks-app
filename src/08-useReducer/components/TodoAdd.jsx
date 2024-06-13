import { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ onNewTodo }) => {

    const { formState, onInputChange, onResetForm, description } = useForm({
        description: ''
    }) 

    // const [inputValue, setInputValue] = useState('');

    // const inputValueChange = ({ target }) => {
    //     setInputValue( target.value );
    // }

    const onSubmit = ( event ) =>{
        event.preventDefault();

        if( description.length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description
        }

        onNewTodo( newTodo );
        onResetForm();
    }


  return (
    <>
        <form onSubmit={ onSubmit }>
            <input 
                type='text'
                className='form-control'
                placeholder='Qué hay que hacer'
                name='description'
                value={ description }
                onChange={ onInputChange }
            />

            <button 
                type='submit'
                className='btn btn-outline-primary mt-1'
                
            >
                Agregar
            </button>
        </form>
    </>
  )
}

TodoAdd.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
}
