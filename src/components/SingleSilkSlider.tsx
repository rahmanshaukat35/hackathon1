'use client';
import React, { Component } from 'react';
import Slider from 'react-slick';
import Image1 from '../../public/image1.webp';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
			pauseOnHover: true,
		};
		return (
			<div className='mt-12'>
				<Slider {...settings}>
					<div className=' hover:cursor-pointer hover:-translate-y-3'>
						<Image src={Image1} alt='image1' sizes='32' />
						<h3 className='font-bold text-lg mt-3'>Flex Sweater</h3>
						<p className='font-bold text-lg'>$104</p>
					</div>
					<div className=' hover:cursor-pointer hover:-translate-y-3'>
						<Image src={Image1} alt='image1' sizes='32' />
						<h3 className='font-bold text-lg mt-3'>Flex Sweater</h3>
						<p className='font-bold text-lg'>$104</p>
					</div>
					<div className=' hover:cursor-pointer hover:-translate-y-3'>
						<Image src={Image1} alt='image1' sizes='32' />
						<h3 className='font-bold text-lg mt-3'>Flex Sweater</h3>
						<p className='font-bold text-lg'>$104</p>
					</div>
					<div className=' hover:cursor-pointer hover:-translate-y-3'>
						<Image src={Image1} alt='image1' sizes='32' />
						<h3 className='font-bold text-lg mt-3'>Flex Sweater</h3>
						<p className='font-bold text-lg'>$104</p>
					</div>
					<div className=' hover:cursor-pointer hover:-translate-y-3'>
						<Image src={Image1} alt='image1' sizes='32' />
						<h3 className='font-bold text-lg mt-3'>Flex Sweater</h3>
						<p className='font-bold text-lg'>$104</p>
					</div>
				</Slider>
			</div>
		);
	}
}
