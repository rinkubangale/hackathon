import "./App.css";
import { Routes } from "./Components/Routes/Routes";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Footerwrapper from "./Components/Footer/Footerwrapper";
// import Carousel from './Components/Home/Carousel';

function App() {
	return (
		<div className="App">
			{/* <Navbar /> */}
			<Routes />
			<Footerwrapper />
		</div>
	);
}

export default App;
