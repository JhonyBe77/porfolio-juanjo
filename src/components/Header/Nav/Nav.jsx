import React, { useState } from "react";
import Nav from "react-nav";

const NavMode = () => {
  const [isDark, setIsDark] = useState(false); // Estado local para manejar el modo

  const updateDarkMode = (value) => {
    setIsDark(value);
    // Aquí podrías agregar lógica adicional, como guardar la preferencia en localStorage
  };

  return (
    <Nav
      checked={isDark}
      onChange={({ target }) => updateDarkMode(target.checked)}
      icons={{ checked: "🌙", unchecked: "☀️" }}
      aria-label="Dark mode Nav"
    />
  );
};

export default NavMode;
n