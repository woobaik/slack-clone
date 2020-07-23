import React from "react"

import { AiOutlineMail } from "react-icons/ai"
import { FiLock } from "react-icons/fi"

// IconMather by type, used in forms group
export const iconMatcher = (keyword) => {
	switch (keyword) {
		case "password":
			return <FiLock />

		case "email":
			return <AiOutlineMail />
		default:
			break
	}
}
