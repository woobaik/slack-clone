import React from "react"
import "./ChatHeader.style.scss"
import { MdPeople } from "react-icons/md"

const ChatHeader = () => {
	return (
		<div className="ChatHeader">
			<div className="channel-name">#social-media</div>
			<div className="channel-detail">
				<div className="channel-members">
					<MdPeople /> <span className="number-of-member">3 </span>
				</div>
				<div className="channel-description">
					Track and Coordinate social media
				</div>
			</div>
		</div>
	)
}

export default ChatHeader
