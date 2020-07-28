import React from "react"
import { connect } from "react-redux"

const Header = (props) => {
	console.log(props)
	return <div>Header</div>
}

const mapStateToProps = ({ firebase }) => {
	return {
		auth: firebase.auth,
	}
}
export default connect(mapStateToProps)(Header)
