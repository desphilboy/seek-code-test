import { Purchase } from './purchse.js';
import promptSync from 'prompt-sync';
import { CUSTOMERS, ADS, PRICES, RULES } from './constants.js';

let purchase = new Purchase(CUSTOMERS.DEFAULT, RULES);

(function main() {
	const terminal = promptSync();
	let input = '';

	while (input !== 'Q') {
		input = '';
		console.log(`
			Press:\n
			A: new Purchase for customer SecondBite.
			B: new Purchase for customer Axil Cofee Roasters.
			C: new Purchase for customer MYER.
			D: new Purchase for DEFAULT customer(pre selected)
			\n
			1- add Item Classic Ad
			2- add Item Stand Out Ad
			3- add Item Premium Ad

			P: pring Price\n
			Q: quit
			`);

		input = terminal('\n Please enter your choice then press Enter:');
		input = input.toUpperCase();

		console.log(`\nyour choice ${input}`);

		switch (input) {
			case 'A':
				purchase = new Purchase(CUSTOMERS.SECBITE, RULES);
				console.log('Customer changed to SecondBite');
				break;
			case 'B':
				purchase = new Purchase(CUSTOMERS.AXIL, RULES);
				console.log('Customer changed to Axil Cofee Roasters');
				break;
			case 'C':
				purchase = new Purchase(CUSTOMERS.MYER, RULES);
				console.log('Customer changed to MYER');
				break;
			case '1':
				purchase.addItem(ADS.CLASSIC);
				console.log('Added 1 classic to order');
				break;
			case '2':
				purchase.addItem(ADS.STD_OUT);
				console.log('Added 1 std out to order');
				break;

			case '3':
				purchase.addItem(ADS.PREMIUM);
				console.log('Added 1 premium to order');
				break;

			case 'P':
				purchase.printPrice();
				console.log('Priniting order...');
				break;

			case 'D':
				console.log('customer changed to default');
				purchase = new Purchase(CUSTOMERS.DEFAULT, RULES);
		}
	}

	purchase.printPrice();
})();
