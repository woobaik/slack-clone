import React from "react"
import { BsPencilSquare } from "react-icons/bs"
import { RiArrowDropDownLine } from "react-icons/ri"

import "./UserInfo.style.scss"

const UserInfo = () => {
	return (
		<div className="UserInfo">
			<div className="username">
				<span>Joungwoo Baik</span> <RiArrowDropDownLine />
				<ul>
					<li>My Info</li>
					<li>Change Password</li>
				</ul>
			</div>
			<div className="avatar">
				<BsPencilSquare />
			</div>
		</div>
	)
}

export default UserInfo
