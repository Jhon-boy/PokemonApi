import React from 'react';
import {useHistory} from 'react-router-dom'

const CreateCount = () => {
    const history = useHistory();
    const navigateTo= (path) =>{
        history.push(path);
    }

    return (
        <div>
            <h1>FORMULARIO </h1>
            <button   onClick={() => navigateTo('/login')}> GO TO Register </button>
        </div>
    );
}

export default CreateCount;
