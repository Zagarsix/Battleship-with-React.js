import React from "react";
import injectContext from "../store/appContext.js";
import Grid from "./Grid.jsx";
import MainGame from "./MainGame.jsx";
import PreGame from "./PreGame.jsx";


//create your first component
const Home = () => {
	return (
		<PreGame />
	);
};

export default injectContext(Home);
