import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { Switch } from "react-router";
import Navbar from "../Navbar/Navbar";
import Nav from "../Navbar/Nav";
import Home from "../Home/Home";
import Search from "../searchConsignment/Search";
import Footer from "../Footer/Footerwrapper";
import Details from "../moreDetails/Details";

export const Routes = () => {
	return (
		<>
			<Nav />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route exact path="/moredetails/:id">
					<Details />
				</Route>
				<Route exact path="/serachConsiment">
					<Search />
				</Route>
			</Switch>
		</>
	);
};
