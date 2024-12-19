import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import AppRoutes from './AppRoutes.tsx'

import 'bootstrap/dist/css/bootstrap.css'

const App: React.FC = () => {

    return (
        <BrowserRouter>
            <header>
                <NavMenu />
            </header>

            <main>
                <AppRoutes />
            </main>

            <footer>

            </footer>
        </BrowserRouter>
    );
}

export default App;