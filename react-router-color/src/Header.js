import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Welcome to the Color Factory</h1>
      <Link to='/colors/new'>Add a Color</Link>
    </header>
  );
};

export default Header;
