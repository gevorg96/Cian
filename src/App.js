import React, { Component } from 'react';
import { Header } from './modules/Header';
import { Topic } from './modules/Topic';
import { List } from './modules/List';
import { Modal } from './widgets/Modal'
import { Button} from "./ui/Button";
import './App.scss';
import {Description} from "./ui/Description";


class App extends Component {
    state = {
        isModalOpen: false
    };

    onButtonClick = isModalOpen => {
        this.setState({isModalOpen})
    }

    render() {
        const {isModalOpen} = this.state;
        return (
            <div className="app">
                <Header onButtonClick={this.onButtonClick}/>
                <Topic />
                <List />
                <Modal isModalOpen={isModalOpen} onButtonClick={this.onButtonClick}>
                    <h2>Modal Item</h2>
                    <Description>Modal Description</Description>
                    <Button>Modal Button</Button>
                </Modal>
            </div>
        );
    }
}

export default App;
