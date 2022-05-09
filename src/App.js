import logo from './logo.svg';
import './App.css';
// import TaskListComponent from './components/container/task_list'

// import Ejemplo1 from './hooks/Ejemplo1';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';

// Se importan componentes basados en clases
//import Saludo from "./components/pure/saludo";

// Se importan componentes basados en funciones
// import Saludo from "./components/pure/saludoF";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* Componente propio Saludos.jsx */}
        {/* <Saludo name="Daniel" /> */}
        
        {/* <TaskListComponent></TaskListComponent> */}


        {/* ejemplos de uso de hooks */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}

        {/* Ejemplo de Componente e hijos con navegación de datos por contexto */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}

        {/* <Ejemplo4 nombre="Daniel">
          {/* Tolo lo que hay aquí, es tratado como props.children * /}
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}

      </header>
    </div>
  );
}

export default App;
