import React, { useState } from "react"
import "./Channels.style.scss"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaSlackHash } from "react-icons/fa"
import { Transition } from "react-transition-group"

const Channels = () => {
	const [channelListOpen, setChannelListOpen] = useState(false)

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
							<li>
								<div className="channel-title">
									<FaSlackHash />
									<span>music</span>
								</div>
								<div className="channel-counter">13</div>
							</li>
							<li>
								<div className="channel-title">
									<FaSlackHash />
									<span>nyc office</span>
								</div>
								<div className="channel-counter">3</div>
							</li>
							<li className="active">
								<div className="channel-title">
									<FaSlackHash />
									<span>job search</span>
								</div>
								<div className="channel-counter">3</div>
							</li>
							<li>
								<div className="channel-title">
									<FaSlackHash />
									<span>faq</span>
								</div>
								<div className="channel-counter">3</div>
							</li>
						</ul>
					</div>
				)}
			</Transition>
		</div>
	)
}

export default Channels
