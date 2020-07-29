import React from "react"
import "./ChatBox.style.scss"

const ChatBox = () => {
	return (
		<div className="ChatBox">
			<div className="profile-pic">
				<img
					src={require("../../../../../assets/imgs/profile-demo/1.jpg")}
					alt="fc"
				/>
			</div>
			<div className="chat-container">
				<div className="chat-header">
					<div className="chat-name">Zoe Maxwell</div>
					<div className="chat-timestamp">12:45 PM</div>
				</div>
				<div className="chat-body">
					ipsum*10No! It was my pleaseure! Great to see the enthuasiasm out
					there.
				</div>
			</div>
		</div>
	)
}

export default ChatBox
