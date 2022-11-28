import _ from 'lodash';
import { areEligibleItems, markItemsApplied, eligibleItems } from './lib.js';
import { CUSTOMERS, ADS, PRICES, RULES } from './constants.js';

export class Purchase {
	constructor(customer, rules) {
		this.rules = rules;
		this.customer = customer;
		this.items = [];
	}

	addItem = (item) => {
		this.items.push({
			adType: item,
			customer: this.customer,
			price: PRICES[item],
		});
	};

	printPrice = () => {
		let checkoutItems = _.cloneDeep(this.items);

		this.rules.forEach((rule) => {
			while (areEligibleItems(rule)(checkoutItems)) {
				checkoutItems.push({
					ruleId: rule.ruleId,
					discountName: `discount ${rule.ruleId}`,
					discount: rule.discount,
				});
				markItemsApplied(rule)(eligibleItems(rule)(checkoutItems));
			}
		});

		console.log('Customer: ', this.customer);
		checkoutItems.forEach((element, index) => {
			console.log(
				index,
				'-',
				element.adType || element.discountName,
				'      ',
				PRICES[element.adType] || element.discount
			);
		});

		console.log(
			'total price:',
			checkoutItems.reduce((acc, el) => {
				return acc + (el.price || 0) - (el.discount || 0);
			}, 0)
		);
	};
}
