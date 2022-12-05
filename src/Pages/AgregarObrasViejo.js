import React from "react";
import NavBar from "../Components/NavBar";

function AgregarObrasViejo() {
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
        <label for="exampleFormControlFile1">Descripción Auditiva:</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
      </div>

      <div class="form-group">
        <label for="formGroupExampleInput">Nombre:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
      </div>

      <div class="form-group">
        <label for="formGroupExampleInput">Año de creación:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
      </div>

      <div class="form-group">
        <label for="formGroupExampleInput">Autor:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
      </div>

      <div class="form-group">
        <label for="formGroupExampleInput">Tipo/Técnica:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Esta mostrado o guardado?</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Mostrado</option>
          <option>Guardado</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Descripción:</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>

    <button type="button" class="btn btn-primary">Agregar Obra</button>

    <button type="button" class="btn btn-danger">Descartar Obra</button>

  </div>
  )
}

export default AgregarObrasViejo;
