import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'  // Global styles for your application
import { routes } from './pages/Routes';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';


const Main = () => {
    return (
        <React.StrictMode>

            <RouterProvider router={routes}/>

        </React.StrictMode>
    );
}

// Render the Main component into the root DOM element.
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
