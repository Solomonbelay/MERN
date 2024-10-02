// CreatePost.js
import React, { useState } from "react";
import axios from "axios";
import './CreatePost.css'; // Import the CSS file

function CreatePost() {
	const [newPost, setNewPost] = useState({
		title: "",
		content: "",
		file: null,
	});

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setNewPost({ ...newPost, [name]: value });
	};

	const handleFileChange = (event) => {
		setNewPost({ ...newPost, file: event.target.files[0] });
	};

	const handlePostSubmit = () => {
		const formData = new FormData();
		formData.append("title", newPost.title);
		formData.append("content", newPost.content);
		formData.append("file", newPost.file);

		axios
			.post("http://localhost:5000/api/posts", formData)
			.then((response) => {
				setNewPost({ title: "", content: "", file: null });
			})
			.catch((error) => console.error("Error creating post:", error));
	};

	return (
		<div className="create-post">
			<h2>Create a Post</h2>
			<input
				type="text"
				name="title"
				placeholder="Title"
				value={newPost.title}
				onChange={handleInputChange}
				className="input-field"
			/>
			<textarea
				name="content"
				placeholder="Content"
				value={newPost.content}
				onChange={handleInputChange}
				className="input-field"
			></textarea>
			<input 
				type="file" 
				name="file" 
				onChange={handleFileChange} 
				className="file-input" 
			/>
			<button onClick={handlePostSubmit} className="submit-button">Post</button>
		</div>
	);
}

export default CreatePost;
