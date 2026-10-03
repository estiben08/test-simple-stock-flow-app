import React from 'react'
import ReactDOM from 'react-dom/client'

const App = () => {
    return (
        <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1>Simple Stock Flow</h1>
            <p>Este es el punto de entrada de la SPA.</p>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
                <h2>Catálogo (HU-01)</h2>
                <button>Cargar Productos</button>
            </div>
            <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
                <h2>Registrar Venta (HU-04)</h2>
                <button>Nueva Venta</button>
            </div>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
