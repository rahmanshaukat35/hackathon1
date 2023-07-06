'use client';
import React from 'react';
import { Button } from './ui/button';
import { addToCart } from '../store/slice/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { ShoppingCart } from 'lucide-react';
const AddToCart = () => {
	const dispatch = useDispatch();
	const addItem = () => {
		dispatch(addToCart({ quantity: 1 }));
		toast.success('Product add Successfully');
	};
	return (
		<Button onClick={addItem} className='flex gap-x-3'>
			<ShoppingCart /> Add to Cart
		</Button>
	);
};

export default AddToCart;
