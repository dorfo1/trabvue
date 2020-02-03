import React from 'react';
import UserItem from '../../components/UserItem/UserItem';
import axios from 'axios';

class ApiPage extends React.Component {

    state = {
        users: []
    }

    async componentDidMount() {
        try {
            let response = await axios.get("https://jsonplaceholder.typicode.com/users")
            this.setState({ users: response.data })
        } catch (error) {
            alert("Falha ao bucar usuários");
        }
    }

    renderUserList = () => {
        return (
            <div>
                {this.state.users.map(user => <UserItem user={user} />)}
            </div>
        );
    }

    showLoadingState = () => {
        return (
            <div>
                <h2>Carregando...</h2>
            </div>
        );

    }


    render() {
        if (this.state.users.lenght === 0) {
            return this.showLoadingState()
        } else {
            return this.renderUserList()
        }
    }
}


export default ApiPage;