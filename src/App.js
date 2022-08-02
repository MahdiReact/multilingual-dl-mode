import { useEffect, useState } from 'react';
import { wordsContext } from './context/wordsContext';


import { fetcher } from './helper/fetcher';
import Dish from './components/dish/Dish'
import './App.css';
import Cup from './components/cup/Cup';
import Spoone from './components/spoone/Spoone';
import Header from './components/header/Header';
import Desc from './components/desc/Desc';


function App() {
  const [lang, setLang] = useState(localStorage.getItem("lang") || "en");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [words, setWords] = useState({})

  useEffect(() => {
    const url = `./_t/${lang}.json`;
    fetcher(url).then(data => setWords(data));
  }, [lang])
  return (
    <wordsContext.Provider value={{
      words,
      theme,
      lang
    }} >
      <div className="App" id={theme} dir={lang === "en" ? "ltr" : "rtl"}>
        <Header setTheme={setTheme} setLang={setLang} />
        <main className='main'>
          <section className='table' dir='ltr'>
            <Spoone img={"./images/spoone.png"} />
            <Dish img={theme === "light" ? "./images/breakfast.png" : "./images/dinner.png"} />
            <Cup img={theme === "light" ? "./images/coffe.png" : "./images/soda.png"} />
            <Desc>{words?.desc}</Desc>
          </section>
        </main>
      </div>
    </wordsContext.Provider>
  );
}

export default App;
