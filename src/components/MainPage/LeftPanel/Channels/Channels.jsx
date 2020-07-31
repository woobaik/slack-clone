import React, { useState } from "react"
import "./Channels.style.scss"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaSlackHash } from "react-icons/fa"
import { Transition } from "react-transition-group"
import { MdAdd } from "react-icons/md"
import Modal from "react-modal"
import AddChannelModal from "../../../Helper/Modal/AddChannelModal/AddChannelModal"

const Channels = () => {
	const [channelListOpen, setChannelListOpen] = useState(false)
	const [activeChannel, setActiveChannel] = useState("")
	const [modalOpen, setModalOpen] = useState(true)
	Modal.setAppElement("#root")
	//modal style

	const modelStyle = {}

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
			<Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
				<AddChannelModal closeBtn={() => setModalOpen(false)} />
			</Modal>
			<div className="channel-header">
				{" "}
				{channelListOpen ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}{" "}
				<div onClick={() => setChannelListOpen(!channelListOpen)}>
					Channels{" "}
				</div>
				<span onClick={() => setModalOpen(true)}>
					<MdAdd />
				</span>
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
										className={activeChannel === item.uId ? "active" : ""}
										key={item.uId}>
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
