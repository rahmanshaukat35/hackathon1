import React from 'react';
import { products } from '@/components/utils/mock';
import Image from 'next/image';
import Link from 'next/link';
import AddToCart from '@/components/AddToCart';

const AllProducts = () => {
	return (
		<div className='flex flex-wrap justify-evenly lg:mt-12'>
			{products.map((item) => (
				<div
					key={item.id}
					className=' hover:cursor-pointer hover:-translate-y-3 py-5 '
				>
					<Link href={`/products/${item.id}`}>
						<Image src={item.image} alt='image1' sizes='32' />
					</Link>
					<h3 className='font-bold text-lg mt-3'>{item.name}</h3>
					<p className='font-bold text-lg'>${item.price}</p>
					<p className='font-bold text-lg'>Category: {item.category}</p>
					<AddToCart />
				</div>
			))}
		</div>
	);
};

export default AllProducts;
