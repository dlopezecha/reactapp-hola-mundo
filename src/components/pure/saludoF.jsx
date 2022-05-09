/**
 * Este es un ejemplo de un control de react basado en funciones
 */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SaludoF = (props) => {
    
    // Breve introducción a la función useState
    // const [variable, método para actualizarlo] = useState(valor inicial)
    const [age, setAge] = useState(29);
    const birthday = () => {
        // Acttualizar el state
        setAge(age + 1);
    };

    // Datos que devolverá el componente a la vista que lo llame
    return (
        <div>
            <h1>
                ¡HOLA {props.name} desde componente funcional!
            </h1>
            <h2>
                Tu edad es de: {age}
            </h2>
            <div>
                <button onClick={birthday}>
                    Cumplir Años
                </button>
            </div>
        </div>
    );
};

// Predefinir tipos de datos a las propiedades que usará internamente
SaludoF.propTypes = {
    name: PropTypes.string,
};

export default SaludoF;
