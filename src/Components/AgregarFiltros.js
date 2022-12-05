import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "../Components/NavBar";


const AddFilter = () => {
  const [filterName, setfilterName] = useState(""); // filterName 
  const [isActive, setIsActive] = useState(""); // filterName 

  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileName2, setFileName2] = useState("");


  const routeAPI = "http://localhost:3005/filtros"

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
    setFileName2(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("filterName", filterName)
    formData.append("isActive", isActive)
    formData.append("imageName", fileName)
    formData.append("otherFile", fileName2)

    setIsActive("0");
    setfilterName("");
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
        <h1>Agregar Filtro</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
            <label htmlFor="filterName"> Nombre del Filtro </label>
            <input
              type="text"
              value={filterName}
              onChange={(e) => setfilterName(e.target.value)}
              className="form-control"
              placeholder="Ej. Filtro de espejo"
            />
          </div>

        <div class="form-group">
        <label htmlFor="isActive"> ¿Está activo el filtro?</label>
        <select className="form-control" id="isActive"
            onChange={(e) => setIsActive(e.target.value)}>
          <option value={1}> Activo </option>
          <option value={0}> No activo </option>
        </select>
        </div>

          <div className="form-group">
            <label htmlFor="file"> Ingrese la imagen del Filtro</label>
            <input
              type="file"
              filename="imageName"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <div className="form-group">
            <label htmlFor="file"> Ingrese el archivo del Filtro</label>
            <input
              type="file"
              filename="otherFile"
              className="form-control-file"
              onChange={onChangeFile}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Agregar Filtro
          </button>
        </form>
      </div>
    </AddArticleContainer>
    </>
  );
};

export default AddFilter;

//MAIN CONTAINER
const AddArticleContainer = styled.div`
  margin: auto;
  padding: 3rem;
  width: 30rem;

  h1 {
    font-weight: 900;
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

