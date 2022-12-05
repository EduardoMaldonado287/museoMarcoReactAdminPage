import React from "react";
import {Routes, Route, useNavigate} from "react-router-dom";
import NavBar from "../Components/NavBar";
import "./styles.css"
import AgregarObrasPasadas from "../Components/AgregarObrasPasadas";

function ObrasRA() {
  const navigate = useNavigate();

  const navAgregarObra = () => {
    navigate('/AgregarObrasPasadas');
  }

  return(
    <div>
      <NavBar/>
      <div className="boton">
        <button className="mostrados">Obras Mostradas</button>
        <button className="mostrados">Obras Guardadas</button>
      </div>
      <div className="boton">
        <button className="botonAgregar" onClick={navAgregarObra}>
          Agregar Obras
        </button>
      </div>

      <Routes>
        <Route path="/AgregarObrasPasadas" element={<AgregarObrasPasadas />} />
      </Routes>
    </div>
  )

}

export default ObrasRA;
