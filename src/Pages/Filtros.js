import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar";
import AgregarFiltros from "./AgregarFiltrosViejo";
import "./styles.css"


function Filtros() {
  const navigate = useNavigate();

  const navAgregarFiltro = () => {
    navigate('/AgregarFiltros');
  }

  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button className="botonAgregar" onClick={navAgregarFiltro}>
          Agregar Filtros
        </button>
      </div>

      <Routes>
        <Route path="/AgregarFiltros" element={<AgregarFiltros />} />
      </Routes>
    </div>
  )

}

export default Filtros;
