import React from "react"
import "./ChatPanel.style.scss"
import ChatHeader from "./ChatHeader/ChatHeader"
import ChatMain from "./ChatMain/ChatMain"
import ChatInput from "./ChatInput/ChatInput"

const ChatPanel = () => {
	return (
		<div className="ChatPanel">
			<ChatHeader />
			<ChatMain />
			<ChatInput />
		</div>
	)
}

export default ChatPanel
