import { Link } from "react-router-dom";
import "./styles.css";

type HeroCardProps = {
  id: string;
  superhero: string;
  alter_ego: string;
};

export const HeroCard = ({ id, superhero, alter_ego }: HeroCardProps) => {
  const imageUrl: string = `/assets/heroes/${id}.jpg`;

  return (
    <div className="card">
      <Link to={`/hero/${id}`}>
        <img src={imageUrl} alt={id} />
      </Link>
      <h2>{superhero}</h2>
      <h3>{alter_ego}</h3>
    </div>
  );
};
