import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Nav from './components/Nav';

import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';

import App2 from './App2';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/app' element={<App2/>}/>
       

          </Route>

          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
