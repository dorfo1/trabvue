import React from 'react';
import './styles.css';



//componente customizado
const MyButton = (props) => {
    return (
        <button className="myButton" onClick={props.onClick}>Meu Componente de botão</button>
    );
}

export default MyButton