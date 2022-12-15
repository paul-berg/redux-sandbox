import { createStore, bindActionCreators } from "redux"
import {createRoot} from 'react-dom/client';
import { Counter } from "./components/counter"
import { inc, dec, rnd } from "./actions"
import { reducer } from './reducer'

const store = createStore(reducer)

const {dispatch} = store
const { incDispatch, decDispatch, rndDispatch } = bindActionCreators({
    incDispatch: inc,
    decDispatch: dec,
    rndDispatch: rnd
}, dispatch)
// const bindActionCreator = (creator, dispatch) => (...args) => {
//     console.log(...args);
//     dispatch(creator(...args))
// } 

const root = createRoot(document.getElementById('root'))
const update = () => {
    root.render(<Counter
        counter={store.getState()}
        inc={incDispatch}
        dec={decDispatch}
        rnd={() => {
            const value = Math.floor(Math.random() * 10)
            rndDispatch(value)
        }}
    />)
}

update()
store.subscribe(update)