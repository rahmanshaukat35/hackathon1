import React from 'react';
import { products } from '@/components/utils/mock';
import Image from 'next/image';
import Link from 'next/link';
import AddToCart from '@/components/AddToCart';

const getProductsByCategory = (category: string) => {
	return products.filter((product) => product.category === category);
};

const page = ({ params }: { params: { slug: string } }) => {
	const result = getProductsByCategory(params.slug);
	return (
		<div className='flex flex-wrap justify-center lg:gap-x-[200px] md:gap-x-9 lg:mt-12'>
			{result.length > 0 ? (
				result.map((item) => (
					<div
						key={item.id}
						className=' hover:cursor-pointer hover:-translate-y-3 py-5 w-[200px] '
					>
						<Link href={`/products/${item.id}`}>
							<Image src={item.image} alt='image1' sizes='32' />
						</Link>
						<h3 className='font-bold text-lg mt-3'>{item.name}</h3>
						<p className='font-bold text-lg'>${item.price}</p>
						<p className='font-bold text-lg'>Category: {item.category}</p>
						<AddToCart />
					</div>
				))
			) : (
				<p className='text-lg font-bold text-center'>No Product Found</p>
			)}
		</div>
	);
};

export default page;
