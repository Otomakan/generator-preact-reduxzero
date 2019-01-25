export default store => ({
  changeCurrentInverter: (state,value) => ({ currentInverter: value }),
  addInverter: (state,inverter,number) => {
  	let newState = state.selectedInverters
	newState[inverter.Model] = inverter
	newState[inverter.Model].number = number
	let totalInverterPrice = 0
	for(let inverter in newState){
		totalInverterPrice += (newState[inverter]["Buy price"]*newState[inverter].number)
	}
	console.log(totalInverterPrice)
	return ({selectedInverters:newState, totalInverterPrice})
  }
});