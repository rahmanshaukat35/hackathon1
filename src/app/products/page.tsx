import React from 'react';
import { products } from '@/components/utils/mock';
import Image from 'next/image';
import Link from 'next/link';

const AllProducts = () => {
	return (
		<div className='flex flex-wrap justify-evenly lg:mt-12'>
			{products.map((item) => (
				<Link href={`/products/${item.id}`}>
					<div
						key={item.id}
						className=' hover:cursor-pointer hover:-translate-y-3 py-5 '
					>
						<Image src={item.image} alt='image1' sizes='32' />
						<h3 className='font-bold text-lg mt-3'>{item.name}</h3>
						<p className='font-bold text-lg'>${item.price}</p>
						<p className='font-bold text-lg'>Category: {item.category}</p>
					</div>
				</Link>
			))}
		</div>
	);
};

export default AllProducts;
