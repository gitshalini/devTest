import React, {useState} from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import "./styles/index.css";
import Dashboard from './components/dashboard';
import Company from './components/company';

function App() {
	const [navVisible, showNavbar] = useState(false);

	return (
		<div className="App">
			<BrowserRouter >
				<Navbar visible={ navVisible } show={ showNavbar } />
				<Routes>
					<Route path="/" element={<Navigate to="/dashboard" />} />
					<Route path='/dashboard' element={<Dashboard/>} />
					<Route path='/company' element={<Company/>}/>
				</Routes>
			</BrowserRouter>
			<div className='chat'>
                <img src='/images/chat.png' alt='chat'/>
                <span>support</span>
            </div>
		</div>
  );
}

export default App;
