import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.webp';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<section className='px-12'>
			<div className='flex justify-between mt-12'>
				<div className='flex flex-col gap-y-12 w-[30%]'>
					<Link href='/'>
						{' '}
						<Image src={logo} alt='logo' sizes='25' />
					</Link>
					<p className='text-sm text-black/70'>
						Small, artisan label that offers a thoughtfully curated collection
						of high quality everyday essentials made.
					</p>
					<div className='flex gap-x-6'>
						<div className='w-12 h-12 rounded-xl bg-gray-300 flex justify-center items-center'>
							<Facebook />
						</div>
						<div className='w-12 h-12 rounded-xl bg-gray-300 flex justify-center items-center'>
							<Twitter />
						</div>
						<div className='w-12 h-12 rounded-xl bg-gray-300 flex justify-center items-center'>
							<Linkedin />
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h2 className='text-xl font-semibold'>Company</h2>
					<h3>About</h3>
					<h3>Terms of Use</h3>
					<h3>Privacy Policy</h3>
					<h3>How it Works</h3>
					<h3>Contact Us</h3>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h2 className='text-xl font-semibold'>Support</h2>
					<h3>Support Carrer</h3>
					<h3>24hr Service</h3>
					<h3>Quick Chat</h3>
				</div>
				<div className='flex flex-col gap-y-3'>
					<h2 className='text-xl font-semibold'>Contact</h2>
					<h3>Whatsapp</h3>
					<h3>Support 24hr</h3>
				</div>
			</div>
			<hr className='w-full bg-black h-0.5 mt-12' />
			<div className='flex justify-between py-8 text-base text-black/60'>
				<p>Copyright © {year} Dine Market</p>
				<p>
					Design by :
					<span className='font-semibold text-black'>Rahman Shaukat Butt</span>
				</p>
				<p>
					Code By :<span className='font-semibold text-black'>github.com</span>
				</p>
			</div>
		</section>
	);
};

export default Footer;
