
import { screen, render, fireEvent } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';


jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('pruebas en < MultipleCustomHooks/>', () => {
    
    //para evitar errores con useFetch se debe inicializar el MOCK.
    const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
        counter:1,
        increment: mockIncrement
    });

    beforeEach(() => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto ', () => {
        
        useFetch.mockReturnValue({
            data:null,
            isLoading:true,
            hasError:null
        })

        render( <MultipleCustomHooks/>);

        expect( screen.getByText('BreakingBad Quotes') );
        expect( screen.getByText('Loading...') );

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeTruthy();

    });

    test('Debe de mostrar un Quote ', () => {

        useFetch.mockReturnValue({
            data:[ { author:'Amada', quote: 'Hola Mundo'}],
            isLoading:false,
            hasError:null
        })
        render( <MultipleCustomHooks/>);
        expect( screen.getByText('Hola Mundo') ).toBeTruthy();
        expect( screen.getByText('Amada') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect(nextButton.disabled).toBeFalsy();
    });


    test('Debe de llamar la función de incrementar ', () => {

        useFetch.mockReturnValue({
            data:[ { author:'Amada', quote: 'Hola Mundo'}],
            isLoading:false,
            hasError:null
        });

        render( <MultipleCustomHooks/> );
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

    
    
})
