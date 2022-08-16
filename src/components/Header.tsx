import { Link } from 'react-router-dom';

import './Header.css';
import { useAppSelector, useAppDispatch } from '../utils/hooks';

import { UserLogOut } from '../redux/userReducer';

import logo from '../assets/logo.svg';

import Categories from './Categories';
import Currency from './Currency';
import MiniCart from './MiniCart';

export default function Header() {
  const user = useAppSelector((state) => state?.user?.data?.name);
  const dispatch = useAppDispatch();

  function logOut () {
    localStorage.removeItem('user');
    dispatch(UserLogOut());
  }

  return (
    <div className="header">
      <Categories />
      <div className="header_logo">
        <Link to="/">
        <img src={logo} alt="My logo" />
        </Link>
      </div>
      <div className="header_user">
        {user && <MiniCart />}
        <Currency />
        {user 
        ? <button className="header_auth" onClick={()=>logOut()}>Выход</button>
        : <Link to="/authorization"><button className="header_auth">Авторизация</button></Link>
        }
      </div>
    </div>
  );
}