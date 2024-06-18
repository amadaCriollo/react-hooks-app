import { act, fireEvent, renderHook } from "@testing-library/react"
import { useForm } from "../../src/hooks/useForm"

describe('Pruebas en el useForm', () => {

    const initialForm = {
        name:'Amada',
        email:'prueba@gogle.com'
    }

    test('Debe de regresar los valores por defecto', () => {
        const { result } = renderHook(() => useForm( initialForm ) );
        
        expect(result.current).toEqual({
            
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any( Function ),
            onResetForm: expect.any( Function )
            
        });
    });

    test('Debe de cambiar el nombre del formualario ', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm( initialForm ) );
        
        const { onInputChange } = result.current;

        const target = {
            name: 'name',
            value: newValue,
        }


        act(( ) => {
            onInputChange ( {target} );
        })

        expect(result.current.name).toBe( newValue );
        expect(result.current.formState.name).toBe( newValue );
    });

    test('Debe de realizar el reset del formualario ', () => {
        const newValue = 'Juan';
        const { result } = renderHook(() => useForm( initialForm ) );
        
        const { onInputChange, onResetForm } = result.current;

        const target = {
            name: 'name',
            value: newValue,
        }


        act(( ) => {
            onInputChange ( {target} );
            onResetForm();
        })

        expect(result.current.name).toBe( initialForm.name );
        expect(result.current.formState.name).toBe( initialForm.name );
    })
    
    
})
