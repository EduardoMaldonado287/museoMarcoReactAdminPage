import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "./NavBar";


const AgregarObrasRA = () => {
  const [title, setTitle] = useState(""); // title 
  const [author, setAuthor] = useState(""); // title 
  const [creationYear, setCreationYear] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [isInExhibition, setIsInExhibition] = useState("");

  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileName2, setFileName2] = useState("");
  const [fileName3, setFileName3] = useState("");



  const routeAPI = "http://localhost:3005/obrasRA"

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    setFileName2(e.target.files[0]);
    setFileName3(e.target.files[0]);
  };



  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title)
    formData.append("author", author);
    formData.append("creationYear", creationYear);
    formData.append("description", description);
    formData.append("type", type);
    formData.append("isInExhibition", isInExhibition);
    formData.append("imageName", fileName);
    formData.append("model3dName", fileName2);
    formData.append("audioDescriptionName", fileName3);

    setTitle("");
    setAuthor("");
    setCreationYear("");
    setDescription("");
    setType("");
    setIsInExhibition("0");
    axios
      .post(routeAPI, formData)
      .then((res) => setMessage(res.data))
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <NavBar/>

    <AddArticleContainer>
      <div className="container">
        <h1>Agregar Obra-RA</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
            <label htmlFor="title"> Título de la obra </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Ej. El espejo perfecto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author"> Nombre del autor </label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder="Ej. Alfredo Ceibal"
            />
          </div>
          <div className="form-group">
            <label htmlFor="creationYear">Año de Creación</label>
            <input
              type="text"
              name="creationYear"
              value={creationYear}
              onChange={(e) => setCreationYear(e.target.value)}
              className="form-control"
              placeholder="Ej. 1994"
            />
          </div>
          <div className="form-group">
            <label htmlFor="descripción">Descripción</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="form-control"
              rows="2"
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="type">Tipo/Técnica</label>
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="form-control"
              placeholder="Acrílico sobre lino"
            />
          </div>

        <div class="form-group">
        <label htmlFor="isInExhibition">Esta mostrado o guardado?</label>
        <select className="form-control" id="isInExhibition"
            onChange={(e) => setIsInExhibition(e.target.value)}>
          <option value={1}> Mostrado </option>
          <option value={0}> Guardado </option>
        </select>
        </div>

          <div className="form-group">
            <label htmlFor="file"> Ingrese la imagen</label>
            <input
              type="file"
              filename="imageName"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <div className="form-group">
            <label htmlFor="file"> Ingrese el modelo 3D</label>
            <input
              type="file"
              filename="model3dName"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <div className="form-group">
            <label htmlFor="file"> Ingrese la descripción auditiva de la obra</label>
            <input
              type="file"
              filename="audioDescriptionName"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Agregar Obra-RA
          </button>
        </form>
      </div>
    </AddArticleContainer>
    </>
  );
};

export default AgregarObrasRA;

//MAIN CONTAINER
const AddArticleContainer = styled.div`
  margin: auto;
  padding: 0.5rem;
  width: 30rem;

  h1 {
    font-weight:650;
    color: var(--dark-green);
  }

  .btn-primary {
    width: 20rem;
    padding: 10px;
    margin: 20px;
    background: #EB199F;
    color: #fff;
    outline: none;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
    &:hover {
    background: transparent;
  	border: 2px solid #6cafa4;
  	color: #6cafa4;    }
  }

  .message {
    font-weight: 900;
    color: #EB199F;
    padding: 1rem 1rem 1rem 0;
  }
`;

