import React from "react"
import "./Dropdown.style.scss"

// will need a array of title and method
const Dropdown = ({ listItems, wobble }) => {
	return (
		<div className="Dropdown">
			<ul wobble={wobble}>
				{listItems?.map((list) => {
					return <li key={list.title}>{list.title}</li>
				})}
			</ul>
		</div>
	)
}

export default Dropdown
