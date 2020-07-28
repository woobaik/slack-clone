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
						<FaSlackHash />
						<span>music</span>
					</li>
					<li>
						<FaSlackHash />
						<span>nyc-office</span>
					</li>
					<li>
						<FaSlackHash />
						<span>jobs</span>
					</li>
					<li>
						<FaSlackHash />
						<span>faq</span>
					</li>
					<li>
						<FaSlackHash />
						<span>social media</span>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Channels
