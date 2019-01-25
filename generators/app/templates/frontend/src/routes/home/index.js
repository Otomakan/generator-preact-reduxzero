import { h, Component } from 'preact';
import {Card,TextField,Button} from 'preact-material-components';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import 'preact-material-components/TextField/style.css';
import { route } from 'preact-router'


export default class Home extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	username:"",
	  	password:""
	  };
	  this.login = this.login.bind(this)
	}

	login(){
		route("select-deal");
	}

	render() {
		return (
			<div class={`${style.home} page`}>
				<h1>Home route</h1>
				<Card>
					<div class={style.cardHeader}>
						<h2 class=" mdc-typography--title">Login</h2>
						<div class=" mdc-typography--caption">Welcome to home route</div>
					</div>
					<TextField
					  label="User Name"
					  onKeyUp={e => {
					    this.setState({
					      name: e.target.value
					    });
					  }}
					/>
					<TextField
					  label="Password"
					  type="password"
					  onKeyUp={e => {
					    this.setState({
					      name: e.target.value
					    });
					  }}
					/>
					<Button ripple raised 
						onClick ={()=>{this.login()}}>
				          Login
				        </Button>

				</Card>
			</div>
		);
	}
}
