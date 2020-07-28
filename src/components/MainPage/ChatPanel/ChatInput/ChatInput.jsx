import React from "react"
import "./ChatInput.style.scss"
import { AiOutlineThunderbolt, AiOutlinePaperClip } from "react-icons/ai"
import { BsTypeBold, BsTypeItalic } from "react-icons/bs"
import { GrEmoji } from "react-icons/gr"

const ChatInput = () => {
	return (
		<div className="ChatInput">
			<textarea
				name="message-to-send"
				id="message-to-send"
				placeholder="Type your message"
				rows="1"></textarea>
			<div className="chat-toolbars-container">
				<div className="chat-toolbar">
					<AiOutlineThunderbolt />
				</div>
				<div className="chat-toolbar">
					{" "}
					<AiOutlinePaperClip />
				</div>
				<div className="chat-toolbar">
					{" "}
					<BsTypeBold />
				</div>
				<div className="chat-toolbar">
					{" "}
					<BsTypeItalic />
				</div>
				<div className="chat-toolbar">
					{" "}
					<GrEmoji />
				</div>
			</div>
		</div>
	)
}

export default ChatInput
