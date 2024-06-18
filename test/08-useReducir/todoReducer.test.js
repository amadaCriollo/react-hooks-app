import { screen } from "@testing-library/react";
import { todoReducer } from "../../src/08-useReducer/todoReducer"

describe('Pruebas en todoReducir', () => {
    
    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false,
    }]

    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {} )
        expect( newState ).toBe( initialState );

    });

    test('debe de agregar un Todo ', () => {
      const action = {
        type: '[TODO] Add Todo',
        payload: {
            id: 2,
            description: 'Nuevo Todo #2'
        }
      }

      const newState = todoReducer( initialState, action )
      expect( newState.length ).toBe( 2 );
      expect( newState).toContain( action.payload );

    });

    test('Debe de eliminar un Todo', () => {

       const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

       const state = todoReducer( initialState, action );
        expect( state.length ).toBe( 0 );
    
    });

    test('Debe de realizar el toggle del todo ', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBeTruthy();

        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBeFalsy();
         
    });
    
    
})
