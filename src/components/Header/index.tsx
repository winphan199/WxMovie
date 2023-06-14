import { useContext } from 'react';

import { ViewMore } from '../Icons';
import { ToggleSideBarContext } from '~/contexts/ToggleSideBarContext';

function Header() {
  const { toggleSideBar } = useContext(ToggleSideBarContext);

  return (
    <div className="h-20 flex items-center justify-between px-10 fixed top-0 left-0 right-0 bg-white shadow-xl z-10">
      <h1 className="text-3xl font-bold">WxMovie</h1>
      <button className="lg:invisible" onClick={toggleSideBar}>
        <ViewMore width="30px" height="30px" />
      </button>
    </div>
  );
}

export default Header;
