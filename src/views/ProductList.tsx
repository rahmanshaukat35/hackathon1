'use client';
import { oneProductType } from '@/components/utils/ProductsDataArrayAndType';
import { Component, FC, ReactNode } from 'react';
import Card from '../components/Card';

const ProductList: FC<{ ProductData: Array<oneProductType> }> = ({
	ProductData,
}) => {
	let initialX: number;
	let isDragging = false;
	let tabBox: any;

	const isBrowser = () => typeof window !== 'undefined';

	if (isBrowser()) {
		tabBox = document.querySelector('.scrollGrab');
	}

	// Desktop functions
	function mouseMoves(e: any) {
		if (!isDragging) return;
		if (tabBox) {
			tabBox.scrollLeft -= e.movementX;
		}
	}
	function mouseDown() {
		isDragging = true;
	}
	function mouseUp() {
		isDragging = false;
	}

	// mobile functions
	function mouseMovesForMobile(e: any) {
		if (!isDragging) return;
		if (tabBox) {
			var currentX = e.touches[0].clientX;
			var movementX = currentX - initialX;
			tabBox.scrollLeft -= movementX / 5;
		}
	}
	function mouseDownForMobile(e: any) {
		isDragging = true;
		initialX = e.touches[0].clientX;
	}
	let dataToItrate = ProductData.slice(1, 4);

	return (
		<div className='space-y-8 my-8 '>
			<div className='text-center space-y-3'>
				<h3 className='md:text-4xl text-2xl text-gray-800 font-bold'>
					Check What We Have
				</h3>
			</div>
			<div
				onMouseMove={mouseMoves}
				onMouseDown={mouseDown}
				onMouseUp={mouseUp}
				className=' flex lg:flex-row flex-col space-y-4 gap-8   py-4  justify-center items-center'
				onTouchMove={mouseMovesForMobile}
				onTouchStart={mouseDownForMobile}
				onTouchEnd={mouseUp}
			>
				{dataToItrate.map((item: oneProductType, index: number) => (
					<Card key={index + 4} singleProductData={item} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
