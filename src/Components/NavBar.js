import React from 'react'
import "./NavBar.css"
import {Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
      {/* NAVIGATION MENU */}
      <ul className="nav-links">
        <div className="menu">
          {/*LOGO*/}
          <img src='/Marco-Titulo-blanco.png' alt='logo' />
        {/*NAVIGATION MENUS*/}
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-symbols-outlined">admin_panel_settings</i> Admin
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-symbols-outlined">group</i> Usuarios
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-symbols-outlined">info</i> Guias
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-symbols-outlined">calendar_month</i> Reservaciones
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-symbols-outlined">sprint</i> Actividades
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/AgregarObrasPasadas">
                <i className="material-symbols-outlined">slideshow</i> ObrasPasadas
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/ObrasRA">
                <i className="material-symbols-outlined">smartphone</i> ObrasRA
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/Filtros">
                <i className="material-symbols-outlined">photo_camera</i> Filtros
              </Link>
          </li>
          <li className="nav-item">
              <Link className="nav-link" to="/">
                <i className="material-symbols-outlined">logout</i> Logout
              </Link>
          </li>
        </div>
      </ul>
      </nav>
    </div>
  )
}

export default NavBar