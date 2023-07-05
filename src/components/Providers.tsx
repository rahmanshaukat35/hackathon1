'use client';
import { store } from '@/store/store';
import React from 'react';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<Provider store={store}>
			{children}
			<Toaster />
		</Provider>
	);
};

export default Providers;
