import { useState } from 'react';

import './Auth.css';
import Authorization from '../components/Authorization';
import Registration from '../components/Registration';

export default function Auth() {
  const [isRegistred, setIsRegistred] = useState(false);
  return (
    <div className="auth_wrapper">
      {isRegistred
        ? <div className="auth">
          <Authorization />
          <p>Нет аккаунта,
            <span onClick={() => setIsRegistred(!isRegistred)} className="auth_BTN" > зарегистрироваться</span>
          </p>
        </div>
        : <div className="auth">
          <Registration />
          <p>Есть аккаунт,
            <span onClick={() => setIsRegistred(!isRegistred)} className="auth_BTN"> войти</span>
          </p>
        </div>
      }
    </div>
  );
}
