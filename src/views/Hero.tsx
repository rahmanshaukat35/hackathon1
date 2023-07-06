import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import heroImage from '../../public/header.webp';
import feature1 from '../../public/Featured1.webp';
import feature2 from '../../public/Featured2.webp';
import feature3 from '../../public/Featured3.webp';
import feature4 from '../../public/Featured4.webp';
import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';
const Hero = () => {
	return (
		<section className='flex flex-col md:flex-row mt-12'>
			{/* left div */}
			<div className='md:w-[50%] flex flex-col gap-y-12 items-start '>
				<Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700 hover:bg-blue-200'>
					Sale 70%
				</Badge>
				<div>
					<h1 className='scroll-m-20 text-3xl font-extrabold tracking-tight md:text-3xl lg:text-5xl'>
						An Industrial Take on <br className='lg:block hidden' />
						Streetwear
					</h1>
					<p className='leading-7 [&:not(:first-child)]:mt-6 text-black/60'>
						Anyone can beat you but no one can beat your outfit as long as you
						<br className='lg:block hidden' />
						{''} wear Dine outfit.
					</p>
				</div>
				<Link href='/products'>
					<Button className='bg-black h-12 px-8'>
						<ShoppingCart className='mr-2' />
						Start Shopping
					</Button>
				</Link>
				<div className='flex lg:gap-x-12 md:gap-x-6 '>
					<Image src={feature1} alt='feature1' className='lg:block hidden' />
					<Image src={feature2} alt='feature2' className='lg:block hidden' />
					<Image src={feature3} alt='feature3' className='lg:block hidden' />
					<Image src={feature4} alt='feature4' className='lg:block hidden' />
				</div>
			</div>
			{/* right div */}
			<div className=' bg-pink-200 rounded-full md:mt-0 mt-2 shrink-6 w-[70%] h-[70%] lg:w-[40%] '>
				<Image src={heroImage} alt='heroimage' />
			</div>
		</section>
	);
};

export default Hero;
