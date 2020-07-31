import React, { useState } from "react"
import "./AddChannelModal.style.scss"

const AddChannelModal = ({ closeBtn }) => {
	const [title, setTitle] = useState("")
	const [description, setDescription] = useState("")
	const [errors, setErrors] = useState({})

	const formValidation = () => {
		return title && description
	}

	const onChangeHandler = (e) => {
		e.target.name === "title"
			? setTitle(e.target.value)
			: setDescription(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setErrors({})
		if (formValidation()) {
			// Todo firebase

			setTitle("")
			setDescription("")
			setErrors("")
		} else {
			console.log("form not valid")
			if (title.length === 0) {
				setErrors((prevState) => ({
					...prevState,
					title: "Title can't be blank!",
				}))
			}
			if (description.length === 0) {
				setErrors((prevState) => ({
					...prevState,
					description: "Description can't be blank!",
				}))
			}
		}
	}

	return (
		<div className="AddChannelModal">
			<div className="AddChannelModal__header">
				<h1>Create new Channel</h1>
			</div>

			<div className="AddChannelModal__form-container">
				<form action="">
					<label htmlFor="title">Channel title</label>
					<input
						type="text"
						name="title"
						id="title"
						autoComplete="off"
						autoFocus
						onChange={(e) => onChangeHandler(e)}
					/>
					<div className="error-msg">{errors.title ? errors.title : null}</div>
					<label htmlFor="description">Channel description</label>
					<input
						type="text"
						name="description"
						id="description"
						autoComplete="off"
						onChange={(e) => onChangeHandler(e)}
					/>
					<div className="error-msg">
						{errors.description ? errors.description : null}
					</div>
					<div className="button-group">
						<div onClick={(e) => handleSubmit(e)}>Add Channel</div>
						<div className="gray" onClick={() => closeBtn()}>
							Close modal
						</div>
					</div>
				</form>
			</div>
		</div>
	)
}

export default AddChannelModal
