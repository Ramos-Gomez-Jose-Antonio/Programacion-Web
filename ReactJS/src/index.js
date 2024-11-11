/*//importar las librerias de React
    import React from 'react';
    import ReactDOM from 'react-dom/client';

    const saludo = <h1>Hola Mundo</h1>;
    const root = ReactDOM.createRoot(document.getElementById('root'));

    //renderizar, mandarlo al dom 
    root.render(saludo);
*/
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    import App from './app';

    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<App />);
//npm start