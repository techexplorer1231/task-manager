import { useContext, createContext, useState } from "react";

const SidebarContext = createContext();

export const useSidebarContext = () => useContext(SidebarContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, setIsSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default AppContext;
