
import { Routes, Route } from 'react-router-dom';
import CreateCount from '../components/forms/CreateCount';
import Home from '../components/home/home';
import Error from '../components/404Error/Error';

function RouterLogin() {
    return (
        <Routes>
        <Route path="/register" element={<CreateCount />} />
        <Route  path="/" element={<Home />} />
        <Route    path='*' element={<Error />}/>
      </Routes>
    );
    
}
export default RouterLogin;