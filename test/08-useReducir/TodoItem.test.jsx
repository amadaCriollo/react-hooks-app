import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/components/TodoItem';

describe('Pruebas en <TodoItem />', () => {
    
    const todo = {
        id:1,
        description:'Piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el componente en Todo pendiente de completar ', () => {
       
        render( <TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock }  
                    onToggleTodo={ onToggleTodoMock} /> )

         const liElement = screen.getByRole('listitem');       
         expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
         
        const spanElement = screen.getByLabelText('span');
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');

    });

    test('Debe de mostrar el Todo completado ', () => {
        todo.done = true;
        
        render( <TodoItem 
                    todo={ todo } 
                    onDeleteTodo={ onDeleteTodoMock }  
                    onToggleTodo={ onToggleTodoMock} /> )

         const liElement = screen.getByRole('listitem');       
         expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
         
        const spanElement = screen.getByLabelText('span');
      //  expect(spanElement.className).not.toContain('align-self-center');
        expect(spanElement.className).toContain('text-decoration-line-through');

    });

    test('span debe de llamar el ToggleTodo cuando se hace click', () => {
        
        render( <TodoItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock }  
            onToggleTodo={ onToggleTodoMock} /> )

            const spanElement = screen.getByLabelText('span');
            fireEvent.click( spanElement );

            expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id );
    });

    test('span debe de llamar el deleteTodo cuando se hace click', () => {
        
        render( <TodoItem 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodoMock }  
            onToggleTodo={ onToggleTodoMock} /> )

            const button = screen.getByLabelText('btnDelete');
            fireEvent.click( button );

            expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id );
    });
    
    
})
