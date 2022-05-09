/**
 * ejemplo de uso de hook use State
 * 
 * Crear un componente de tipo función y acceder a su estado privado a travez de un hook y poder modificarlo
 */
import React, { useState } from 'react';

const Ejemplo1 = () => {

    //Valor inicial para un contador
    const valorInicial = 0;

    //Valor inicial para una persona
    const personaInicial = {
        nombre: "Daniel",
        email: "daniel@live.com"
    };

    /**
     * Queremos que el VALORINICIAL y PERSONAINIAL sean
     * parte del estado del componente para asi poder gestionar su cambio
     * y que este se vea reflejado en la vista del componente.
     * 
     * const [nombraVariable, funcionParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    function incrementarContador() {
        // ? FunciónParaCambiar(neuvoValor)
        setContador(contador + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente
     */
    function actualizarPersona() {
        setPersona({
            nombre: "Diego",
            email: "diego@live.com"
        });
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador {contador}</h2>
            <h2>DATOS DE LA PERSONA</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementarContador}>Incrementar Contador</button>
                <button onClick={actualizarPersona}>actualizar Persona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;

