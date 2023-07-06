'use client';
import { MinusCircle, PlusCircle } from 'lucide-react';
import React, { useState } from 'react';

const MinusPlus = () => {
	const [state, setState] = useState(1);

	const Increase = () => {
		return setState(state + 1);
	};
	const Decrease = () => {
		return setState(state <= 1 ? 1 : state - 1);
	};
	return (
		<div className='flex gap-x-7'>
			<button
				onClick={Decrease}
				className='hover:bg-gray-300 hover:rounded-full'
			>
				<MinusCircle size={30} />
			</button>
			<h2 className='text-xl font-semibold'>{state}</h2>
			<button
				onClick={Increase}
				className='hover:bg-gray-300 hover:rounded-full'
			>
				<PlusCircle size={30} />
			</button>
		</div>
	);
};

export default MinusPlus;
