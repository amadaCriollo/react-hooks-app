
const initialState = [ {
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
} ];

const todoReducer = ( state = initialState, action = {} ) => {

    if ( action.type === '[TODO] ADD todo' ) {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del Alma2',
    done: false,
}

const addTodoAction = {
    type: '[TODO] ADD todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoAction);

// console.log( {state: todos} );