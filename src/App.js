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
import ProductPage from './pages/Client/ProductPage';
import SlidebarProduct from './components/SlidebarProduct';
import PrivateRouter from './components/PrivateRouter';
import ListUser from './pages/Admin/User/ListUser';
import DetailProductPage from './pages/Client/DetailProductPage';
import ListNew from './pages/Admin/New/ListNew';
import AddNew from './pages/Admin/New/AddNew';
import EditNew from './pages/Admin/New/ListNew';
import CartPage from './pages/Client/cart/CartPage';
import ListAllNew from './pages/Client/post/ListAllNew';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<WebsiteLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='product'>
            <Route index  element={<ProductPage/>}/>
            <Route path=':id/:cate' element={<DetailProductPage/>} />
          </Route>
          <Route path='pro' element={<SlidebarProduct/>}/>
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='cart' element={<CartPage/>} />
          <Route path='new' element={<ListAllNew/>} />
        </Route>
        <Route path='admin' element={<PrivateRouter><AdminLayout/></PrivateRouter>  }>
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
          <Route path='user'>
            <Route index element={<ListUser/>}/>
            <Route path='add' element={<AddProduct/>}/>
            <Route path=':id/edit' element={<EditProduct/>}/>
          </Route>
          <Route path='new'>
            <Route index element={<ListNew/>}/>
            <Route path='add' element={<AddNew/>}/>
            <Route path=':id/edit' element={<EditNew/>}/>
          </Route>
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
