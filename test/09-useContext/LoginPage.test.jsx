import { fireEvent, render, screen } from '@testing-library/react';
import { UserContext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en el componente <LoginPage />', () => {
    
    const user = {
       id: 123, 
       name: 'AmadaC', 
       email: 'prueba@gmail.com'
    };

    test('Debe de mostrar el componente sin el usuario', () => {
        
        render(
            <UserContext.Provider value ={{ user : null }}>
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect(preTag.innerHTML).toContain( 'null' );

    });

    test('Debe de llamar el setUser cuando se hace click en el boton', () => {
       
        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value ={{ user : user, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );

        screen.debug();

        const button = screen.getByRole('button');

        fireEvent.click( button );
        expect( setUserMock ).toHaveBeenCalled();
        expect( setUserMock ).toHaveBeenCalledWith( user )

    })
    
    
})
