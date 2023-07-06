import React from 'react';
import { products } from '@/components/utils/mock';
import Image from 'next/image';
import AddToCart from '@/components/AddToCart';
import { MinusCircle, PlusCircle } from 'lucide-react';
import MinusPlus from '@/components/MinusPlus';
import CheckOut from '@/components/CheckOut';
const getProductsDetail = (id: string) => {
	return products.filter((product) => product.id == id);
};

const ProductPage = ({ params }: { params: { id: string } }) => {
	const result = getProductsDetail(params.id);
	const size = ['XS', 'S', 'M', 'L', 'XL'];
	return (
		<section className='p-8 bg-gray-200 rounded-sm'>
			<div className='lg:mt-8 '>
				{result.map((product) => (
					<div
						key={product.id}
						className='flex lg:flex-row items-center justify-evenly bg-white rounded-lg shadow-md py-6 px-8 mb-8'
					>
						<div className='w-full lg:w-[300px] h-[300px] relative mb-4 lg:mb-0'>
							<Image src={product.image} alt={product.name} />
						</div>
						<div className='flex flex-col gap-y-6'>
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
								<div>
									<MinusPlus />
								</div>
							</div>
							<div className='flex items-center gap-x-8'>
								<AddToCart />
								<p className='text-2xl font-semibold'>
									${product.price.toFixed(2)}
								</p>
							</div>
							<CheckOut />
						</div>
					</div>
				))}
				<div className='bg-white rounded-xl shadow-md'>
					<div className='flex flex-col gap-y-12  py-10 px-8'>
						<div className='relative'>
							<h2 className='text-black/5 z-10 text-8xl'>Overview</h2>
							<h3 className='text-2xl font-bold absolute top-9  text-center'>
								Product Information
							</h3>
						</div>
						<hr className='w-full bg-black h-0.5' />
						<div className='flex gap-x-12'>
							<h3 className='text-base font-semibold w-full'>
								PRODUCT DETAILS
							</h3>
							<div className='flex flex-col gap-y-8'>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat. Duis aute
									irure dolor in reprehenderit in voluptate velit esse cillum
									dolore eu fugiat nulla pariatur. Excepteur sint occaecat
									cupidatat non proident, sunt in culpa qui officia deserunt
									mollit anim id est laborum.
								</p>
							</div>
						</div>
						<div className='flex lg:gap-x-12'>
							<h3 className='text-base font-semibold w-[30%]'>PRODUCT CARE</h3>
							<ul className='flex flex-col gap-y-3 list-disc font-semibold '>
								<li>Lorem ipsum dolor sit amet</li>
								<li>consectetur adipiscing elit</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductPage;
