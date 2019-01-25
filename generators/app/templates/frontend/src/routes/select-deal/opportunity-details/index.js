import { h, Component } from 'preact';
import {Dialog,List} from 'preact-material-components';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import 'preact-material-components/TextField/style.css';


export default class OpportunityDetails extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		const {details,name,state,create,updated,closeDate}  = this.props
		<Dialog>
		  <Dialog.Header>Use Google's location service?</Dialog.Header>
		  <Dialog.Body>
		    	<List>
		    		<List.Item>Details: {details}</List.Item>
		    		<List.Item>Name: {name} </List.Item>
		    		<List.Item>State: {state}</List.Item>

		    		<List.Item>Created: {created}</List.Item>
		    		<List.Item>Updated: {updated}</List.Item>
		    		<List.Item>ForeCast Close Date {closeDate}</List.Item>
		    	</List>
		    </Dialog.Body>
		  <Dialog.Footer>
		    <Dialog.FooterButton cancel={true}>Decline</Dialog.FooterButton>
		    <Dialog.FooterButton accept={true}>Accept</Dialog.FooterButton>
		  </Dialog.Footer>
	</Dialog>

	}
}
