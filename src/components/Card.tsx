import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import React, { FC } from 'react';
import { oneProductType } from '../components/utils/ProductsDataArrayAndType';
import { client } from '../../sanity/lib/client';
import Link from 'next/link';

const builder = imageUrlBuilder(client);

function urlFor(source: any) {
	return builder.image(source);
}

const Card: FC<{ singleProductData: oneProductType }> = ({
	singleProductData,
}) => {
	return (
		<div className='max-w-sm min-w-[24rem] space-y-3 hover:scale-110 duration-700 cursor-pointer '>
			<div className=' w-full'>
				<Image
					width={1000}
					height={1000}
					src={urlFor(singleProductData.image[0].asset._ref)
						.width(1000)
						.height(1000)
						.url()}
					alt={singleProductData.image[0].alt}
					className='rounded-xl'
				/>
			</div>
			<div className='space-y-1 text-gray-600 font-semibold text-lg text-center md:text-start'>
				<Link href={`/catalog/${singleProductData.slug.current}`}>
					<h6>{singleProductData.productName}</h6>
					<p>${singleProductData.price}</p>
				</Link>
			</div>
		</div>
	);
};

export default Card;
