import { render, screen } from '@testing-library/react'
import { TodoApp } from '../../src/08-useReducer/TodoApp'
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos');


describe('Pruebas en componente <TodoApp />', () => {
    
    
    useTodos.mockReturnValue({
        todos: [
            {id:1, description:'Todo 1', done:false },
            {id:2, description:'Todo 2', done:true },
        ], 
        todosCount: 2,  
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleRemoveTodo: jest.fn(), 
        handleToggleTodo: jest.fn(),
    });

    //const todoAdd = 

    test('Debe de mostrar el componente correctamente ', () => {
        render( <TodoApp /> );
        expect(screen.getByText('Todo 1')).toBeTruthy();
        expect(screen.getByText('Todo 2')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();
        
    });
    
})
