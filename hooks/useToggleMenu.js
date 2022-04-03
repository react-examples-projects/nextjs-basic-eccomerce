import { useEffect, useRef } from "react";

export default function useToggleMenu({ isOpenSideMenu, toggleOpenSideMenu }) {
  const ulRef = useRef(null);
  useEffect(() => {
    const toggleSideMenu = (e) => {
      if (
        ulRef.current &&
        !e.target.isEqualNode(ulRef.current) &&
        !ulRef.current.contains(e.target) &&
        isOpenSideMenu
      ) {
        toggleOpenSideMenu();
      }
    };

    window.addEventListener("click", toggleSideMenu, false);
    return () => window.removeEventListener("click", toggleSideMenu, false);
  }, [isOpenSideMenu, toggleOpenSideMenu]);
  
  return ulRef;
}
