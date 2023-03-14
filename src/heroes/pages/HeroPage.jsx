import { useMemo } from "react";
import { Navigate, Link, useParams } from "react-router-dom";
import { getHeroId } from "../helpers";

export const HeroPage = () => {
  const { id } = useParams();

  // Usamos useMemo porque queremos que se vuelva a renderiza el componente unicamente si el id cambia. pero si cambia otra cosa del componente como un posible useState, no queremos renderiza todo el componente basado en el id.
  const hero = useMemo(() => getHeroId(id), [id]);

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <>
      <div className="row mt-5 mb-5 animate__animated animate__backInLeft">
        <div className="col-4">
          <img
            src={`../../../public/assets/${id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-8">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alter ego: </b>
              {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher: </b>
              {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>First appearance: </b>
              {hero.first_appearance}
            </li>
          </ul>

          <Link className="btn btn-outline-primary" to={-1}>
            Regresar
          </Link>
        </div>
      </div>
    </>
  );
};
