import { createStore, bindActionCreators } from "redux"
import { createRoot } from 'react-dom/client';
import { Provider } from "react-redux";
import { App } from "./app";
import { inc, dec, rnd } from "./actions"
import { reducer } from './reducer'

const store = createStore(reducer)

const root = createRoot(document.getElementById('root'))

root.render(
    <Provider store={store}>
        <App />
    </Provider>)