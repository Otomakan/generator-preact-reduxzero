import { h, Component } from 'preact';
import {Card,TextField,Button,Dialog,List} from 'preact-material-components';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import 'preact-material-components/TextField/style.css';
import { route } from 'preact-router'

import 'preact-material-components/List/style.css';

import { Connect } from "redux-zero/preact";

import actions from "../../actions/opportunityActions";


const mapToProps = ({ currentOpportunity }) => ({ currentOpportunity });

export default class SelectDeals extends Component {


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	contacts :[],
	  	currentContact:{}
	  }

	  this.displayContacts = this.displayContacts.bind(this)
		this.openODialog = this.openODialog.bind(this)
	}

	getOpportunities(){

		this.setState({
			contacts:[
			{ACTUAL_CLOSE_DATE: null,
			BID_AMOUNT: 0,
			BID_CURRENCY: "USD",
			BID_DURATION: null,
			BID_TYPE: "Fixed Bid",
			CATEGORY_ID: null,
			DATE_CREATED_UTC: "2018-06-19 11:19:35",
			DATE_UPDATED_UTC: "2018-06-24 12:12:50",
			FORECAST_CLOSE_DATE: "2015-01-22 00:00:00",
			OPPORTUNITY_DETAILS: "Doug Telford",
			OPPORTUNITY_NAME: "Doug Telford",
			OPPORTUNITY_STATE: "OPEN"
			},
			{
			DATE_CREATED_UTC: "2018-06-19 11:19:35",
			DATE_UPDATED_UTC: "2018-08-03 11:10:07",
			FORECAST_CLOSE_DATE: "2017-02-08 00:00:00",
			IMAGE_URL: null,
			LAST_ACTIVITY_DATE_UTC: null,
			OPPORTUNITY_DETAILS: "Rod Bowles",
			OPPORTUNITY_NAME: "Bendigo Showgrounds EMS",
			OPPORTUNITY_STATE: "WON"},
			{
			DATE_CREATED_UTC: "2018-06-19 11:19:35",
			DATE_UPDATED_UTC: "2018-06-19 11:19:35",
			FORECAST_CLOSE_DATE: "2015-12-12 00:00:00",
			
			OPPORTUNITY_DETAILS: "Michael Holt",
		
			OPPORTUNITY_NAME: "GSE Dubai",
			OPPORTUNITY_STATE: "OPEN",}
			]
		})
		// const APIKEY = "4c845649-fec1-474f-b33e-f59d9f60c3fb"
		// let headers = new Headers();

		// headers.set('Authorization', 'Basic ' + btoa(APIKEY + ":" + ""))
		// headers.set('Origin', 'http://mmpenergy.com.au')
		// // console.log(headerss)
		// fetch("http://localhost:8000/https://api.insightly.com/v3.0/Opportunities"
		// 	,{
		// 	 method:"GET",
		// 	 headers: headers
		// }).then(res=>{
		// 	console.log(res)
		// 	return res.json() })
		// 	.then((t)=>{
		// 	 		console.log(t)
		// 	 		this.setState({
		// 	 			contacts: t
		// 	 		})
		// 	 	})
		// 	 .catch(e=>{
		// 	 	console.log(e)
		// 	 })
	}
	componentDidMount(){
		this.getOpportunities()
	}

	openODialog(){
		this.scrollingDlg.MDComponent.show();
	}
	displayContacts(selectOpportunity,currentOpportunity){
		return this.state.contacts.map((contact,it)=>
			<tr class={`${style.row}`} 
				onClick={()=>{
					selectOpportunity(contact)
					this.openODialog()}}>
              <th >
              	{it}
                </th>
              <th >{contact.OPPORTUNITY_DETAILS}</th>
              <th>{contact.OPPORTUNITY_NAME}</th>
              <th >{contact.OPPORTUNITY_STATE}</th>
            </tr> 
          )
	}

  render(){
  	 return (
     <Connect mapToProps={mapToProps} actions={actions}>
    {({ currentOpportunity,selectOpportunity }) => {
const {OPPORTUNITY_DETAILS,OPPORTUNITY_NAME,OPPORTUNITY_STATE,DATE_CREATED_UTC,DATE_UPDATED_UTC,FORECAST_CLOSE_DATE} = currentOpportunity
   
    return	(

      <div class={`page`}>
      <table class={`${style.table}`}>
          <tr>  
          	<th> Index </th>
            <th >Opportunities name</th>
            <th >Details</th>
            <th >State</th>
            </tr>
          { this.displayContacts(selectOpportunity,currentOpportunity)}
        </table>
      <Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>
		  <Dialog.Header>Opporunity Details</Dialog.Header>
		  <Dialog.Body scrollable={true}>
		    	<List>
		    		<List.Item>Details: {OPPORTUNITY_DETAILS} </List.Item>
		    		<List.Item>Name: {OPPORTUNITY_NAME} </List.Item>
		    		<List.Item>State: {OPPORTUNITY_STATE}</List.Item>

		    		<List.Item>Created: {DATE_CREATED_UTC}</List.Item>
		    		<List.Item>Updated: {DATE_UPDATED_UTC}</List.Item>
		    		<List.Item>ForeCast Close Date {FORECAST_CLOSE_DATE}</List.Item>
		    	</List>
		    </Dialog.Body>
		  <Dialog.Footer>
		    <Dialog.FooterButton cancel={true}>Return</Dialog.FooterButton>
		    <Dialog.FooterButton 
		    					onClick={()=>{
		    						route('/select-panel')
		    					}}
		    					>Select</Dialog.FooterButton>
		  </Dialog.Footer>
		</Dialog>
      </div>
  )}}
      </Connect>
    );
  }
}
