import React, {Component} from 'react';

//Crear el Context para acceder
//a funciones y metodos
const LaLigaContext = React.createContext();
export{LaLigaContext};

class LaLigaProvider extends Component {

    state = {
        equipos: [
            {
                nombre: 'Real Madrid',
                titulos: 35
            },
            {
                nombre: 'Barcelona',
                titulos: 25
            },
            {
                nombre: 'Atletico de Madrid',
                titulos: 10
            }
        ]
    };


    render() {
        return (
            <LaLigaContext.Provider value={{
                    state:this.state.equipos,
                    esCampeon:(id) =>{
                        const equipos = [...this.state.equipos];
                        equipos[id].titulos = equipos[id].titulos + 1;
                     //   console.log(equipos[id])
                        this.setState({
                            state : equipos
                        })

                    }
                }}>
                {this.props.children}
            </LaLigaContext.Provider>
        );
    }
}

export default LaLigaProvider;
