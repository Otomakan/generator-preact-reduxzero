import { h, Component } from 'preact';
import {Card,Typography, TextField,Button,Dialog,List} from 'preact-material-components';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import 'preact-material-components/TextField/style.css';
import { route } from 'preact-router'

import 'preact-material-components/List/style.css';

import { Connect } from "redux-zero/preact";

import actions from "../../actions/panelActions";

const panels = [
  {
    "Make": "LG",
    "Model": "LG335N1C-A5",
    "Buy price": 291.45
  },
  {
    "Make": "LG",
    "Model": "LG350Q1C-A5",
    "Buy price": 406
  },
  {
    "Make": "LG",
    "Model": "LG365Q1C-A5",
    "Buy price": 423.4
  },
  {
    "Make": "Seraphim",
    "Model": "SRP-290-6MB-BB",
    "Buy price": 136.3
  },
  {
    "Make": "Seraphim",
    "Model": "SRP-300-6MB-BB",
    "Buy price": 141
  },
  {
    "Make": "Seraphim",
    "Model": "SRP-310-6MB-BB",
    "Buy price": 145.7
  },
  {
    "Make": "Q Cells",
    "Model": "Q.PEAK-G4.1-290",
    "Buy price": 197.2
  },
  {
    "Make": "Q Cells",
    "Model": "Q.PEAK-G4.1-300",
    "Buy price": 204
  },
  {
    "Make": "Q Cells",
    "Model": "Q.PEAK-G4.1-305",
    "Buy price": 207.4
  },
  {
    "Make": "Sunpower",
    "Model": "SPR-E20-327",
    "Buy price": 310
  },
  {
    "Make": "Sunpower",
    "Model": "SPR-P17-350-COM",
    "Buy price": 1
  },
  {
    "Make": "Jinko",
    "Model": "JKM300M-60",
    "Buy price": 189
  },
  {
    "Make": "Jinko",
    "Model": "JKM330P-72",
    "Buy price": 1
  },
  {
    "Make": "Jinko",
    "Model": "JKM360M-72",
    "Buy price": 1
  },
  {
    "Make": "Trina",
    "Model": "TSM-305DD05A.08(II)",
    "Buy price": 158.6
  }
]
const mapToProps = ({ selectedPanels,currentPanel, totalPanelPrice }) => ({ selectedPanels,currentPanel,totalPanelPrice  });


export default class SelectPanels extends Component {


	constructor(props) {
	  super(props)
	  this.state = {
	  	panels: []
	  }
	  	this.displayPanels = this.displayPanels.bind(this)
		this.openPanelDialog = this.openPanelDialog.bind(this)
	}

	getPanels(){

		
		this.setState({
			panels:panels
		})
		// const APIKEY = "4c845649-fec1-474f-b33e-f59d9f60c3fb"
		// let headers = new Headers();

		// headers.set('Authorization', 'Basic ' + btoa(APIKEY + ":" + ""))
		// headers.set('Origin', 'http://mmpenergy.com.au')
		// // console.log(headerss)
		// fetch("http://localhost:8000/"
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
		this.getPanels()
	}


	openPanelDialog(contact){
		// const {details,name,state,create,updated,closeDate}  = con

		this.setState({
			currentPanel:{
				...panels
			}
		})
		// this.scrollingDlg.MDComponent.show();
	}

	getSelectedPanels(selectedPanels){
		// return(selectedPanels.map((panel))
		let items = []
		console.log(selectedPanels)
		for(let panel in selectedPanels){
			items.push(<List.Item> {selectedPanels[panel].Model} {selectedPanels[panel].number} </List.Item>)
		}
		return items
	}
	displayPanels(addPanel){
		return this.state.panels.map((panel,it)=>
			<tr class={`${style.row}`} onClick={()=>{this.openPanelDialog()}}>
              <th >
              	{it}
                </th>
              <th >{panel.Make}</th>
              <th>{panel.Model}</th>
              <th >{panel["Buy price"]}</th>
              <th >
              	<TextField fullwidth={false} onChange={(e)=>{addPanel(panel,e.target.value)}}></TextField>
              </th>
            </tr> 
          )
	}

  render(){
  return(
  	<Connect mapToProps={mapToProps} actions={actions}>
    {({ currentPanel,selectedPanels, totalPanelPrice, changeCurrentPanel, addPanel }) => {
   
    return	(
      <div class={`page`}>
	      <table class={`${style.table}`}>
	          <tr>  
	          	<th> Index </th>
	            <th >Model</th>
	            <th >Make</th>
	            <th >buy Price</th>
	            </tr>
	          { this.displayPanels(addPanel)}
	        </table>
	        <Button onClick={()=>{this.scrollingDlg.MDComponent.show()}}> NEXT </Button>
	         <Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>
		  <Dialog.Header>Opporunity Details</Dialog.Header>
		  <Dialog.Body scrollable={true}>
		    	<List>
		    		{this.getSelectedPanels(selectedPanels)}
		    	</List>
		    	<Typography headline4>total: {totalPanelPrice}</Typography>
		    </Dialog.Body>
		  <Dialog.Footer>
		    <Dialog.FooterButton cancel={true}>Return</Dialog.FooterButton>
		    <Dialog.FooterButton 
		    					onClick={()=>{
		    						route('/select-inverter')
		    					}}
		    					>Confirm</Dialog.FooterButton>
		  </Dialog.Footer>
		</Dialog>
      </div>

    )}}
    </Connect>
  )
}
}