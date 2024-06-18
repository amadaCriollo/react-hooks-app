import { render, screen } from '@testing-library/react';
import { MainApp } from '../../src/09-useContext/MainApp';
import { MemoryRouter } from 'react-router-dom';

describe('Preuabs en el componente <MainApp />', () => {
    
    test('Debe de mostrar el HomePage', () => {
        
        render( 
            <MemoryRouter>
                <MainApp /> 
            </MemoryRouter>

        );

        screen.debug();
        expect(screen.getByText('HomePage')).toBeTruthy();
    });

    test('Debe de mostrar el LoginPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/login']}>
                <MainApp /> 
            </MemoryRouter>

        );

        screen.debug();
        expect(screen.getByText('LoginPage')).toBeTruthy();
    });
    
    test('Debe de mostrar el aboutPage', () => {
        
        render( 
            <MemoryRouter initialEntries={['/about']}>
                <MainApp /> 
            </MemoryRouter>

        );

        screen.debug();
        expect(screen.getByText('AboutPage')).toBeTruthy();
    });
    
})
