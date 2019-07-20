import React, {Component} from 'react';
import {LaLigaContext} from "./LaLiga";

class Equipo extends Component {
    render() {
        return (
            <LaLigaContext.Consumer>
                {(context) => {
                    return Object.keys(context.state).map(idEquipo => {
                        return (
                                <li className="list-group-item d-flex justify-content-between
                            align-items-center" key={idEquipo}>
                                    <p className="m-0">
                                        {context.state[idEquipo].nombre}

                                        <span className="ml-4 badge badge-danger">
                                    {context.state[idEquipo].titulos}
                                    </span>
                                    </p>
                                    <button className="btn btn-success" type="button"
                                            onClick={()=>{
                                                context.esCampeon(idEquipo)
                                            }}>
                                        Es Campeón
                                    </button>
                                </li>
                        )
                    })
                }}
            </LaLigaContext.Consumer>
        );
    }
}

export default Equipo;
