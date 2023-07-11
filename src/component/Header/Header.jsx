import NavBarItem from './NavBarItem';
import HeaderSearch from './HeaderSearch';
import Button from '../Button';
import './Header.css';
const Header = () => {
  return (
    <div id="header">
      <div className="header__container">
        <NavBarItem />
        <h2 className="title">A lifetime of discounts? It's Genius</h2>
        <p>
          Get rewarded for your travel-unlock instant savings of 10% or more
          with a free account
        </p>
        <Button title="Sign in/Register" />
        {/* <button className="header__btn">Sign in/Register</button> */}
        <HeaderSearch />
      </div>
    </div>
  );
};
export default Header;
