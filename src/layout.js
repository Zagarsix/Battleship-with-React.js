import React, { useContext } from "react";
import injectContext, { Context } from "./store/appContext.js";
import PlayerBoard from "./component/PlayerBoard";
import MainGame from "./component/MainGame.js";
import SetupMenu from "./component/SetupMenu.js";


const Layout = () => {
	const { store, actions } = useContext(Context)
	return (
		<>
		{!store.isPlacementDone ? <SetupMenu /> : <MainGame />}
		</>
	);
};

export default injectContext(Layout);
