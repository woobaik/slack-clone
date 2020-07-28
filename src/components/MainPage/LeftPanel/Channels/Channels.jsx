import React from "react"
import "./Channels.style.scss"
import { IoMdArrowDropdown } from "react-icons/io"
import { FaSlackHash } from "react-icons/fa"

const Channels = () => {
	return (
		<div className="Channel">
			<div className="channel-header">
				{" "}
				<IoMdArrowDropdown /> Channels
			</div>
			<div className="channel-list">
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
		</div>
	)
}

export default Channels
