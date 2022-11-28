export const markItemsApplied = ({ count, ruleId }) => (eligibleItems) => {
	for (let i = 0; i < count && i < eligibleItems.length; ++i) {
		eligibleItems[i].ruleId = ruleId;
	}
};

export const eligibleItems = ({ customers = [], adTypes = [] }) => (
	items = []
) => {
	return items
		.filter(
			(item) =>
				(!customers?.length || customers.indexOf(item.customer) > -1) &&
				(!adTypes?.length || adTypes.indexOf(item.adType) > -1)
		)
		.filter((item) => !item.ruleId);
};

export const areEligibleItems = ({ customers = [], adTypes = [], count }) => (
	items = []
) => {
	return eligibleItems({ customers, adTypes })(items).length >= count;
};
