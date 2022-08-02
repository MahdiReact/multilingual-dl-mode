import React, { useContext } from "react";
import { wordsContext } from "../../context/wordsContext";

import "./desc.css";

const Desc = ({ children }) => {
	const { words, lang, theme } = useContext(wordsContext);
	return (
		<section className="desc" dir={lang === "en"? "ltr" : "rtl"} style={{
                     background : theme === "dark"? "rgba(59, 54, 54, 0.8)" : "rgba(255, 255, 255, 0.8)",
                     color : theme === "dark" ? "#fff" : "#000"
              } }>
			{children}
			<h2>{words?.author}</h2>
		</section>
	);
};

export default Desc;
