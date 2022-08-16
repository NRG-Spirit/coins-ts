import { NavLink } from 'react-router-dom';
export default function Categories() {
  return (
    <div>
      <NavLink to="/">Все товары</NavLink>
      <NavLink to="/coins">Монеты</NavLink>
      <NavLink to="/bondes" >Боны</NavLink>
    </div>
);
}
