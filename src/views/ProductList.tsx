import MultipleItems from '@/components/SilkSLider';
import SimpleSlider from '@/components/SingleSilkSlider';
import TwoSilkItems from '@/components/TwoSilkSlider';
import React from 'react';

const ProductList = () => {
	return (
		<>
			<div className='lg:block hidden '>
				<MultipleItems />
			</div>
			<div className='lg:hidden md:block hidden'>
				<TwoSilkItems />
			</div>
			<div className='md:hidden'>
				<SimpleSlider />
			</div>
		</>
	);
};

export default ProductList;
