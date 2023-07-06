'use client';
import { useState } from 'react';
import getStripePromise from '../lib/stripe';
import { Button } from './ui/button';
import { products } from './utils/mock';

// const products = [
// 	{
// 		product: 1,
// 		name: 'Stripe Product',
// 		price: 400,
// 		quantity: 3,
// 	},
// 	{
// 		product: 2,
// 		name: 'Stripe Product2',
// 		price: 40,
// 		quantity: 2,
// 	},
// 	{
// 		product: 3,
// 		name: 'Stripe Product23',
// 		price: 4000,
// 		quantity: 1,
// 	},
// ];

const StripeCheckOutButton = () => {
	const [loading, setLoading] = useState(false);

	const handleCheckout = async () => {
		setLoading(true);
		try {
			const stripe = await getStripePromise();
			const response = await fetch('/api/stripe-session/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				cache: 'no-cache',
				body: JSON.stringify(products),
			});

			if (response.ok) {
				const data = await response.json();
				if (data.session) {
					stripe?.redirectToCheckout({ sessionId: data.session.id });
				}
			} else {
				throw new Error('An error occurred while creating a session');
			}
		} catch (error) {
			console.error(error);
			// Handle error here
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='py-5'>
			<Button onClick={handleCheckout} disabled={loading}>
				{loading ? 'Loading...' : 'Check out'}
			</Button>
		</div>
	);
};

export default StripeCheckOutButton;
