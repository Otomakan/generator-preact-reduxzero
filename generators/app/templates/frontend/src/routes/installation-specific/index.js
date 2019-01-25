import { h, Component } from 'preact';
import {Card,TextField,Button,Dialog,List} from 'preact-material-components';
import Menu from 'preact-material-components/Menu';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import 'preact-material-components/TextField/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Menu/style.css';

import { route } from 'preact-router'


import { Connect } from "redux-zero/preact";

import actions from "../../actions/installationSpecificActions";


const mapToProps = ({ installationSpecifics }) => ({ installationSpecifics });

export default class SelectDeals extends Component {


	constructor(props) {
	  super(props);
	
	  this.state = {
	  	contacts :[],
	  	currentContact:{},
	  	showSwitchBoardPrice: true
	  }

		this.openODialog = this.openODialog.bind(this)
	}

	openODialog(){
		this.scrollingDlg.MDComponent.show();
	}


  render(){
  	 return (
     <Connect mapToProps={mapToProps} actions={actions}>
    {({ updateInstallationSpecific, installationSpecifics}) => {


   return	(

      <div class={`page`}>

      	<div class={`${style["form-container"]}`}>
      	<TextField class={`${style.card}`}fullwidth={false} label="Number of Phases"/>
    	<DropDown title="Switch Board Upgrade Included" items={["true", "false"]}/>
        {this.state.showSwitchBoardPrice
        	?<TextField class={`${style.card}`}fullwidth={false} label="Switch Board Upgrade Price"/>
      		:null
        }
     	</div>
     	
     	<Button onClick="()=>{console.log(installationSpecifics)}">CLICK</Button>
      <Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>
		  <Dialog.Header>Opporunity Details</Dialog.Header>
		  <Dialog.Body scrollable={true}>
		    	<List>
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

class DropDown extends Component {
	constructor(props) {
		super(props)

		this.state ={
			open:false,
			items: this.props.items,
			title: this.props.title,
		}
	}
	toggleMenu(){
	  this.setState(prevState => ({
	    open: !prevState.open
	  }))
	}
	render(){
		const{items} = this.props
  		const{open,title} = this.state
 		return(<div className="dd-wrapper">
		  <div className="dd-header" onClick={() => this.toggleMenu()}>
		    <div className="dd-header-title">{title}</div>
		  </div>
		  <ul className="dd-list">
		    {open
		    	?this.state.items.map((item)=><li className="dd-list-item" 
		    		onClick={()=>{this.setState({title:item})}}>{item}</li>)
		    	:null}
		  </ul>
		</div>)
	}
	// methods
}

// <div class={`${style["form-container"]}`}>
//      		{Object.keys(installationSpecifics).map((obj)=>{
//      			return <TextField class={`${style.card}`}fullwidth={false} 
//      			outerStyle={{borderColor: 'rgb(171, 110, 209)'}}
//      			label={obj 
//      				.replace(/([A-Z])/g, ' $1')
//     				 .replace(/^./, function(str){ return str.toUpperCase(); })}
//     				onChange={(e)=>{
// 						updateInstallationSpecific(obj,e.target.value)
//     				}
//     				}


//     				 > </TextField>
//      		}
//      		)}
//      	</div>
