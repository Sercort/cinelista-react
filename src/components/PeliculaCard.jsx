import React from "react";
import PropTypes from "prop-types";
import "./PeliculaCard.css"; // Asegúrate de crear este archivo para los estilos

const PeliculaCard = ({
  titulo,
  genero,
  duracion,
  clasificacion,
  sinopsis,
  horarios,
}) => {
  // Función para determinar la clase de estilo según la clasificación
  const getClasificacionStyle = (clasificacion) => {
    switch (clasificacion) {
      case "TE":
        return "clasificacion-te";
      case "+14":
        return "clasificacion-14";
      case "+18":
        return "clasificacion-18";
      default:
        return "clasificacion-default";
    }
  };

  return (
    <div className="pelicula-card">
      <h2 className="titulo">{titulo}</h2>
      <p className="genero">Género: {genero}</p>
      <p className="duracion">Duración: {duracion} minutos</p>
      <p className={`clasificacion ${getClasificacionStyle(clasificacion)}`}>
        Clasificación: {clasificacion}
      </p>
      <p className="sinopsis">Sinopsis: {sinopsis}</p>
      <div className="horarios">
        <h4>Horarios:</h4>
        <ul>
          {horarios.map((horario, index) => (
            <li key={index}>{horario}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Definición de PropTypes
PeliculaCard.propTypes = {
  titulo: PropTypes.string.isRequired,
  genero: PropTypes.string.isRequired,
  duracion: PropTypes.number.isRequired,
  clasificacion: PropTypes.oneOf(["TE", "+14", "+18"]).isRequired,
  sinopsis: PropTypes.string.isRequired,
  horarios: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Valores por defecto para las props
PeliculaCard.defaultProps = {
  titulo: "Título no disponible",
  genero: "Género no especificado",
  duracion: 0,
  clasificacion: "TE",
  sinopsis: "Sinopsis no disponible",
  horarios: [],
};

export default PeliculaCard;