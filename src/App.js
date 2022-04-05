import React from 'react';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import WebsiteLayout from './components/layouts/WebsiteLayout';
import AdminLayout from './components/layouts/AdminLayout';
import ListCategory from './pages/Admin/Category/list';
import AddCategory from './pages/Admin/Category/AddCategory';
import ProductList from './pages/Admin/Product/ProductList';
import AddProduct from './pages/Admin/Product/AddProduct';
import EditProduct from './pages/Admin/Product/EditProduct';
import EditCategory from './pages/Admin/Category/EditCategory';
import SignIn from './pages/Client/auth/SignIn';
import SignUp from './pages/Client/auth/SignUp';
import HomePage from './pages/Client/HomePage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />

        </Route>
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard"/>}/>
          <Route path='dashboard' element={<h1>Dashboard</h1>}/>
          <Route path='category'>
            <Route index element={<ListCategory/>}/>
            <Route path='add' element={<AddCategory/>}/>
            <Route path=':id/edit' element={<EditCategory/>}/>
          </Route>
          <Route path='product'>
            <Route index element={<ProductList/>}/>
            <Route path='add' element={<AddProduct/>}/>
            <Route path=':id/edit' element={<EditProduct/>}/>
          </Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
