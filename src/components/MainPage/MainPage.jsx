import React from "react"
import LeftPanel from "./LeftPanel/LeftPanel"
import ChatPanel from "./ChatPanel/ChatPanel"
import RightPanel from "./RightPanel/RightPanel"

const MainPage = () => {
	return (
		<div>
			<LeftPanel />
			<ChatPanel />
			<RightPanel />
		</div>
	)
}

export default MainPage
