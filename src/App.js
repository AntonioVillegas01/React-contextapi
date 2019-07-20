import React, {Component} from 'react';
import Equipos from './componentes/Equipos'
import LaLigaProvider from './componentes/LaLiga'

class App extends Component {


    render() {
        return (
            <div className="container">
                <LaLigaProvider>
                    <Equipos/>
                </LaLigaProvider>
            </div>
        );
    }
}

export default App;
