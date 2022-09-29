import React from "react";
import injectContext from "../store/appContext.js";
import Grid from "./Grid.jsx";
import MainGame from "./MainGame.jsx";


//create your first component
const Home = () => {
	return (
		<MainGame />
	);
};

export default injectContext(Home);
