import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/SignUp';
import Nav from './components/Nav';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import Login from './components/Login';
import PrivateComponent from './components/PrivateComponent';
import Home from './components/Home';
import UpdateProduct from './components/UpdateProduct';


// <li><Link to='/addproduct'> add products</Link></li>
//                 <li><Link to='/deleteproducts'>delete products</Link></li>
//                 <li><Link to='/login'>login</Link></li>
//                 <li><Link to='/logout'>logout</Link></li>

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>

          <Route element={<PrivateComponent/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/deleteproducts' element={<DeleteProduct/>}/>
          <Route path = '/updateproduct/:id' element={<UpdateProduct/>}/>

          

          </Route>

          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/login' element={<Login/>}/>


        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
