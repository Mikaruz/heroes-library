import { HeroList } from "../../heroes";
import { useAuth } from "../../hooks";
import "./Home.css";

export const Home = () => {
  const { user } = useAuth();

  return (
    <div className="layout">
      <div className="home-title">
        <h1 className="welcome">Welcome</h1>
        <h2 className="name">{user?.name}</h2>
      </div>
      <HeroList />
    </div>
  );
};
