import React from 'react';
import { useHistory } from 'react-router-dom'
import '../../styles/Register.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateCount = () => {
    const history = useHistory();
    const navigateTo = (path) => {
        history.push(path);
    }

    return (
        <div className="Registro">
            <h2 className='title'>Registrarte </h2>
            <h6 className='subtitle'>Es rápido y fácil.</h6>
            <form>
                <div className='DatosP'>
                    <input
                        type='text'
                        placeholder='Nombre'
                        className="form-control"
                    />
                    <input
                        type='text'
                        placeholder='Apellido'
                        className="form-control"
                    />
                </div>
                <div className='Datos'>
                <select className="form-select" aria-label="Default select example">
                        <option selected>Selecciona tu Sexo</option>
                        <option value="1">Mujer</option>
                        <option value="2">Hombre</option>
                        <option value="3">Otro</option>
                    </select>
                    <input
                        type='text'
                        placeholder='Correo electrónico'
                        className="form-control"
                    />
                    <input
                        type='text'
                        placeholder='Contraseña'
                        className="form-control"
                    />
                    <input
                        type='text'
                        placeholder='Confirme Contraseña'
                        className="form-control"
                    />
                </div>
            </form>
            <div className='btn'>
                <button className='btnRegistar'>Registrase</button>
                <br></br>
                <button className='btnVolver' onClick={() => navigateTo('/login')}> Volver </button>
            </div>

        </div>
    );
}

export default CreateCount;
