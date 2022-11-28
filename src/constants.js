export const CUSTOMERS = {
	SECBITE: "SecondBite",
	AXIL: "Axil Coffee Roasters",
	MYER: "MYER",
	DEFAULT: "default",
};

export const ADS = {
	CLASSIC: "Classic Ad",
	STD_OUT: "Stand out Ad",
	PREMIUM: "Premium Ad",
};

export const PRICES = {
	[ADS.CLASSIC]: 269.99,
	[ADS.STD_OUT]: 322.99,
	[ADS.PREMIUM]: 394.99,
};

// rules are assumend sorted based on customer lowes achievable price
export const RULES = [
	{
		//ruleOrder: 1,
		ruleId: 1,
		customers: [CUSTOMERS.SECBITE],
		adTypes: [ADS.CLASSIC],
		count: 3,
		discount: 269.99,
	},
	{
		//ruleOrder: 1,
		ruleId: 2,
		customers: [CUSTOMERS.AXIL],
		adTypes: [ADS.STD_OUT],
		count: 1,
		discount: 23.0,
	},
	{
		//ruleOrder: 1,
		ruleId: 3,
		customers: [CUSTOMERS.MYER],
		adTypes: [ADS.STD_OUT],
		count: 5,
		discount: 322.99,
	},
	{
		//ruleOrder: 1,
		ruleId: 4,
		customers: [CUSTOMERS.MYER],
		adTypes: [ADS.PREMIUM],
		count: 1,
		discount: 15.0,
	},
];
