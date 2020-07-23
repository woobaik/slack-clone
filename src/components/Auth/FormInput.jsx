import React from "react"
import { iconMatcher } from "../../util"

const FormInput = ({ label, type, onChange }) => {
	return (
		<div className="Form-input">
			<div className="form-input-icon">{iconMatcher(type)}</div>
			<div className="form-input-group">
				<h5>{label}</h5>
				<input type={type} onChange={onChange} />
			</div>
		</div>
	)
}

export default FormInput
