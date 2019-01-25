import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
import SelectDeal from '../routes/select-deal';

import SelectPanel from '../routes/select-panel';

import SelectInverter from '../routes/select-inverter';
import InstallationSpecific from '../routes/installation-specific'
import createStore from "redux-zero";


import store from "../store";

import { Provider } from "redux-zero/preact";
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
		<Provider store={store}>
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<SelectDeal path = "/select-deal" />
					<SelectPanel path = "/select-panel" />
					<SelectInverter path="/select-inverter" />
					<InstallationSpecific path="/installation-specific" />
					<NotFound default />
				</Router>
			</div>
		</Provider>
		);
	}
}
