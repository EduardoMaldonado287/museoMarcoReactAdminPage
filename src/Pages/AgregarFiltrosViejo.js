import React from "react";
import NavBar from "../Components/NavBar";


function AgregarFiltrosViejo() {
  return (
  <div>
    <NavBar/> 
    <form>
      <div class="form-group">
        <label for="exampleFormControlFile1">Imagen:</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/> 
      </div>

      <div class="form-group">
        <label for="exampleFormControlFile1">Modelo 3D:</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
      </div>

      <div class="form-group">
        <label for="formGroupExampleInput">Nombre:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
      </div>
    </form>

    <button type="button" class="btn btn-primary">Agregar Filtro</button>

    <button type="button" class="btn btn-danger">Descartar Filtro</button>

  </div>
  )
}

export default AgregarFiltrosViejo;
