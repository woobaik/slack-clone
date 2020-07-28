import React from "react"
import LeftPanel from "./LeftPanel/LeftPanel"
import ChatPanel from "./ChatPanel/ChatPanel"
import RightPanel from "./RightPanel/RightPanel"
import "./MainPage.style.scss"

const MainPage = () => {
	return (
		<div className="Main-Page">
			<LeftPanel />
			<ChatPanel />
			<RightPanel />
		</div>
	)
}

export default MainPage
