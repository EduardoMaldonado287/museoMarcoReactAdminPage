import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import NavBar from "./NavBar";


const AgregarObrasPasadas = () => {
  const [title, setTitle] = useState(""); // title 
  const [author, setAuthor] = useState(""); // title 
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const [message, setMessage] = useState("");
  const [fileName, setFileName] = useState("");

  const routeAPI = "http://localhost:3005/obrasGuardadas"

  const onChangeFile = (e) => {
    setFileName(e.target.files[0]);
  };

  const changeOnClick = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title)
    formData.append("author", author);
    formData.append("description", description);
    formData.append("url", url);
    formData.append("imageName", fileName);

    setTitle("");
    setAuthor("");
    setDescription("");
    setUrl("");
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
        <h1>Agregar Obras Pasadas</h1>
        <span className="message">{message}</span>
        <form onSubmit={changeOnClick} encType="multipart/form-data">
        <div className="form-group">
            <label htmlFor="title"> Título de la obra </label>
            <input
              url="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Ej. El espejo perfecto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="author"> Nombre del autor </label>
            <input
              url="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="form-control"
              placeholder="Ej. Alfredo Ceibal"
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
            <label htmlFor="url"> URL</label>
            <input
              url="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="form-control"
              placeholder="https://obramuseomarco.com/"
            />
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

          <button url="submit" className="btn btn-primary">
            Agregar Obra Pasada
          </button>
        </form>
      </div>
    </AddArticleContainer>
    </>
  );
};

export default AgregarObrasPasadas;

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

