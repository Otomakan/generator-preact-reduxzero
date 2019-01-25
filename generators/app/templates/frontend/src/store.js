import createStore from "redux-zero";

const initialState = { 
	currentOpportunity: {},
	currentPanel: {
		make:null,
		model:null,
		buyPrice:null
	},

	totalPanelPrice:null,
	currentInverter:{},
	totalInverterPrice:null,
	selectedInverters:{},
	totalPrice:null,
	selectedPanels:{},
	inverter:{},
	propertyDetails:{},
	installationSpecifics:{
		numberOfPhases:null, 
		switchBoardUpgradeIncluded:false,
		switchBoardUpgradePrice:null,
		numberOfCircuits:null,
		numberOfSplitArrays:null,
		panelOrientation:null,
		numberOfStoreys: null,
		raisedFrames: null,
		raisedFramesPrice: null,
	},
	quoteFields:{
		date: null,
		salesRep: null,
		contactNumber: null,
		customerName: null,
		email:null,
		installationAddress: null,
		suburb :null, 
		postCode : null,
		homePhone: null,
		mobileNumber: null,
		nameOnBill: null,
		meterNumber: null,
		distributor: null,
		energyRetailer: null,
		preApprovalCost: null,
		NMI: null,
		storeys: null,
		residentialCommercial: null,
		panelOrientation: null,
		adequateSiteAccess: null,
		roofType: null,
		roofPitch: null,
		splitArray: null,
		numberOfSplitArrays: 0,
		Phases: null,
		switchboardUpgrade: null,
		InverterLocation: null,

	},


};

export default createStore(initialState);