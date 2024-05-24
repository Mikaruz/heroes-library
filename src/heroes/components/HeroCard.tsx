import { Link } from "react-router-dom";
import "./HeroCard.css";

type HeroCardProps = {
  id: string;
  superhero: string;
  alter_ego: string;
};

export const HeroCard = ({ id, superhero, alter_ego }: HeroCardProps) => {
  const imageUrl: string = `/assets/heroes/${id}.jpg`;

  return (
    <div className="hero-card">
      <Link to={`/hero/${id}`}>
        <img className="hero-image" src={imageUrl} alt={id} />
      </Link>
      <h2 className="hero-name">{superhero}</h2>
      <h3 className="hero-subname">{alter_ego}</h3>
    </div>
  );
};
