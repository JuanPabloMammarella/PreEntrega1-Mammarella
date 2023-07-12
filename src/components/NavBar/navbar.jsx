import CartWidget from '../CartWidget/CartWidget';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='NavBar' >
      <Link to='/'>
        <h3>Ecommerce</h3>
      </Link>
      <div className='Categories'>
        <NavLink to={'/category/cocina'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Cocina</NavLink>
        <NavLink to={'/category/ropa'} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Ropa</NavLink>
      </div>
    <CartWidget />
    </nav>
  );
}

export default NavBar;