import React from 'react';
import logo from '../../../public/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Header = () => {
	return (
		<div className='flex py-6 px-8 justify-between items-center'>
			<Image src={logo} alt='logo' className='w-40' />
			<ul className='flex gap-x-10'>
				<li className='text-lg'>
					<Link href={'/'}>Female</Link>
				</li>
				<li className='text-lg'>
					<Link href={'/'}>Male</Link>
				</li>
				<li className='text-lg'>
					<Link href={'/'}>Kids</Link>
				</li>
				<li className='text-lg'>
					<Link href={'/'}>All Products</Link>
				</li>
			</ul>
			<div className='border rounded-md flex p-3 w-30 '>
				<Search />
				<input
					type='search'
					className=' focus:outline-none mx-4 '
					placeholder='What you looking for'
				/>
			</div>
			<div className='h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center'>
				<ShoppingCart size={20} />
			</div>
		</div>
	);
};

export default Header;
