import React, { useContext } from "react";
import injectContext, { Context } from "../store/appContext.js";
import Grid from "./Grid.jsx";
import MainGame from "./MainGame.jsx";
import PreGame from "./PreGame.jsx";


//create your first component
const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<>
		{!store.isPlacementDone ? <PreGame /> : <MainGame />}
		</>
	);
};

export default injectContext(Home);
