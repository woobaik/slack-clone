import React, { useState, useEffect } from "react"
import "./Channels.style.scss"
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io"
import { FaSlackHash } from "react-icons/fa"
import { Transition } from "react-transition-group"
import { MdAdd } from "react-icons/md"
import Modal from "react-modal"
import AddChannelModal from "../../../Helper/Modal/AddChannelModal/AddChannelModal"
import { firestore } from "../../../../firebase"
import { connect } from "react-redux"
import { setCurrentChannel } from "../../../../redux/actions/channelActions"

const Channels = (props) => {
	const [channelListOpen, setChannelListOpen] = useState(false)
	const [activeChannel, setActiveChannel] = useState("")
	const [modalOpen, setModalOpen] = useState(true)
	const [channelList, setChannelList] = useState([])

	// getting fetch data
	useEffect(() => {
		fetchListData()
	}, [])

	// Modal mount
	Modal.setAppElement("#root")

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

	const fetchListData = () => {
		let channelRef = firestore.collection("channels")
		channelRef.get().then((doc) => {
			if (doc) {
				setChannelList(doc.docs)
			} else {
				console.log("Nothing from doc")
			}
		})
	}

	const currentChannelSelector = (id, data) => {
		setActiveChannel(id)
		props.setCurrentChannel(data)
	}

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
							{channelList.map((item) => {
								const data = item.data()
								const id = item.id

								return (
									<li
										onClick={() => currentChannelSelector(id, data)}
										className={activeChannel === id ? "active" : ""}
										key={id}>
										<div className="channel-title">
											<FaSlackHash />
											<span>{data.title}</span>
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

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
	}
}

export default connect(null, mapDispatchToProps)(Channels)
