import React from 'react';
import './styles.css';
import Menu from '../../componentes/Menu';

class Home extends React.Component{

    state = {
        seguidoresState:[]
    }

    componentDidMount(){
        fetch(`https://api.github.com/users/${this.props.match.params.usuario}/followers`) //acessar a api dos usuarios
        .then(resposta => {return resposta.json() })
        .then(seguidores => this.setState({ seguidoresState: seguidores}));
    }

    render(){
        return(
            <>
                <Menu />
                <div className="containerHome">
                    { this.state.seguidoresState.map(seguidor => (
                        <div className="seguidorContainer">
                            <img src={seguidor.avatar_url} alt={seguidor.login} />
                            <a href={seguidor.html_url}> {seguidor.login} </a>
                        </div>
                    )) }
                </div>
            </>
        );
    }
}

export default Home;