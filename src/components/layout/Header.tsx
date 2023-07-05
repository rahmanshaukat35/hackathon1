import React from 'react';
import logo from '../../../public/logo.webp';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Search } from 'lucide-react';
import { Menu } from 'lucide-react';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';

const Header = () => {
	return (
		<div className='flex py-6  justify-between items-center'>
			<Image src={logo} alt='logo' className='w-40' />
			<div className='lg:block hidden'>
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
			</div>
			<div className='lg:block hidden'>
				<div className='border rounded-md flex p-3 w-30 '>
					<Search />
					<input
						type='search'
						className=' focus:outline-none mx-4 '
						placeholder='What you looking for'
					/>
				</div>
			</div>
			<div className='lg:block hidden'>
				<div className='h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center'>
					<span className='bg-yellow-300 rounded-full absolute w-4 h-4 top-7 text-sm flex justify-center items-center'>
						10
					</span>
					<ShoppingCart size={20} />
				</div>
			</div>
			<div className='lg:hidden'>
				<Popover>
					<PopoverTrigger>
						<Menu />
					</PopoverTrigger>
					<PopoverContent>
						<div className='flex flex-col items-center gap-y-4 cursor-pointer'>
							<div className='border rounded-md flex p-1 w-[85%] '>
								<input
									type='search'
									className=' focus:outline-none'
									placeholder='Search'
								/>
							</div>
							<ul className=' text-center flex flex-col gap-y-4 scroll-m-20 font-semibold tracking-tight  '>
								<li>
									<Link href={'/'}>Female</Link>
								</li>
								<li>
									<Link href={'/'}>Male</Link>
								</li>
								<li>
									<Link href={'/'}>Kids</Link>
								</li>
								<li>
									<Link href={'/'}>All Products</Link>
								</li>
							</ul>
							<div className='h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center'>
								<span className='bg-yellow-300 rounded-full absolute w-4 h-4 bottom-12 text-sm flex justify-center items-center'>
									10
								</span>
								<ShoppingCart size={20} />
							</div>
						</div>
					</PopoverContent>
				</Popover>
			</div>
		</div>
	);
};

export default Header;
