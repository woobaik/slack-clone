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
	const [modalOpen, setModalOpen] = useState(false)
	const [channelList, setChannelList] = useState([])

	// getting fetch data
	useEffect(() => {
		if (channelList.length > 0) {
			return
		}
		fetchListData()

		return () => {
			fetchListData()
		}
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

		channelRef.onSnapshot((snapshot) => {
			console.log("snap shot!!", snapshot.docs)
			const channelList = snapshot.docs.map((doc) => ({
				id: doc.id,
				title: doc.data().title,
				description: doc.data().description,
			}))
			setChannelList(channelList)
			console.log(channelList)
		})
	}

	const currentChannelSelector = (id, data) => {
		setActiveChannel(id)
		props.setCurrentChannel(data)
	}

	return (
		<div className="Channel">
			<Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
				<AddChannelModal
					closeBtn={() => setModalOpen(false)}
					openChannelList={() => setChannelListOpen(true)}
					setActiveChannel={(id) => setActiveChannel(id)}
				/>
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
							{channelList.map((channel) => {
								const { id, title, description } = channel

								return (
									<li
										onClick={() => currentChannelSelector(id, channel)}
										className={activeChannel === id ? "active" : ""}
										key={id}>
										<div className="channel-title">
											<FaSlackHash />
											<span>{title}</span>
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

const mapStoreToProps = (state) => {
	console.log("STATE", state)
	return state
}
const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentChannel: (channel) => dispatch(setCurrentChannel(channel)),
	}
}

export default connect(mapStoreToProps, mapDispatchToProps)(Channels)
