import React from 'react';
import { products } from '@/components/utils/mock';
import Image from 'next/image';
import AddToCart from '@/components/AddToCart';
import { MinusCircle, PlusCircle } from 'lucide-react';
const getProductsDetail = (id: string) => {
	return products.filter((product) => product.id == id);
};

const ProductPage = ({ params }: { params: { id: string } }) => {
	const result = getProductsDetail(params.id);
	const size = ['XS', 'S', 'M', 'L', 'XL'];
	return (
		<div className='lg:mt-12'>
			{result.map((product) => (
				<div
					key={product.id}
					className='flex lg:flex-row items-center justify-evenly bg-white rounded-lg shadow-md py-6 px-8 mb-8'
				>
					<div className='w-full lg:w-[300px] h-[300px] relative mb-4 lg:mb-0'>
						<Image src={product.image} alt={product.name} />
					</div>
					<div className='flex flex-col gap-y-3'>
						<div>
							<h1 className='text-2xl capitalize'>{product.name}</h1>
							<h2 className='text-gray-400 font-semibold text-base'>
								{product.tagline}
							</h2>
						</div>
						<div>
							<h3 className='text-xs font-semibold lg:mt-6'>SELECT SIZE</h3>
							<div className='flex gap-x-5'>
								{size.map((item, index) => (
									<div
										key={index}
										className='flex justify-center items-center w-10 h-10 duration-300 rounded-full hover:border hover:shadow-xl '
									>
										<span className='cursor-pointer'>{item}</span>
									</div>
								))}
							</div>
						</div>
						<div className='flex gap-x-8 items-center'>
							<h3 className='text-base font-semibold'>Quantity:</h3>
							<div className='flex gap-x-7'>
								<button className='hover:bg-gray-300 hover:rounded-full'>
									<MinusCircle size={30} />
								</button>
								<h2 className='text-xl font-semibold'>{1}</h2>
								<button className='hover:bg-gray-300 hover:rounded-full'>
									<PlusCircle size={30} />
								</button>
							</div>
						</div>
						<p>Price: ${product.price}</p>
						<p>Category: {product.category}</p>
						<AddToCart />
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductPage;
