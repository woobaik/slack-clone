import React, { useState } from "react"
import { BsPencilSquare } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"
import DropDown from "../../../Helper/Dropdown/Dropdown"
import { CSSTransition } from "react-transition-group"

import "./UserInfo.style.scss"

const UserInfo = () => {
	const [isOpen, setisOpen] = useState(false)
	const [wobble, setwobble] = useState(0)

	const dropdownList = [
		{ title: "My Profile", method: "" },
		{ title: "Change Password", method: "" },
		{ title: "Log out", method: "" },
	]
	const handleUsernameClick = () => {
		setisOpen(!isOpen)
		setwobble(1)
	}
	const handleAvatarClick = () => {
		console.log("avatar has been clicked")
	}

	return (
		<div className="UserInfo">
			<div
				className="username"
				onClick={() => handleUsernameClick()}
				onAnimationEnd={() => setwobble(0)}>
				Joungwoo Baik <RiArrowDropDownLine />
				{isOpen ? <DropDown listItems={dropdownList} wobble={wobble} /> : null}
			</div>
			<div className="avatar" onClick={() => handleAvatarClick()}>
				<BsPencilSquare />
			</div>
		</div>
	)
}

export default UserInfo
