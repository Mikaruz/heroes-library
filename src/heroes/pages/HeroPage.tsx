import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";
import "./HeroPage.css";

export const HeroPage = () => {
  const { id } = useParams();
  const hero = useMemo(() => getHeroById(id!), [id]);
  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate(-1);
  };

  if (!hero) return <Navigate to="/" />;

  const imageUrl: string = `/assets/heroes/${id}.jpg`;

  return (
    <div className="layout">
      <div className="hero-container">
        <img className="hero-image" src={imageUrl} alt={id} />

        <div className="information">
          <h1>{hero.superhero}</h1>
          <div className="data">
            <b>Alter ego:</b>
            <p>{hero.alter_ego}</p>
          </div>
          <div className="data">
            <b>First appearence:</b>
            <p>{hero.first_appearance}</p>
          </div>
          <div className="data">
            <b>Characters:</b>
            <p>{hero.characters}</p>
          </div>
          <button
            onClick={onNavigateBack}
            className={hero.publisher === "DC Comics" ? "dc" : "marvel"}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};
