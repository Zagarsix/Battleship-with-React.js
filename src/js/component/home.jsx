import React from "react";
import injectContext from "../store/appContext.js";
import Grid from "./Grid.jsx";


//create your first component
const Home = () => {
	return (
		<Grid />
	);
};

export default injectContext(Home);
