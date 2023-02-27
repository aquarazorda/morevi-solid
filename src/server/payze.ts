import server$ from 'solid-start/server';
import { z } from 'zod';

const buyProductSchema = z.object({
	amount: z.number().positive().int(),
	currency: z.string().min(3),
	lang: z.string().min(2),
	info: z.object({
		description: z.string().min(1),
		image: z.string().url(),
		name: z.string().min(1)
	})
});

type BuyProductInput = z.infer<typeof buyProductSchema>;

const _attemptBuyProduct = async (props: BuyProductInput) => {
	if (!process.env.PAYZE_API_KEY && !process.env.PAYZE_API_SECRET) {
		throw new Error('Payze is not configured');
	}

	const options = {
		method: 'POST',
		headers: {accept: 'application/json', 'content-type': 'application/json'},
		body: JSON.stringify({
			method: 'justPay',
			apiKey: process.env.PAYZE_API_KEY,
			apiSecret: process.env.PAYZE_API_SECRET,
			data: {
				...props,
				callback: 'http://127.0.0.1:3000/success_callback',
				callbackError: 'http://127.0.0.1:3000/fail_url',
				preauthorize: false,
				hookUrl: 'https://corp.com/payze_hook?authorization_token=token',
				hookRefund: false
			}
		})
	};

	if (!process.env.PAYZE_URL) {
		throw new Error('Payze URL is not configured');
	}

	return await fetch(process.env.PAYZE_URL, options)
		.then(response => response.json())
		.then(({ response }) => response?.transactionId 
			? '/payment/transaction/' + response.transactionId
			: '/payment/failed'
		)
		.catch(err => '/payment/failed');
};

export const attemptBuyProduct = server$(_attemptBuyProduct);