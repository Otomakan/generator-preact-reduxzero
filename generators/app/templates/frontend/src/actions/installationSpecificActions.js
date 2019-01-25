export default store => ({
  updateInstallationSpecific: (state,target, newValue) => {
  	state.installationSpecifics[target] = newValue
  	console.log(state.installationSpecifics)
  	return ({ state })
	}
	})