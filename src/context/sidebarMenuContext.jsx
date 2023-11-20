import React, { createContext, useContext, useState } from "react";


const SidebarMenuContext = createContext();

export function SidebarMenuProvider({ children }) {
  const [menuOpen, setMenuOpen] = useState(false); // Default theme is 'light'

  const toggleMenuOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <SidebarMenuContext.Provider value={{ menuOpen, toggleMenuOpen, closeMenu }}>
      {children} 
    </SidebarMenuContext.Provider>
  );
}

// Custom hook for using the theme context
export function useSidebarMenu() {
  return useContext(SidebarMenuContext);
}
