import Login from '../components/forms/login';
import { Routes, Route } from 'react-router-dom';
import CreateCount from '../components/forms/CreateCount';

function RouterLogin() {
    return (
        <Routes>
        <Route  path="/register" element={<CreateCount />} />
        <Route   path="/login" element={<Login />} />
      </Routes>
    );
    
}
export default RouterLogin;