/**
 * Este es un ejemplo de un control de react basado en clases
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Saludo extends Component {

    constructor(props) {
        // Información que se pasará por atributos
        super(props);
        // Información privada del componente
        this.state = {
            age: 29
        };
    }

    render() {
        return (
            <div>
                {/* Paso de propiedades desde un elemento superior */}
                <h1>
                    ¡HOLA {this.props.name}!
                </h1>
                {/* Link del valor interno */}
                <h2>
                    Tu edad es de: {this.state.age}
                </h2>
                {/* Llamado a una función */}
                <div>
                    <button onClick={this.birthday}>
                        Cumplir Años
                    </button>
                </div>
            </div>
        );
    }

    // Creación de un funcion cualquiera
    birthday = () => {
        // Actualizar estado privado
        this.setState((prevState) => (
            {
                age: prevState.age + 1 
            }
        ));
    }
}

// Establecer el tipado de las variables que vienen por propiedades
Saludo.propTypes = {
    name: PropTypes.string,
};

// Exportar componente React
export default Saludo;
