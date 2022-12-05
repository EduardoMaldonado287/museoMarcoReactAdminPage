import "./App.css";
// import React, { useEffect } from "react";
import AgregarObrasViejo from "./Pages/AgregarObrasViejo.js";
import ObrasRA from "./Pages/ObrasRA.js";
import Filtros from "./Pages/Filtros.js";
import AgregarFiltrosViejo from "./Pages/AgregarFiltrosViejo.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AgregarFiltros from "./Components/AgregarFiltros"
import AgregarObrasRA from "./Components/AgregarObrasRA";
import AgregarObrasPasadas from "./Components/AgregarObrasPasadas";


function App() {
  return (
    <div>
    {/* <CreditCard /> */}
     <Router>
        <Routes>
          <Route path="/ObrasRA" element={<ObrasRA />} />
          <Route path="/Filtros" element={<Filtros />} />
          <Route path="/AgregarFiltrosViejo" element={<AgregarFiltrosViejo />} />
          <Route path="/AgregarObrasRA" element={<AgregarObrasRA />} />
          <Route path="/AgregarObrasPasadas" element={<AgregarObrasPasadas />} />
          <Route path="/viejo" element={<AgregarObrasViejo />} />
          <Route path="/agregarFiltros" element={<AgregarFiltros />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
