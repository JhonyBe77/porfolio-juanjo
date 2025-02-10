import React, { useState } from "react";
import Nav from "react-nav";

const NavMode = () => {
  const [isDark, setIsDark] = useState(false); 

  const updateDarkMode = (value) => {
    setIsDark(value);
  };

  return (
    <Nav/>
  );
};

export default NavMode;
n