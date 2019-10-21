import React, { Component } from 'react';
import Login from './login';
import Inicio from './inicio';

class Contenedor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vista: 'login',
            nota: '',
        };
        this.miEventoDeTexto = this.miEventoDeTexto.bind(this);
    }

    cambiarInterfaz = (interfaz) => {

        this.setState({
            vista: interfaz,
        });
    };

    miEventoDeTexto = (data) => {
        
        this.setState({
            nota: data, 
        });
    };

    render() {

        const { vista, nota } = this.state;

        if(vista === 'login') {
            return (
                <Login
                    cambiarInterfaz={this.cambiarInterfaz}
                    miOnChangeDeTexto={this.miEventoDeTexto}
                    texto={nota}
                />
            );
        }

        if(vista === 'inicio') {
            const {nota} = this.state
            return (
                <Inicio
                    cambiarInterfaz={this.cambiarInterfaz}
                    campoTexto={nota}
                />
            );
        }
    }
}

export default Contenedor;