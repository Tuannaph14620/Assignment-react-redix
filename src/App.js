import React from 'react';
import './App.css';
import {Routes, Route, Router, Navigate} from 'react-router-dom'
import WebsiteLayout from './components/layouts/WebsiteLayout';
import AdminLayout from './components/layouts/AdminLayout';
import ListCategory from './pages/Admin/Category/list';
import AddCategory from './pages/Admin/Category/AddCategory';
import ProductList from './pages/Admin/Product/ProductList';
import AddProduct from './pages/Admin/Product/AddProduct';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<h1>HomePage</h1>}/>
        </Route>
        <Route path='admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to="dashboard"/>}/>
          <Route path='dashboard' element={<h1>Dashboard</h1>}/>
          <Route path='category'>
            <Route index element={<ListCategory/>}/>
            <Route path='add' element={<AddCategory/>}/>
          </Route>
          <Route path='product'>
            <Route index element={<ProductList/>}/>
            <Route path='add' element={<AddProduct/>}/>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
