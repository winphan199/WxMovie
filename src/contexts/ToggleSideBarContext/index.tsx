import { createContext, useState } from 'react';

interface IToggleSideBar {
  visibleSideBar: boolean;
  toggleSideBar: () => void;
}

const ToggleSideBarContext = createContext<IToggleSideBar>({ visibleSideBar: false, toggleSideBar: () => {} });

interface IToggleSideBarProviderProps {
  children: React.ReactNode;
}

function ToggleSideBarProvider({ children }: IToggleSideBarProviderProps) {
  const [visibleSideBar, setVisibileSideBar] = useState(false);

  const toggleSideBar = () => {
    setVisibileSideBar((prev) => !prev);
  };

  const value = {
    visibleSideBar: visibleSideBar,
    toggleSideBar: toggleSideBar,
  };

  return <ToggleSideBarContext.Provider value={value}>{children}</ToggleSideBarContext.Provider>;
}

export { ToggleSideBarContext, ToggleSideBarProvider };
