import React from "react"
import "./LeftPanel.style.scss"
import UserInfo from "./UserInfo/UserInfo"
import Channel from "./Channels/Channels"
const LeftPanel = () => {
	return (
		<div className="LeftPanel">
			<div className="user-info">
				<UserInfo />
			</div>
			<div className="channels">
				<Channel />
			</div>
		</div>
	)
}

export default LeftPanel
