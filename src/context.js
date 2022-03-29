import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const scrolling = (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navbar = document.getElementById("navbar");
    const linksContainer = document.getElementById("linksContainer");
    const navHeight = navbar.getBoundingClientRect().height;
    const linksContainerHeight = linksContainer.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    if (navHeight > 131) {
      position = position + linksContainerHeight;
      setShowLinks(false);
    }

    window.scrollTo({
      left: 0,
      top: position,
    });
  };

  return (
    <AppContext.Provider
      value={{
        scrolling,
        showLinks,
        toggleLinks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
