import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Books from './containers/Books/Books';
import AddForm from './containers/AddForm/AddForm';
import Welcome from './components/Welcome/Welcome';
import Toolbar from './components/Toolbar/Toolbar';
import Logo from './components/Logo/Logo';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Toolbar />
                <Logo />
                <Route exact path = "/" component = {Welcome} />
                <Route path = "/books" component = {Books} />
                <Route path  = "/add-review" component = {AddForm} />
            </div>
        </BrowserRouter>
    );
}

export default App;
