import React from 'react'
import { NavLink } from 'react-router-dom'

const SlidebarAdmin = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/admin">
            <i className="mdi mdi-grid-large menu-icon" />
            <span className="menu-title">Dashboard</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" data-bs-toggle="collapse" to="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
            <i className="menu-icon mdi mdi-floor-plan"/>
            <span className="menu-title">Sản phẩm</span>
            <i className="menu-arrow" /> 
          </NavLink>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <NavLink className="nav-link" to="/admin/product/add">Thêm sản phẩm</NavLink></li>
            </ul>
          </div>
          <div className="collapse" id="ui-basic">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <NavLink className="nav-link" to="/admin/product">Danh sách sản phẩm</NavLink></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" data-bs-toggle="collapse" to="#form-elements" aria-expanded="false" aria-controls="form-elements">
            <i className="menu-icon mdi mdi-card-text-outline" />
            <span className="menu-title">Tài khoản</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="collapse" id="form-elements">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"><NavLink className="nav-link" to="pages/forms/basic_elements.html">Thêm tài khoản</NavLink></li>
            </ul>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" data-bs-toggle="collapse" to="#charts" aria-expanded="false" aria-controls="charts">
            <i className="menu-icon mdi mdi-chart-line" />
            <span className="menu-title">Danh mục sản phẩm</span>
            <i className="menu-arrow" />
          </NavLink>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <NavLink className="nav-link" to="/admin/category">Danh sách danh mục</NavLink></li>
            </ul>
          </div>
          <div className="collapse" id="charts">
            <ul className="nav flex-column sub-menu">
              <li className="nav-item"> <NavLink className="nav-link" to="/admin/category/add">Thêm danh mục</NavLink></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>

  )
}

export default SlidebarAdmin