import React from 'react';
import './styles.css';
import { FaGithub } from 'react-icons/fa';

class Login extends React.Component{

    state ={
        usuario: ''
    }

    manipularInput = (evt) => {
        this.setState({usuario: evt.target.value}); //armazenar oque eu digito no input 
    }

    manipularForm = (evt) =>{
        evt.preventDefault();
        this.props.history.push(`/seguidores/${this.state.usuario}`);
    }

    render(){
        return (
            <div className='container'>
                <FaGithub className='logo'/>
                <h1>iFollow</h1>
                <form onSubmit={this.manipularForm} >
                    <input onInput={this.manipularInput} type="text" placeholder="digite seu usuario do github"/>
                    <button>Entrar</button>
                </form>
            </div>
        );
    }
}

export default Login;