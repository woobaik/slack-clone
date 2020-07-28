import React from "react"
import "./ChatMain.style.scss"
import ChatBox from "./ChatBox/ChatBox"

const ChatMain = () => {
	return (
		<div className="Chat-Main">
			<ul>
				<li>
					<ChatBox />
				</li>
				<li>
					<ChatBox />
				</li>
				<li>
					<ChatBox />
				</li>
				<li>
					<ChatBox />
				</li>
				<li>
					<ChatBox />
				</li>
			</ul>
		</div>
	)
}

export default ChatMain
