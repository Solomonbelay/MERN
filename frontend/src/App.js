// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import './App.css'; // Import the CSS file

function App() {
	return (
		<Router>
			<div className="app">
				<nav className="navbar">
					<ul className="nav-links">
						<li>
							<Link className="nav-link" to="/">Home</Link>
						</li>
						<li>
							<Link className="nav-link" to="/create">Create Post</Link>
						</li>
					</ul>
				</nav>
				<div className="content">
					<Routes>
						<Route path="/create" element={<CreatePost />} />
						<Route path="/" element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
