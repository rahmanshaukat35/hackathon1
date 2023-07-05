'use client';
import Image from 'next/image';
import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { products } from './utils/mock';
import Link from 'next/link';

export default class MultipleItems extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2500,
			pauseOnHover: true,
		};
		const productChecks = products.slice(0, 5);
		return (
			<div className='mt-12'>
				<Slider {...settings}>
					{productChecks.map((item) => (
						<Link href={`/products/${item.id}`}>
							<div
								key={item.id}
								className=' hover:cursor-pointer hover:-translate-y-3'
							>
								<Image src={item.image} alt='image1' sizes='32' />
								<h3 className='font-bold text-lg mt-3'>{item.name}</h3>
								<p className='font-bold text-lg'>${item.price}</p>
							</div>
						</Link>
					))}
				</Slider>
			</div>
		);
	}
}
