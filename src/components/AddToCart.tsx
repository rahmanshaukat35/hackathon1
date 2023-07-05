'use client';
import React from 'react';
import { Button } from './ui/button';
import { addToCart } from '../store/slice/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const AddToCart = () => {
	const dispatch = useDispatch();
	const addItem = () => {
		dispatch(addToCart({ quantity: 1 }));
		toast.success('Product add Successfully');
	};
	return <Button onClick={addItem}>Add to Cart</Button>;
};

export default AddToCart;
