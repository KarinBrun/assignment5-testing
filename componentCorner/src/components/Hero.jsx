import { Link } from 'react-router-dom';
import './Hero.css';

function Hero(props) {
  return (
    <div className="hero">
      <h1 className="hero-title">{props.title}</h1>

      <p className="subtitle">{props.subtitle}</p>

      <Link to="/products" className="cta">
        {props.cta}
      </Link>
    </div>
  );
}

export default Hero;