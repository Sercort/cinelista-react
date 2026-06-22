import React from "react";
import PropTypes from "prop-types";
import PeliculaCard from "./PeliculaCard";

const ListaPeliculas = ({ peliculas }) => {
  return (
    <div className="lista-peliculas">
      {peliculas.map((pelicula) => (
        <PeliculaCard
          key={pelicula.id} // Usar el id como key
          titulo={pelicula.titulo}
          genero={pelicula.genero}
          duracion={pelicula.duracion}
          clasificacion={pelicula.clasificacion}
          sinopsis={pelicula.sinopsis}
          horarios={pelicula.horarios}
        />
      ))}
    </div>
  );
};

// Definición de PropTypes
ListaPeliculas.propTypes = {
  peliculas: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titulo: PropTypes.string.isRequired,
      genero: PropTypes.string.isRequired,
      duracion: PropTypes.number.isRequired,
      clasificacion: PropTypes.string.isRequired,
      sinopsis: PropTypes.string.isRequired,
      horarios: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default ListaPeliculas;