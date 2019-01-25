export default store => ({
  changeCurrentPanel: (state,value) => ({ currentPanel: value }),
  addPanel: (state,panel,number) => {
  	let newState = state.selectedPanels
	newState[panel.Model] = panel
	newState[panel.Model].number = number
	let totalPanelPrice = 0
	for(let panel in newState){
		totalPanelPrice += (newState[panel]["Buy price"]*newState[panel].number)
	}
	console.log(totalPanelPrice)
	return ({selectedPanels:newState, totalPanelPrice})
  }
});