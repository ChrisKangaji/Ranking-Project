import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import AppRoutes from './AppRoutes.tsx'

import 'bootstrap/dist/css/bootstrap.css'

const App: React.FC = () => {
    //Use a dynamics value for applying padding to the main content
    //const navMenuRef = useRef<HTMLElement | null>(null);
    //const [paddingTop, setPaddingTop] = useState<number>(0);

    //useEffect(() => {
    //    if (navMenuRef.current) {
    //        // Get the height of the NavMenu and update padding
    //        debugger;
    //        const navHeight = navMenuRef.current.offsetHeight;
    //        setPaddingTop(navHeight);
    //    }
    //}, []);

    return (
        <BrowserRouter>
            <header>
                <NavMenu />
            </header>

            <main style={{ paddingTop: `100px` }}> 
                <AppRoutes />
            </main>

            <footer>

            </footer>
        </BrowserRouter>
    );
}

export default App;