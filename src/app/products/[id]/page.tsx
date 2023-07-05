import React from 'react';
import { products } from '@/components/utils/mock';
import Image from 'next/image';

const getProductsDetail = (id: string) => {
	return products.filter((product) => product.id == id);
};

const ProductPage = ({ params }: { params: { id: string } }) => {
	const result = getProductsDetail(params.id);

	return (
		<div className='lg:mt-12'>
			{result.map((product) => (
				<div
					key={product.id}
					className='flex flex-col lg:flex-row items-center justify-evenly bg-white rounded-lg shadow-md py-6 px-8 mb-8'
				>
					<div className='w-full lg:w-[300px] h-[300px] relative mb-4 lg:mb-0'>
						<Image src={product.image} alt={product.name} />
					</div>
					<div>
						<p className='font-bold text-xl capitalize'>{product.name}</p>
						<p>Price: ${product.price}</p>
						<p>Category: {product.category}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductPage;
