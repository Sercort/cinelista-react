import React, { useState } from "react";
import peliculas from "./data/peliculas";
import ListaPeliculas from "./components/LIstaPeliculas";
import FiltroClasificacion from "./components/FiltroClasificacion";

function App() {
  const [filtroClasificacion, setFiltroClasificacion] = useState("Todas");
  const [busqueda, setBusqueda] = useState("");

  // Función para normalizar y validar el texto de búsqueda
  const normalizarBusqueda = (texto) => {
    return texto.trim().slice(0, 50).toLowerCase(); // Recorta espacios, limita a 50 caracteres y convierte a minúsculas
  };

  // Filtrar las películas según la clasificación y el título
  const peliculasFiltradas = peliculas.filter((pelicula) => {
    const tituloNormalizado = pelicula.titulo.toLowerCase();
    const busquedaNormalizada = normalizarBusqueda(busqueda);

    const coincideClasificacion =
      filtroClasificacion === "Todas" || pelicula.clasificacion === filtroClasificacion;

    const coincideBusqueda = tituloNormalizado.includes(busquedaNormalizada);

    return coincideClasificacion && coincideBusqueda;
  });

  return (
    <div className="App">
      <h1>Lista de Películas</h1>

      {/* Campo de búsqueda */}
      <div className="busqueda">
        <label htmlFor="busqueda">Buscar por título:</label>
        <input
          id="busqueda"
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Escribe el título de la película"
        />
      </div>

      {/* Filtro de clasificación */}
      <FiltroClasificacion
        filtro={filtroClasificacion}
        setFiltro={setFiltroClasificacion}
      />

      {/* Renderizado condicional */}
      {peliculasFiltradas.length > 0 ? (
        <ListaPeliculas peliculas={peliculasFiltradas} />
      ) : (
        <p>No hay películas que coincidan</p>
      )}
    </div>
  );
}

export default App;