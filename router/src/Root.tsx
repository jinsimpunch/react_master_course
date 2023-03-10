

import { Outlet } from 'react-router-dom'
import Header from './components/Header';

function root() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default root;
