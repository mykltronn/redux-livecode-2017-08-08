import React, {Component} from 'react';
import 'shoelace-css/dist/shoelace.css';
import './App.css';

import {Provider} from 'react-redux'
import {createStore} from 'redux'
import reducer from './reducer'

import ItemList from "./containers/ItemList";
import Cart from "./containers/Cart";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div className="App">
                    <ItemList/>
                    <Cart />
                </div>
            </Provider>
        );
    }
}

export default App;
