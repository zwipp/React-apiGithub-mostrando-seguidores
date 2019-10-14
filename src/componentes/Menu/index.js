import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaGithub } from 'react-icons/fa';

class Menu extends React.Component{
    render(){
        return(
            <header>
                <Link to="/"> 
                <FaGithub style={ { marginRight: 10 } } />
                iFollow 
                </Link>                
            </header>
        );
    }
}

export default Menu;