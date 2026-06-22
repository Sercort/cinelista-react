import React from "react";
import peliculas from "./data/peliculas";

function App() {
  // Verificar que el array se carga correctamente
  console.log("Películas cargadas:", peliculas);

  return (
    <div className="App">
      <h1>Lista de Películas</h1>
      {/* Aquí puedes renderizar el componente PeliculaCard más adelante */}
    </div>
  );
}

export default App;