import React, { Component } from 'react';
import { Header } from './modules/Header';
import { Topic } from './modules/Topic';
import { List } from './modules/List';
import './App.scss';


class App extends Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Topic />
                <List />
            </div>
        );
    }
}

export default App;
