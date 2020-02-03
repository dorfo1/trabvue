import React from 'react';
import MyButton from '../../components/MyButton/MyButton';
import './styles.css';
import logo from '../../logo.svg';


export default class MyPage extends React.Component {

    state = {
        numberClicks: 0
    }

    setNumberClicks = () => {
        this.setState({ numberClicks: this.state.numberClicks + 1 })
    }


    render() {
        return (
            <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Minha página React</h1>
                <MyButton onClick={this.setNumberClicks} />
                <h5>Botão customizado foi clickado {this.state.numberClicks} vezes</h5>
            </div>
        );
    }
}