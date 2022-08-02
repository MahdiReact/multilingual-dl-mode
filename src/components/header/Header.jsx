import { useContext } from "react";

import Switch from "react-switch";
import { wordsContext } from "../../context/wordsContext";
import "./header.css";

const Header = ({ setTheme, setLang }) => {
	const { words, theme, lang } = useContext(wordsContext);
	return (
		<header className="header">
			<nav>
				<ul className="header-menu">
					<li>
						<select
								value={lang}
								onChange={(e) => {
									const selected = e.currentTarget.value;
									setLang(selected);
								}}
							>
								<option value="en">en</option>
								<option value="fa">فا</option>
							</select>
					</li>
					<li>
                                          <label className="label"><i className={theme === "dark" ? "fa fa-moon-o fa-2x": "fa fa-sun-o fa-2x"}/></label>
                                   <Switch
							checked={theme === "dark"}
							onChange={() => {
								setTheme(curr => curr === "dark" ? "light" : "dark");
							}}
						/>
                                          <h3 className="change-lang-desc">{words?.changeLangDesc}</h3>
					</li>
					<li>
						<h1 className="header-title">{words?.headerTitle}</h1>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
