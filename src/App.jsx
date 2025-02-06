import { useState, useEffect } from 'react';
import { context } from './context/context';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    if (isLight) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [isLight]);

  const updateLightMode = (boolean) => {
    setIsLight(boolean);
  };

  return (
    <>
      <div className="background"></div>
      <context.Provider value={{ isLight, updateLightMode }}>
        <Header />
        <Main />
      </context.Provider>
      <Footer />
    </>
  );
}

export default App;
