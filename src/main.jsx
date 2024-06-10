import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterWidthCustomHook } from './01-useState/CounterWidthCustomHook'
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Memorize } from './06-memos/Memorize'
// import { MemoHook } from './06-memos/MemoHook'
// import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Padre />
  // </React.StrictMode>,
)
