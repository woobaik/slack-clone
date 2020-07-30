import React, { useState } from "react"
import "./Channels.style.scss"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaSlackHash, FaQq } from "react-icons/fa"
import { Transition } from "react-transition-group"

const Channels = () => {
	const [channelListOpen, setChannelListOpen] = useState(false)
	const [activeChannel, setActiveChannel] = useState("")
	const duration = 200

	const defaultStyle = {
		transition: `opacity ${duration}ms ease-in-out`,
		opacity: 0,
	}

	const transitionStyles = {
		entering: { opacity: 0.5, visibility: "hidden" },
		entered: { opacity: 1 },
		exiting: { opacity: 0.5, visibility: "hidden" },
		exited: { opacity: 0, visibility: "hidden" },
	}

	const list = [
		{ title: "Music", uId: 0 },
		{ title: "faq", uId: 1 },
		{ title: "office", uId: 2 },
		{ title: "job search", uId: 3 },
	]
	return (
		<div className="Channel">
			<div
				className="channel-header"
				onClick={() => setChannelListOpen(!channelListOpen)}>
				{" "}
				{channelListOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />} Channels
			</div>
			<Transition in={channelListOpen} timeout={duration}>
				{(state) => (
					<div
						className="channel-list"
						style={{
							...defaultStyle,
							...transitionStyles[state],
						}}>
						<ul>
							{list.map((item) => {
								return (
									<li
										onClick={() => setActiveChannel(item.uId)}
										className={activeChannel === item.uId ? "active" : ""}>
										<div className="channel-title">
											<FaSlackHash />
											<span>{item.title}</span>
										</div>
										<div className="channel-counter"></div>
									</li>
								)
							})}
						</ul>
					</div>
				)}
			</Transition>
		</div>
	)
}

export default Channels
