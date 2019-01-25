import { h, Component } from 'preact';
import {Card,Typography, TextField,Button,Dialog,List} from 'preact-material-components';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import 'preact-material-components/TextField/style.css';
import { route } from 'preact-router'

import 'preact-material-components/List/style.css';

import { Connect } from "redux-zero/preact";

import actions from "../../actions/inverterActions";

const inverters = [
  {
    "Make": "Fronius",
    "Model": "5kw",
    "Buy price": 1499
  },
  {
    "Make": "Fronius",
    "Model": "3kw",
    "Buy price": 1210
  },
  {
    "Make": "Fronius",
    "Model": "symo 8.2kw",
    "Buy price": 2030
  },
  {
    "Make": "Fronius",
    "Model": "symo 20kw",
    "Buy price": 3750
  },
  {
    "Make": "Fronius",
    "Model": "eco 27kw",
    "Buy price": 3699
  },
  {
    "Make": "SolarEdge",
    "Model": "SE3000H",
    "Buy price": 899
  },
  {
    "Make": "SolarEdge",
    "Model": "SE5000H",
    "Buy price": 1209
  },
  {
    "Make": "SolarEdge",
    "Model": "SE17K",
    "Buy price": 1475
  },
  {
    "Make": "SolarEdge",
    "Model": "SE27.6K",
    "Buy price": 2085
  },
  {
    "Make": "SolarEdge",
    "Model": "SE525K",
    "Buy price": 2050
  },
  {
    "Make": "Enphase",
    "Model": "IQ7",
    "Buy price": 130
  },
  {
    "Make": "Enphase",
    "Model": "IQ7+",
    "Buy price": 135
  }
]


const mapToProps = ({ selectedInverters,currentInverter, totalInverterPrice }) => ({ selectedInverters,currentInverter,totalInverterPrice  });


export default class SelectPanels extends Component {


  constructor(props) {
    super(props)
    this.state = {
      inverters: []
    }
      this.displayInverters = this.displayInverters.bind(this)
    this.openPanelDialog = this.openPanelDialog.bind(this)
  }

  getPanels(){

    
    this.setState({
      inverters:inverters
    })
    // const APIKEY = "4c845649-fec1-474f-b33e-f59d9f60c3fb"
    // let headers = new Headers();

    // headers.set('Authorization', 'Basic ' + btoa(APIKEY + ":" + ""))
    // headers.set('Origin', 'http://mmpenergy.com.au')
    // // console.log(headerss)
    // fetch("http://localhost:8000/"
    //  ,{
    //   method:"GET",
    //   headers: headers
    // }).then(res=>{
    //  console.log(res)
    //  return res.json() })
    //  .then((t)=>{
    //      console.log(t)
    //      this.setState({
    //        contacts: t
    //      })
    //    })
    //   .catch(e=>{
    //    console.log(e)
    //   })
  }
  componentDidMount(){
    this.getPanels()
  }


  openPanelDialog(contact){
    // const {details,name,state,create,updated,closeDate}  = con

    this.setState({
      currentInverter:{
        ...inverters
      }
    })
    // this.scrollingDlg.MDComponent.show();
  }

  getSelectedInverters(selectedInverters){
    // return(selectedInverters.map((inverter))
    let items = []
    console.log(selectedInverters)
    for(let inverter in selectedInverters){
      items.push(<List.Item> {selectedInverters[inverter].Model} {selectedInverters[inverter].number} </List.Item>)
    }
    return items
  }
  displayInverters(addInverter){
    return this.state.inverters.map((inverter,it)=>
      <tr class={`${style.row}`}>
              <th >
                {it}
                </th>
              <th >{inverter.Make}</th>
              <th>{inverter.Model}</th>
              <th >{inverter["Buy price"]}</th>
              <th >
                <TextField fullwidth={false} onChange={(e)=>{addInverter(inverter,e.target.value)}}></TextField>
              </th>
            </tr> 
          )
  }

  render(){
  return(
    <Connect mapToProps={mapToProps} actions={actions}>
    {({ currentInverter,selectedInverters, totalInverterPrice, changecurrentInverter, addInverter }) => {
   
    return  (
      <div class={`page`}>
        <table class={`${style.table}`}>
            <tr>  
              <th> Index </th>
              <th >Model</th>
              <th >Make</th>
              <th >buy Price</th>
              </tr>
            { this.displayInverters(addInverter)}
          </table>
          <Button onClick={()=>{this.scrollingDlg.MDComponent.show()}}> NEXT </Button>
           <Dialog ref={scrollingDlg=>{this.scrollingDlg=scrollingDlg;}}>
      <Dialog.Header>Opporunity Details</Dialog.Header>
      <Dialog.Body scrollable={true}>
          <List>
            {this.getSelectedInverters(selectedInverters)}
          </List>
          <Typography headline4>total: {totalInverterPrice}</Typography>
        </Dialog.Body>
      <Dialog.Footer>
        <Dialog.FooterButton cancel={true}>Return</Dialog.FooterButton>
        <Dialog.FooterButton 
                  onClick={()=>{
                    route('/installation-specific')
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